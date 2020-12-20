import { ProductService } from './../../services/product.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadProductsAction, ProductActionTypes, LoadProductsSuccessAction, LoadProductsFailureAction } from '../actions/product.actions'
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }


  @Effect() loadProducts$ = this.actions$
    .pipe(
      ofType<LoadProductsAction>(ProductActionTypes.LOAD_PRODUCTS),
      mergeMap(
        () => this.productService.getAll()
          .pipe(
            map(data => {
              return new LoadProductsSuccessAction(data)
            }),
            catchError(error => of(new LoadProductsFailureAction(error)))
          )
      ),
    )
}
