import matter from 'gray-matter';
import yaml from 'js-yaml';
import markdownToHtml from '@util/markdown';
import FindFiles from 'file-regex';

export async function getAllPosts() {
  const ctx = require.context('../posts/', false, /\.md$/);

  const posts = [];
  for (const key of ctx.keys()) {
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = matter(content.default);
    let filename = post.split('_');
    posts.push({
      slug: filename[1].replace('.md', ''),
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getPostBySlug(slug) {
  let regex = new RegExp('\\d{8}_' + slug + '.md');
  const result = await FindFiles('posts', regex);
  console.log(result);
  if (result) {
    const post = result[0].file;
    const fileContent = await import(`../posts/${post}`);
    const meta = matter(fileContent.default);
    const content = await markdownToHtml(meta.content);
    return {
      title: meta.data.title,
      content: content,
    };
  }
  return false;
}

export async function getConfig() {
  const config = await import(`../config.yml`);
  return yaml.safeLoad(config.default);
}
