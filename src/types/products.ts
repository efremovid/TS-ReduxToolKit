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
