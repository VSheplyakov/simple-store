"use client";
import { Button } from "@mui/material";
import { BuyNowButtonProps } from "@/app/utils/types/types";
import { useCart } from "@/app/lib/providers/CartProvider/CartProvider";

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ product }) => {
  const { addToCart, openCart } = useCart();

  const handleClick = () => {
    addToCart(product);
    openCart();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
