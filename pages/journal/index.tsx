import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getConfig, getPostsByYear } from "../../lib/post";
import PageLayout from "@layouts/pageLayout";
import PageHeader from "@components/pageHeader";
import Plus from "@svg/Plus.js";

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

const StyledPageHeading = styled.h1`
  color: #1a202c;
  position: relative;
  z-index: 40;
  font-size: 4rem;

  &:before {
    content: "";

    display: block;
    height: 80%;
    width: 110%;
    position: absolute;
    top: 2.8rem;
    left: 1.5;
    z-index: -1;
    background-image: linear-gradient(to top right, #fff95a, #fff22e);
    border-radius: 1rem;
  }
`;

const StyledPostsList = styled.div`
  h3:not(first-child) {
    margin-top: 2.75rem;
  }
`;

const ReadMoreLink = styled.a`
  display: none;

  margin-top: 0.5rem;
  margin-left: 3.8rem;
  font-size: 12px;

  @media (min-width: ${(props:any) => props.theme.screens.md}) {
    display: flex;
    cursor: pointer;
  }

  .arrow {
    opacity: 0;
    transform-origin: center center;
    transform: rotate(-20deg) translateY(-5px);
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    .arrow {
      opacity: 1;
      transform: rotate(0) translateY(0);
    }
  }
`;

function PostsListYears({ years }:any) {
  return (
    <StyledPostsList className="relative z-50 max-w-xl mx-auto">
      {years.map(function (year:any) {
        return (
          <div key={year.year}>
            <h2 className="font-mono text-4xl">{year.year}</h2>
            <hr />
            <ul>
              {year.posts.map(function (post:any) {
                return (
                  <li className="mt-4" key={post.slug}>
                    <Link href={`/journal/${post.slug}`}>
                      <a className="md:text-xl font-thin truncate pr-3 flex items-end">
                        {" "}
                        <span className="text-xs md:text-sm font-mono mr-3 text-gray-500">
                          {post.date}
                        </span>
                        <span className="truncate block">{post.title}</span>
                      </a>
                    </Link>
                    <Link href={`/journal/${post.slug}`}>
                      <ReadMoreLink className="font-mono flex">
                        <span className="mr-3">read more</span>
                        <span className="arrow">
                          <Plus className="h-5 w-5" />
                        </span>
                      </ReadMoreLink>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </StyledPostsList>
  );
}
