import { Product } from './../store/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Product[]>("./assets/data/db.json");
    //return this.httpClient.get<Product[]>("/api/products");
  }
}
