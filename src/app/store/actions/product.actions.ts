import { Product } from './../models/product.model';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LOAD_PRODUCTS = '[PRODUCT] Load Product',
  LOAD_PRODUCTS_SUCCESS = '[SHOPPING] Load Product Success',
  LOAD_PRODUCTS_FAILURE = '[SHOPPING] Load Product Failure'
}

export class LoadProductsAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS
}
export class LoadProductsSuccessAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS

  constructor(public payload: Array<Product>) { }
}
export class LoadProductsFailureAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAILURE

  constructor(public payload: string) { }
}

export type ProductAction =
  LoadProductsAction |
  LoadProductsSuccessAction |
  LoadProductsFailureAction
