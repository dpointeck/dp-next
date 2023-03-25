import remark from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

export default async function markdownToHtml(markdown: any): Promise<any> {
  //@ts-ignore
  const result = await remark().use(remarkHtml).use(remarkPrism).process(markdown);
  return result.toString();
}
