import { Product } from '../../store/store';

export interface IProductList {
  products: Product[];
}

export type Action = {
  type: string;
  payload: Product;
};

export interface IActionsButton {
  product: Product;
  dispatch: (action: Action) => void;
}

export interface IProduct {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: boolean;
  category?: string;
  thumbnail?: string;
}

export interface ProductProps {
  limit?: number;
  products: Product[];
}
