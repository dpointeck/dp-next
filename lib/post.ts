import "server-only";
import { allPosts } from 'contentlayer/generated'
import { getYear, parseISO } from "date-fns";


export async function getAllPosts() {
  const posts = allPosts.map((post) => {
    const date = parseISO(post.date);
    const year = getYear(date);
    const shortDate = date.toLocaleDateString("en-AT", {
      day: "2-digit",
      month: "short",
    });
    return {
      slug: post.slug,
      title: post.title,
      metadesc: post.metadesc,
      date: shortDate,
      year: year,
    };
  });
  return posts;
}

export async function getPostBySlug(slug: string) {
    const post = allPosts.find((post) => post.slug === slug);

    return {
      title: post?.title ?? "",
      metadesc: post?.metadesc ?? "",
      content:  post?.body.html ??"",
      slug: post?.slug ?? "",
    };
}

export async function getPostsByYear(): Promise<any> {
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

function getYears(posts: any): Array<number> {
  const years: any = [];

  posts.forEach((element: any) => {
    if (!years.includes(element.year)) {
      years.push(element.year);
    }
  });

  return years.reverse();
}
