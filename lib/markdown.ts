import {remark} from 'remark';
import remarkHTML from 'remark-html';
import remarkPrism from 'remark-prism';

export default async function markdownToHtml(markdown: any): Promise<any> {
  return (await remark().use(remarkHTML).use(remarkPrism).process(markdown)).toString();
}
