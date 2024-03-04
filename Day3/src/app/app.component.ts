import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Day3';

  product: Product[] = [];
  getProduct(value: Product) {
    this.product.push(value);
  }
}
