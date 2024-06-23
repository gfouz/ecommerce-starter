import { useLocation } from 'react-router-dom';
import { IProduct, ProductProps } from './types.ts';
import Product from './Product.tsx';

export default function Products({ products, limit = 10 }: ProductProps) {
  const location = useLocation();
  const { fromCategory } = location.state;
  const list = products.filter(
    (item) => item.category === fromCategory.category,
  );
  return (
    <ul className='responsive-columns justify-center'>
      {list.slice(0, limit).map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </ul>
  );
}
