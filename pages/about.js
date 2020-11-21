import Head from 'next/head';

import PageLayout from '../layouts/pageLayout';
import PageHeader from '@components/pageHeader';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name='description'
          content="Hi there 👋 I'm Daniel Pointecker
          I'm a self taught web developer from Schärding, Upper Austria 🇦🇹
          I'm makeing websites since 2014."
        />
      </Head>
      <PageLayout>
        <div className='pt-0 pb-20'>
          <PageHeader>About</PageHeader>
          <article className='prose-xl max-w-2xl mx-auto relative z-50 mt-8'>
            <h2>Hi there 👋 I'm Daniel Pointecker </h2>
            <p>
              I'm a self taught web developer from Schärding,
              <nobr> Upper Austria 🇦🇹</nobr>
              <br />
              I'm makeing websites since 2014.
            </p>
            <p>
              I love working in webdevelopment because our business is in
              constant change and there is always new stuff to learn. My day to
              day tools are HTML, CSS, Javasript and PHP. At the moment I'm
              studying golang and try to implement tests in my day to day work.
            </p>
          </article>
        </div>
      </PageLayout>
    </>
  );
}
