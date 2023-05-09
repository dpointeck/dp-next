import Link from "next/link";
import PageHeader from "@components/pageHeader";
import Plus from "@svg/Plus.js";
import styles from "./index.module.scss";
import { getPostsByYear } from "@lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Journal",
    description: `My journal about work and side projects`,
    alternates: {
        canonical: "https://www.daniel-pointecker.net/journal/"
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
    <div className={`${styles.StyledPostsList} relative z-50 max-w-xl mx-auto`}>
      {posts.map(function (year:any) {
        return (
          <div key={year.year} className="mt-16">
            <h2 className="font-mono text-4xl">{year.year}</h2>
            <hr />
            <ul>
              {year.posts.map(function (post:any) {
                return (
                  <li className="mt-4" key={post.slug}>
                    <Link href={`/journal/${post.slug}`} className="md:text-xl font-thin truncate pr-3 flex items-end">
                        {" "}
                        <span className="text-xs md:text-sm font-mono mr-3 text-gray-500 dark:text-slate-50/50">
                          {post.date}
                        </span>
                        <span className="truncate block">{post.title}</span>
                    </Link>
                    <Link href={`/journal/${post.slug}`} className={`${styles.readMoreLink} font-mono flex`}>
                        <span className="mr-3">read full article</span>
                        <span className="arrow">
                          <Plus className="h-5 w-5" />
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
