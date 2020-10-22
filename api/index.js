import matter from 'gray-matter';
import yaml from 'js-yaml';
import markdownToHtml from '@util/markdown';
import FindFiles from 'file-regex';

export async function getAllPosts() {
  const ctx = require.context('../_posts/', false, /\.md$/);

  const posts = [];
  for (const key of ctx.keys()) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);
    let filename = post.split('_');
    const year = post.slice(0, 4);
    const date = meta.data.date;

    posts.push({
      date: JSON.stringify(date),
      year: year,
      slug: filename[1].replace('.md', ''),
      title: meta.data.title,
    });
  }

  return posts;
}

export async function getPostBySlug(slug) {
  let regex = new RegExp('\\d{8}_' + slug + '.md');
  const result = await FindFiles('_posts', regex);

  if (result.length) {
    const post = result[0].file;
    const fileContent = await import(`../_posts/${post}`);
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

export async function getPostsByYear() {
  const posts = await getAllPosts();
  let years = getYears(posts);

  const postsByYear = [];

  for (let year of years) {
    let thisYearsPosts = [];
    for (let post of posts) {
      if (post.year == year) {
        thisYearsPosts.push(post);
      }
    }
    postsByYear.push({
      year: year,
      posts: thisYearsPosts.reverse(),
    });
  }
  console.log(postsByYear);
  return postsByYear;
}

function getYears(posts) {
  const years = [];

  posts.forEach((element) => {
    if (!years.includes(element.year)) {
      years.push(element.year);
    }
  });

  return years.reverse();
}
