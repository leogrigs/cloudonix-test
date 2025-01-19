export interface Product extends NewProduct {
  id: number;
}

export interface NewProduct {
  id: number;
  name: string;
  description: string;
  cost: number;
  profile: {
    type: 'furniture' | 'equipment' | 'stationary' | 'part';
    available: boolean;
    backlog?: number | null;
    [key: string]: any;
  };
}
