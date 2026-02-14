
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};
