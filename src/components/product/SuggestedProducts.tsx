import Product from './Product';
import { ProductProps } from './types.ts';

export default function SuggestedProducts({
  products,
  limit = 4,
}: ProductProps) {
  const list = products.filter((item) => item.brand === true);
  return (
    <section className='w-full px-4 py-16 pb-20'>
      <h2 className='text-3xl my-6'>Suggested for you</h2>
      <ul className='responsive-columns'>
        {list.slice(0, limit).map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
}
