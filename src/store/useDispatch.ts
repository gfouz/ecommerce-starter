import { Dispatch, Product } from './store';

export function addToCart(dispatch: Dispatch, product: Product) {
  dispatch({ type: 'ADD_TO_CART', payload: product });
}

export function subtractFromCart(dispatch: Dispatch, product: Product) {
  dispatch({ type: 'SUBTRACT_FROM_CART', payload: product });
}

export function removeFromCart(dispatch: Dispatch, product: Product) {
  dispatch({ type: 'REMOVE_FROM_CART', payload: product });
}
