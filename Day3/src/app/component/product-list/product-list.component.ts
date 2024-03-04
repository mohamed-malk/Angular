import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges, OnInit {
  constructor() {
    console.log('con');
  }
  ngOnInit(): void {
    console.log('init');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // if (!changes['newProduct'].isFirstChange())
    // this.productList.push(changes['productList'].currentValue);
  }
  @Input() productList: Product[] = [];
}
