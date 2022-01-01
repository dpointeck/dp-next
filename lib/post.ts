import matter from "gray-matter";
import yaml from "js-yaml";
import markdownToHtml from "./markdown";
import FindFiles from "file-regex";
import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "_posts");

export async function getAllPosts() {
  const allPosts = fs.readdirSync(postsDirectory);

  const posts = allPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
      "utf8"
    );
    const { data } = matter(fileContents);

    const year = data.date.getFullYear();
    const date = new Date(data.date);
    const shortDate = date.toLocaleDateString("en-AT", {
      day: "2-digit",
      month: "short",
    });
    return {
      slug: data.slug,
      title: data.title,
      metadesc: data.metadesc,
      date: shortDate,
      year: year,
    };
  });
  return posts;
}

export async function getPostBySlug(slug: string) {
  let regex = new RegExp("\\d{8}_" + slug + ".md");
  const result = await FindFiles("_posts", regex);

  if (result.length) {
    const post = result[0].file;
    const fileContent = await import(`../_posts/${post}`);
    const meta = matter(fileContent.default);
    const content = await markdownToHtml(meta.content);

    return {
      title: meta.data.title,
      metadesc: meta.data.metadesc,
      content: content,
      slug: meta.data.slug,
    };
  }
  return false;
}

export async function getConfig() {
  const config = await require(`../config.yml`);
  return yaml.load(config.default);
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

  return postsByYear;
}

function getYears(posts: any) {
  const years: any = [];

  posts.forEach((element: any) => {
    if (!years.includes(element.year)) {
      years.push(element.year);
    }
  });

  return years.reverse();
}
