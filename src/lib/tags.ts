export function getTagSlug(tag: string): string {
  return encodeURIComponent(tag.trim().toLowerCase().replace(/\s+/g, '-'));
}
