import matter from 'gray-matter';
import yaml from 'js-yaml';
import markdownToHtml from '@util/markdown';

export async function getAllPosts() {
  const ctx = require.context('../posts/', false, /\.md$/);

  const posts = [];
  for (const key of ctx.keys()) {
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace('.md', ''),
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../posts/${slug}.md`);
  const meta = await matter(fileContent.default);
  const content = await markdownToHtml(meta.content);
  return {
    title: meta.data.title,
    content: content,
  };
}

export async function getConfig() {
  const config = await import(`../config.yml`);
  return yaml.safeLoad(config.default);
}
