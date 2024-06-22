import { useLocation } from "react-router-dom";
import { Product } from './Product';

export interface ProductsAttributes {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

interface ProductsProps {
  products: ProductsAttributes[];
}
export default function Products({ products }: ProductsProps) {
  const location = useLocation();
  const { fromCategory } = location.state;
  const list = products.filter( item => item.category === fromCategory.category)
  return (
    <section className='w-full px-4'>
      <ul className='responsive-columns'>
        {list.slice(0, 10).map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </section>
  );
}
