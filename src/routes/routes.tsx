import { lazy } from 'react';
const Cart = lazy(() => import('../routes/cart.tsx'));
const Root = lazy(() => import('./root'));
const Products = lazy(() => import('../routes/products.tsx'));
const FeaturesPage = lazy(() => import('../routes/features.tsx'));
const RegisterPage = lazy(() => import('./users/register.tsx'));
const LoginPage = lazy(() => import('./users/login.tsx'));
const ErrorPage = lazy(() => import('../routes/error-page.tsx'));
const OrderReview = lazy(() => import('../routes/order-review.tsx'));
const CheckoutPage = lazy(() => import('../routes/checkout-page.tsx'));
const PrivacyPolicy = lazy(() => import('../routes/privacy-policy.tsx'));

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
    path: '/order/review',
    element: <OrderReview />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/privacy/policy',
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/features',
    element: <FeaturesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
];
