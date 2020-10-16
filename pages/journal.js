import { Helmet } from 'react-helmet';
import PageLayout from '../layouts/pageLayout';

export default function JournalPage() {
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
      </PageLayout>
    </>
  );
}
