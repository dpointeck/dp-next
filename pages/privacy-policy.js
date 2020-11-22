import Head from 'next/head';

import PageLayout from '../layouts/pageLayout';
import PageHeader from '@components/pageHeader';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name='description'
          content='This Privacy Policy provides information about which data we collect, what we use it for and which rights you have.'
        />
      </Head>
      <PageLayout>
        <div className='pt-0 pb-20'>
          <PageHeader>Privacy Policy</PageHeader>
          <article className='prose-xl max-w-2xl mx-auto relative z-50 mt-8'></article>
        </div>
      </PageLayout>
    </>
  );
}
