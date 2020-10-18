import { useRouter } from 'next/router';
import PageLayout from '../../layouts/pageLayout';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <PageLayout>
      <p>Post: {slug}</p>
    </PageLayout>
  );
};

export default Post;
