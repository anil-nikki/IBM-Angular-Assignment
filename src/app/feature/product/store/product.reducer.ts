import { Action, createReducer, on } from '@ngrx/store';
import {Pagination, Product} from "../resources/product.model";
import * as ProductActions from "./product.actions";

export interface ProductState {
  product: Product[];
  selectedProductId: string;
  error: string;
}

export const initialState: ProductState = {
  product: null,
  selectedProductId: null,
  error: null
} as any;

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      product: action.response,
      selectedProductId: '',
      error: ''
    }
  }),
  on(ProductActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      product: [],
      selectedProductId: '',
      error: action.error
    }
  }),
  on(ProductActions.setSelectedProductId, (state, action): ProductState => {
    return {
      ...state,
      selectedProductId: action.productId
    }
  }),

);
