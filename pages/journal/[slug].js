import { useRouter } from 'next/router';
import styled from 'styled-components';
import PageLayout from '@layouts/pageLayout';
import { getAllPosts, getPostBySlug } from '../../api';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';

const StyledArticle = styled.article``;

export default function Post(props) {
  const router = useRouter();
  return (
    <PageLayout className='relative z-50'>
      <h1 className='text-center text-3xl md:text-4xl font-bold'>
        {props.title}
      </h1>
      <StyledArticle
        className='prose max-w-3xl mx-auto relative z-50 mt-8'
        dangerouslySetInnerHTML={{ __html: props.content }}></StyledArticle>
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
