import "server-only";
import {remark} from 'remark';
import remarkHTML from 'remark-html';
import remarkPrism from 'remark-prism';

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkHTML).use(remarkPrism).process(markdown);
  return String(result);
}
