import Layout from '../components/layout/Layout.tsx';
import Features from '../components/features/Features.tsx';
import productlist from '../mocks/products.json';
import Category from '../components/category/Category.tsx';
import SuggestedProducts from '../components/product/SuggestedProducts.tsx';
import PaymentMethods from '../components/payment/Payment.tsx';

const Root = () => {
  return (
    <Layout>
      <article className='relative'>
        <section className='w-full h-full flex  absolute top-0 left-0'>
          <div className='w-full flex '>
            <div className='flex-1'></div>
            <div className='flex-1 py-20'>
              <section>
                <h1 className='text-[7vw] mb-[-12px] text-rose-500 font-extrabold tracking-tight'>
                  Rapid<span className='text-slate-700'>Coffee</span>
                </h1>
                <h2 className='text-slate-700 font-extrabold text-[3vw]'>
                  Taste this flavour forever
                </h2>
                <p className='text-[2vw]'>100% fresh and high quality coffee</p>
              </section>
            </div>
          </div>
        </section>
        <img src='images/coffee-bg.jpg' />
      </article>
      <Features />
      <Category />
      <SuggestedProducts products={productlist} />
      <PaymentMethods />
    </Layout>
  );
};

export default Root;
