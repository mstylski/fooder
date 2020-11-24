export interface Product {
  name: string;
  units: Units;
}

export interface Units {
  glass: number;
  liter: number;
  grams: number;
  dag: number;
  teaspoon: number;
  spoon: number;
}

export interface Count {
  count: number;
}
