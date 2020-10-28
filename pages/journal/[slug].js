import { useRouter } from "next/router";
import styled from "styled-components";
import PageLayout from "@layouts/pageLayout";
import { getPostBySlug, getAllPosts } from "../../api";

export default function Post(props) {
  const router = useRouter();
  return (
    <PageLayout className="relative z-50">
      <h1 className="text-center text-3xl md:text-4xl font-bold">
        {props.title}
      </h1>
      <article
        className="prose max-w-2xl mx-auto relative z-50 mt-8"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></article>
    </PageLayout>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: await getPostBySlug(ctx.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
