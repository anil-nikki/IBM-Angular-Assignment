import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromProduct from './product.reducer';
import {Product} from "../resources/product.model";

export const stateFeatureKey = 'state';
// export const productFeatureKey = 'product';

export interface State {
  product: fromProduct.ProductState;
}
export interface ProductState {
  product: Product[];
  error: string;
}

// export const reducers: ActionReducerMap<State> = {
//   product: fromProduct.reducer
// };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
