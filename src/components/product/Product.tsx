import { useState, useEffect } from 'react';
import { useCartStore } from '../../store/store.ts';
import { Product as IProduct } from '../../store/store';
import ProductCard from '../../components/card/Card.tsx';
import PlusButton from './PlusButton.tsx';
import MinusButton from './MinusButton.tsx';
import DeleteButton from './DeleteButton.tsx';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const cart = useCartStore((state) => state.cart);
  const _product = cart.find((item) => item.id === product.id);
  const dispatch = useCartStore((state) => state.dispatch);
  const [quantity, setQuantity] = useState<number>(0);
  useEffect(() => {
    let value = _product?.quantity ? _product.quantity : 0;
    setQuantity(value);
  }, [_product?.quantity]);

  return (
    <li className='bg-rose-100 p-4 rounded-lg'>
      <ProductCard product={product} quantity={quantity} />

      <div className='flex justify-evenly py-4'>
        <PlusButton quantity={quantity} product={product} dispatch={dispatch} />

        {quantity >= 2 ? (
          <MinusButton product={product} dispatch={dispatch} />
        ) : null}
        {quantity === 1 ? (
          <DeleteButton product={product} dispatch={dispatch} />
        ) : null}
      </div>
    </li>
  );
}
