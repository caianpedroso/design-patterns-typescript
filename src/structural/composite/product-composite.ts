export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {};

  remove(product: ProductComponent): void {};
};

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  };

  getPrice(): number {
    return this.price;
  };
};

export class ProductComposite extends ProductComponent{
  private children: ProductComponent[] = [];

  add (...products: ProductComponent[]): void {
    products.forEach(product => this.children.indexOf(product));
  };
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  };

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0 );
  };
};

const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('Camiseta', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);