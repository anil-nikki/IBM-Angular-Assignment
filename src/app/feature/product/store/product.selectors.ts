import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ProductState} from "./product.reducer";
import {stateFeatureKey} from "./index";

const getProductFeatureState = createFeatureSelector<ProductState>(
  stateFeatureKey
);

export const getAllProducts = createSelector(
  getProductFeatureState,
  (state: ProductState) => state && state.product
);

export const getProductsById = createSelector(
  getProductFeatureState,
  getAllProducts,
  (state) => state && state.selectedProductId && state.product?.length ?
    state.product.find(product => product.id.toString() === state.selectedProductId) : null);



