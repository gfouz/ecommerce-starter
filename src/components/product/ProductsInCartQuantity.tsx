import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/store.ts';
import { useState, useEffect } from 'react';
import CartBadge from '../../components/badge/CartBadge.tsx';

export default function ProductsInCartQuantity() {
  const [quantity, setQuantity] = useState(0);
  const cart = useCartStore((state) => state.cart);
  const productsInCart = cart.length;
  useEffect(() => {
    setQuantity(productsInCart);
  }, [productsInCart]);
  return (
    <Link to='/cart'>
      <CartBadge quantity={quantity} />
    </Link>
  );
}
