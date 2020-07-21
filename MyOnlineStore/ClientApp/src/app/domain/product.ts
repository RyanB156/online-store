
export namespace Product {
  export enum ProductType { Shirt }

  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    path: string
    productType: ProductType
  }
}
