import { Helmet } from 'react-helmet';
import PageLayout from '../layouts/pageLayout';

export default function ResourcesPage() {
  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <PageLayout>
        <div className='py-20'>
          <h1 className='text-5xl text-center text-accent-1'>
            <span>Resources</span>
          </h1>
        </div>
      </PageLayout>
    </>
  );
}
