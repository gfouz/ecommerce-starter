import { lazy } from 'react';
const Root = lazy(() => import('./root'));
const Products = lazy(() => import('../routes/products.tsx'));
const ErrorPage = lazy(() => import('../routes/error-page.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <Products />,
    errorElement: <ErrorPage />,
  },
];
