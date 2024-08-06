import Features from '../components/features/Features.tsx';
import Layout from '../components/layout/Layout.tsx';

const FeaturesPage = () => {
  return (
    <Layout>
      <div className='bg-rose-50 w-full h-full'>
        <Features styles='flex flex-col' />
      </div>
    </Layout>
  );
};
export default FeaturesPage;
