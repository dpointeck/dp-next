import { Helmet } from 'react-helmet';
import Link from 'next/link';
import { getConfig, getAllPosts } from '@api/index';
import PageLayout from '../../layouts/pageLayout';

export default function JournalPage(props) {
  return (
    <>
      <Helmet>
        <title>Journal</title>
      </Helmet>
      <PageLayout>
        <div className='py-20'>
          <h1 className='text-5xl text-center text-accent-1'>
            <span>Journal</span>
          </h1>
        </div>
        <div className='relative z-50'>
          <ul>
            {props.posts.map(function (post) {
              return (
                <li key={post.slug}>
                  <Link href={`/journal/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </PageLayout>
    </>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}
