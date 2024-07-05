import React from 'react';
import { Card, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { IProduct } from '../product/types.ts';

interface ProductCardProps {
  product: IProduct;
  quantity: number;
}

export default function ProductCard({ product, quantity }: ProductCardProps) {
  const [blur, setBlur] = React.useState('');
  React.useEffect(() => {
    quantity >= 1 ? setBlur('filter brightness-50') : setBlur('filter');
  }, [quantity]);
  return (
    <Card isFooterBlurred radius='lg' className='border-none relative'>
      <img
        alt={product?.title}
        className={`w-full h-full ${blur}`}
        src={product?.thumbnail}
      />
      <section className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        {quantity > 0 ? (
          <h2 className='text-7xl text-white opacity-70 font-extrabold'>
            {quantity}
          </h2>
        ) : null}
      </section>
      <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
        <p className='text-2xl text-white'>
          <span className='mx-2'>$</span>
          {quantity > 1 ? (product.price * quantity).toFixed(2) : product.price}
        </p>
        <Button
          className='text-tiny text-white bg-black/20'
          variant='flat'
          color='default'
          radius='lg'
          size='sm'
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
