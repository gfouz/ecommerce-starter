import { useCartStore } from './store.ts';

export function addToCart(dispatch, product) {
  dispatch({ type: 'ADD_TO_CART', payload: product });
}

export function subtractFromCart(dispatch, product) {
  dispatch({ type: 'SUBTRACT_FROM_CART', payload: product });
}

export function removeFromCart(dispatch, product) {
  dispatch({ type: 'REMOVE_FROM_CART', payload: product });
}
