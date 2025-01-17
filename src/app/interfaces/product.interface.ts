export interface Product extends NewProduct {
  id: number;
}

export interface NewProduct {
  name: string;
  description: string;
  sku: string;
  cost: number;
  profile: object;
}
