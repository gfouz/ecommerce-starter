import { Product } from "../../store/store";

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
