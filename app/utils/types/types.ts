export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
};
export type CartItem = Product & { quantity: number };

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
};

export type CartDialogProps = {
  open: boolean;
  handleClose: () => void;
  cartItems: CartItem[];
  handleRemoveItem: (id: number) => void;
};

export type Params = Promise<{ slug: string }>;

export type ProductDetailedPageProps = {
  params: Params;
};

export type ProductCardProps = {
  product: Product;
};

export type BuyNowButtonProps = {
  product: Product;
};
