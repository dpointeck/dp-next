import Link from "next/link";
import PageHeader from "components/pageHeader";
import Plus from "@svg/Plus.js";
import styles from "./index.module.scss";
import { getPostsByYear } from "lib/post";
import { Metadata } from "next";
import { allPosts } from 'contentlayer/generated'


export const metadata: Metadata = {
    title: "Journal",
    description: `My journal about work and side projects`,
    alternates: {
        canonical: "https://www.daniel-pointecker.net/journal"
    }
}

export default async function Page() {
    const posts = await getPostsByYear();

    return (
    <>
        <PageHeader>
          <span>Journal</span>
        </PageHeader>
        <PostsListYears posts={posts} />
    </>
  );
}


function PostsListYears({ posts }:any) {
  return (
    <div>
      {posts.map(function (year:any) {
        return (
          <div key={year.year}>
            <h2>{year.year}</h2>
            <hr />
            <ul>
              {year.posts.map(function (post:any) {
                return (
                  <li key={post.slug}>
                    <Link href={`/journal/${post.slug}`}>
                        {" "}
                        <span>
                          {post.date}
                        </span>
                        <span>{post.title}</span>
                    </Link>
                    <Link href={`/journal/${post.slug}`}>
                        <span >read full article</span>
                        <span>
                          <Plus />
                        </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
