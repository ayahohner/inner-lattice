import { fromMarkdown } from 'mdast-util-from-markdown';

function getText(node) {
  if (node.type === 'image' || node.type === 'imageReference' || node.type === 'html') {
    return '';
  }

  if ('value' in node && typeof node.value === 'string') {
    return node.value;
  }

  if (!('children' in node) || !Array.isArray(node.children)) {
    return '';
  }

  return node.children.map(getText).join(node.type === 'break' ? ' ' : '');
}

function findFirstParagraph(nodes) {
  for (const node of nodes) {
    if (node.type === 'paragraph') {
      const text = getText(node).replace(/\s+/g, ' ').trim();
      if (text) return text;
    }

    if ('children' in node && Array.isArray(node.children)) {
      const nestedParagraph = findFirstParagraph(node.children);
      if (nestedParagraph) return nestedParagraph;
    }
  }
}

export function getArticleDescription(description, body) {
  const explicitDescription = description?.replace(/\s+/g, ' ').trim();
  if (explicitDescription) return explicitDescription;

  return findFirstParagraph(fromMarkdown(body).children);
}
