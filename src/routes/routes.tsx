import { lazy } from 'react';
const Cart = lazy(() => import('../routes/cart.tsx'));
const Root = lazy(() => import('./root'));
const Products = lazy(() => import('../routes/products.tsx'));
const RegisterPage = lazy(() => import('./users/register'));
const ErrorPage = lazy(() => import('../routes/error-page.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
];
