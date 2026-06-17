function isLikelyDisplayMath(value) {
  return /[\\^_=+*/-]|\[|\]|\{|\}|\\\\/.test(value);
}

function looksLikeStandaloneLine(children, idx) {
  const prev = children[idx - 1];
  const next = children[idx + 1];

  const prevText = prev && prev.type === 'text' ? prev.value : '';
  const nextText = next && next.type === 'text' ? next.value : '';

  const prevLine = prevText.includes('\n') ? prevText.split(/\r?\n/).pop() : '';
  const prevHasOnlyIndent = /^\s*$/.test(prevLine);
  const nextHasOnlyIndent = nextText === undefined || /^\s*$/.test(nextText);

  return !!prev && prevHasOnlyIndent && nextHasOnlyIndent;
}

function promoteInlineMathLineInList(paragraphNode, listItems, paragraphIndex) {
  if (!paragraphNode || !Array.isArray(paragraphNode.children)) {
    return;
  }

  for (let childIndex = paragraphNode.children.length - 1; childIndex >= 0; childIndex -= 1) {
    const child = paragraphNode.children[childIndex];
    if (child.type !== 'inlineMath') {
      continue;
    }
    if (!isLikelyDisplayMath(child.value || '')) {
      continue;
    }
    if (!looksLikeStandaloneLine(paragraphNode.children, childIndex)) {
      continue;
    }
    const inlineStart = child.value || '';

    const prev = paragraphNode.children[childIndex - 1];
    if (prev && prev.type === 'text') {
      prev.value = prev.value.replace(/(\r?\n\s*)$/, '');
      if (!prev.value) {
        paragraphNode.children.splice(childIndex - 1, 1);
        childIndex -= 1;
      }
    }

    paragraphNode.children.splice(childIndex, 1);

    const mathNode = {
      type: 'math',
      value: inlineStart,
      data: {
        hName: 'pre',
        hChildren: [
          {
            type: 'element',
            tagName: 'code',
            properties: {
              className: ['language-math', 'math-display'],
            },
            children: [
              {
                type: 'text',
                value: inlineStart,
              },
            ],
          },
        ],
      },
      position: child.position,
    };
    listItems.splice(paragraphIndex + 1, 0, mathNode);
  }
}

export default function remarkListBlockMath() {
  return function transformer(tree) {
    if (!tree || !Array.isArray(tree.children)) {
      return;
    }

    const visitListItem = (node) => {
      if (!node || !Array.isArray(node.children)) {
        return;
      }

      if (node.type === 'listItem') {
        for (let childIndex = node.children.length - 1; childIndex >= 0; childIndex -= 1) {
          const child = node.children[childIndex];
          if (child.type !== 'paragraph') {
            continue;
          }
          promoteInlineMathLineInList(child, node.children, childIndex);
        }
      }

      for (const child of node.children) {
        visitListItem(child);
      }
    };

    for (const child of tree.children) {
      visitListItem(child);
    }
  };
}
