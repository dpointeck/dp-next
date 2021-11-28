import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import PageLayout from "@layouts/pageLayout";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/postgh repo clone dpointeck/dp-next";

export default function Post(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.metadesc} />
        <link
          rel="canonical"
          href={`https://www.daniel-pointecker.net/${props.slug}`}
        />
      </Head>
      <PageLayout className="relative z-50">
        <h1 className="text-center text-3xl md:text-4xl font-bold">
          {props.title}
        </h1>
        <article
          className="prose max-w-2xl mx-auto relative z-50 mt-8"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></article>
      </PageLayout>
    </>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: await getPostBySlug(ctx.params.slug),
  };
}

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = await getAllPosts();
  let postPaths = paths.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: postPaths,
    fallback: false,
  };
};
