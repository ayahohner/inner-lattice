function isLikelyDisplayMath(value) {
  return /[\\^_=+*/-]|\[|\]|\{|\}|\\\\/.test(value);
}

function isWhitespaceLine(value) {
  return /^\s*$/.test(value);
}

function isLineAlone(children, index) {
  const previous = children[index - 1];
  const next = children[index + 1];
  const prevText = previous && previous.type === 'text' ? previous.value : '';
  const nextText = next && next.type === 'text' ? next.value : '';
  const prevTail = prevText.includes('\n') ? prevText.split(/\r?\n/).pop() : prevText;
  const nextHead = nextText.includes('\n') ? nextText.split(/\r?\n/)[0] : nextText;
  return isWhitespaceLine(prevTail) && (nextText === undefined || isWhitespaceLine(nextHead));
}

function makeDisplayMath(value, position) {
  return {
    type: 'math',
    value,
    data: {
      hName: 'pre',
      hChildren: [
        {
          type: 'element',
          tagName: 'code',
          properties: {
            className: ['language-math', 'math-display'],
          },
          children: [{ type: 'text', value }],
        },
      ],
    },
    position,
  };
}

function promoteListMath(paragraphNode, listChildren, paragraphIndex) {
  for (let i = paragraphNode.children.length - 1; i >= 0; i -= 1) {
    const child = paragraphNode.children[i];
    if (child.type !== 'inlineMath') continue;

    const value = child.value || '';
    if (!isLikelyDisplayMath(value)) continue;
    if (!isLineAlone(paragraphNode.children, i)) continue;

    const prev = paragraphNode.children[i - 1];
    if (prev && prev.type === 'text') {
      prev.value = prev.value.replace(/(\r?\n\s*)$/, '');
      if (!prev.value) paragraphNode.children.splice(i - 1, 1);
    }

    paragraphNode.children.splice(i, 1);
    listChildren.splice(paragraphIndex + 1, 0, makeDisplayMath(value, child.position));
  }
}

function visit(node) {
  if (!node || !Array.isArray(node.children)) return;

  if (node.type === 'listItem') {
    for (let i = node.children.length - 1; i >= 0; i -= 1) {
      const child = node.children[i];
      if (child.type === 'paragraph') {
        promoteListMath(child, node.children, i);
      }
    }
  }

  for (const child of node.children) {
    visit(child);
  }
}

export default function remarkListBlockMath() {
  return (tree) => {
    if (!tree || !Array.isArray(tree.children)) return;
    for (const child of tree.children) {
      visit(child);
    }
  };
}
