import React from 'react';
import SearchInput from '../../components/input/SearchInput.tsx';
import Navbar from '../../components/navbar/NextNavbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import ProductsInCartQuantity from '../../components/product/ProductsInCartQuantity.tsx';

const links = [
  '/',
  '/order/review',
  '/login',
  '/register',
  '/features',
  '/checkout',
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between sticky bg-white bg-opacity-80 z-30 top-0 left-0 items-center p-2 md:px-8'>
        <section className='flex items-center'>
          <h2 className='font-extrabold tracking-tight mx-2'>
            <span className='text-rose-500'>Rapid</span>Coffee
          </h2>
          <SearchInput />{' '}
        </section>
        <ProductsInCartQuantity />
      </div>
      <div className='w-full'>
        <Navbar links={links} />
      </div>
      <main className='ecommerce-main-layout'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
