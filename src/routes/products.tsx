import productlist from '../mocks/products.json';
import Layout from '../components/layout/Layout.tsx';
import Products from '../components/product/Products.tsx';

export default function ProductsPage() {
  return (
    <Layout>
      <Products products={productlist} />;
    </Layout>
  );
}
