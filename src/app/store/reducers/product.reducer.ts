import { Product } from './../models/product.model';
import { ProductActionTypes, ProductAction } from '../actions/product.actions';

export interface ProductState {
  list: Product[],
  loading: boolean,
  error: Error;
}

const initialState: ProductState = {
  list: [],
  loading: false,
  error: undefined
};

export function ProductReducer(state: ProductState = initialState, action: ProductAction) {
  switch (action.type) {
    case ProductActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case ProductActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case ProductActionTypes.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}
