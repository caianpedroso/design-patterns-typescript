export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}

  remove(product: ProductComponent): void {}
};

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}