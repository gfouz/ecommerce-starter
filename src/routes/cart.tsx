import { useCartStore } from '../store/store.ts';
import Product from '../components/product/Product.tsx';
import Layout from '../components/layout/Layout.tsx';
import NotFound from '../components/404/NotFound.tsx';

function Cart() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Layout>
      <ul
        className={
          cart.length > 0
            ? 'responsive-columns-minmax py-10 justify-center'
            : 'block'
        }
      >
        {cart.length === 0 || cart == undefined ? <NotFound /> : null}
        {cart?.map((product) => <Product product={product} key={product.id} />)}
      </ul>
    </Layout>
  );
}

export default Cart;
