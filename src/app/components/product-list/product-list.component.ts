import { Product } from './../../store/models/product.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Product[];

  @Output()
  productClicked = new EventEmitter<Product>();

  currentLayout = "grid";

  constructor() { }

  ngOnInit(): void {
  }

  toggleLayout(layout) {
    this.currentLayout = layout;
  }

  viewProduct(product: Product) {
    this.productClicked.emit(product);
  }
}
