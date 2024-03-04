import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Properties } from 'src/app/models/shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  Properties = Properties;

  form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    category: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    discount: new FormControl<number>(-1, [
      Validators.required,
      Validators.min(5),
      Validators.max(25),
    ]),
    isInSale: new FormControl<boolean>(false, [Validators.required]),
    price: new FormControl<number>(-1, [
      Validators.required,
      Validators.min(100),
    ]),
    quantity: new FormControl<number>(-1, [
      Validators.required,
      Validators.min(5),
    ]),
  });

  get NameControl() {
    return this.form.get(Properties.Name);
  }
  get CategoryControl() {
    return this.form.get(Properties.Category);
  }
  get DiscountControl() {
    return this.form.get(Properties.Discount);
  }
  get IsSaleControl() {
    return this.form.get(Properties.IsSale);
  }
  get PriceControl() {
    return this.form.get(Properties.Price);
  }
  get QuantityControl() {
    return this.form.get(Properties.Quantity);
  }

  nameValue(name: string) {
    this.product.name = name;
  }
  categoryValue(category: string) {
    this.product.category = category;
  }
  discounntValue(discount: string) {
    this.product.discount = Number(discount);
  }
  stateValue(state: boolean) {
    this.product.isInSale = state;
  }
  priceValue(price: string) {
    this.product.price = Number(price);
  }
  quantityValue(quantity: string) {
    this.product.quantity = Number(quantity);
  }
  product: Product = {
    name: 'p1',
    category: 'p1',
    discount: -1,
    isInSale: false,
    price: -1,
    quantity: -1,
  };
  @Output() myEvent: EventEmitter<Product> = new EventEmitter();

  add() {
    if (this.form.valid) {
      this.myEvent.emit(
        new Product(
          this.product.name,
          this.product.quantity,
          this.product.category,
          this.product.discount,
          this.product.price,
          this.product.isInSale
        )
      );
    }
  }
}
