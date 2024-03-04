export interface IProduct {
  name: string;
  quantity: number;
  category: string;
  discount: number;
  price: number;
  isInSale: boolean;
}

export class Product implements IProduct {
  name: string = '';
  quantity: number = 0;
  category: string = '';
  discount: number = 0;
  price: number = 0;
  isInSale: boolean = false;
  constructor(
    name: string,
    quantity: number,
    category: string,
    discount: number,
    price: number,
    isInSale: boolean
  ) {
    this.category = category;
    this.discount = discount;
    this.isInSale = isInSale;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
