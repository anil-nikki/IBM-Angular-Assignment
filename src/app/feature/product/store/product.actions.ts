import { createAction, props } from '@ngrx/store';
import {PaginatedResult, Product} from "../resources/product.model";

export const loadProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ response: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Effect] Load Products Failure',
  props<{ error: string }>()
);

export const setSelectedProductId = createAction(
  '[Product Detail Component] Load Product By Id Success',
  props<{ productId: string }>()
);


