export interface ShortProductBase {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string;
}

export interface ShortProductLocal extends ShortProductBase {
  like: boolean;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  rating: number;
  stock: number;
  reviews: Review[];
}
