import Head from "next/head";
import Link from "next/link";
import { getConfig, getPostsByYear } from "../../lib/post";
import PageLayout from "@layouts/pageLayout";
import PageHeader from "@components/pageHeader";
import Plus from "@svg/Plus.js";
import styles from "./index.module.scss";

export default function JournalPage({ years }:any): unknown {
  return (
    <>
      <Head>
        <title>Journal</title>
        <meta
          name="description"
          content="Read posts around my findings in web development and software engineering."
        ></meta>
        <link
          rel="canonical"
          href="https://www.daniel-pointecker.net/journal/"
        />
      </Head>
      <PageLayout>
        <PageHeader>
          <span>Journal</span>
        </PageHeader>
        <PostsListYears years={years} />
      </PageLayout>
    </>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getPostsByYear();
  return {
    props: {
      years: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}

function PostsListYears({ years }:any) {
  return (
    <div className={`${styles.StyledPostsList} relative z-50 max-w-xl mx-auto`}>
      {years.map(function (year:any) {
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
                        <span className="mr-3">read more</span>
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
