import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Product } from './store/models/product.model';
import { LoadProductsAction } from './store/actions/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid-list';

  products: Observable<Array<Product>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.products = this.store.select(store => store.product.list);
    this.loading$ = this.store.select(store => store.product.loading);
    this.error$ = this.store.select(store => store.product.error);

    this.store.dispatch(new LoadProductsAction());
  }

  onProductClicked(product) {
    console.log(product);
  }
}
