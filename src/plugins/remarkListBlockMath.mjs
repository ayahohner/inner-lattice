function isWhitespaceLine(value) {
  return /^\s*$/.test(value);
}

function isSourceDisplayMath(node, source) {
  if (!node.position) return false;

  const start = node.position.start.offset;
  const end = node.position.end.offset;
  if (typeof start === 'number' && typeof end === 'number' && typeof source === 'string') {
    const original = source.slice(start, end);
    if (original.startsWith('$$') && original.endsWith('$$')) return true;
  }

  const startLine = node.position.start.line;
  const endLine = node.position.end.line;
  const startColumn = node.position.start.column;
  const endColumn = node.position.end.column;

  if (startLine !== endLine) return false;
  if (typeof startColumn !== 'number' || typeof endColumn !== 'number') return false;

  return endColumn - startColumn === (node.value || '').length + 4;
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

function trimLineBreakBefore(children) {
  const previous = children.at(-1);
  if (previous && previous.type === 'text') {
    previous.value = previous.value.replace(/(\r?\n\s*)$/, '');
    if (!previous.value) children.pop();
  }
}

function trimLineBreakAfter(children) {
  const next = children[0];
  if (next && next.type === 'text') {
    next.value = next.value.replace(/^(\s*\r?\n)/, '');
    if (!next.value) children.shift();
  }
}

function paragraphWithChildren(original, children) {
  return {
    ...original,
    children,
  };
}

function splitParagraphDisplayMath(paragraphNode, source) {
  if (!paragraphNode || !Array.isArray(paragraphNode.children)) return null;

  const nodes = [];
  let currentParagraphChildren = [];

  for (let i = 0; i < paragraphNode.children.length; i += 1) {
    const child = paragraphNode.children[i];

    if (
      child.type !== 'inlineMath' ||
      !isSourceDisplayMath(child, source) ||
      !isLineAlone(paragraphNode.children, i)
    ) {
      currentParagraphChildren.push(child);
      continue;
    }

    trimLineBreakBefore(currentParagraphChildren);
    if (currentParagraphChildren.length > 0) {
      nodes.push(paragraphWithChildren(paragraphNode, currentParagraphChildren));
    }

    nodes.push(makeDisplayMath(child.value || '', child.position));

    currentParagraphChildren = paragraphNode.children.slice(i + 1);
    trimLineBreakAfter(currentParagraphChildren);
    i = paragraphNode.children.length;
  }

  if (nodes.length === 0) return null;
  if (currentParagraphChildren.length > 0) {
    nodes.push(paragraphWithChildren(paragraphNode, currentParagraphChildren));
  }

  return nodes;
}

function visit(node, source) {
  if (!node || !Array.isArray(node.children)) return;

  for (let i = node.children.length - 1; i >= 0; i -= 1) {
    const child = node.children[i];
    if (child.type === 'paragraph') {
      const replacement = splitParagraphDisplayMath(child, source);
      if (replacement) {
        node.children.splice(i, 1, ...replacement);
      }
    }
  }

  for (const child of node.children) {
    visit(child, source);
  }
}

export default function remarkListBlockMath() {
  return (tree, file) => {
    if (!tree || !Array.isArray(tree.children)) return;
    const source = String(file.value || '');
    visit(tree, source);
  };
}
