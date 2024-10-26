import { useCart } from "@/app/lib/providers/CartProvider/CartProvider";
import { Button } from "@mui/material";
import { useCallback } from "react";

export default function CheckoutButton() {
  const { closeCart, clearCart, cartItems } = useCart();

  const handleCheckout = useCallback(() => {
    closeCart();
    clearCart();
  }, [clearCart, closeCart]);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleCheckout}
      disabled={!cartItems.length}
    >
      Checkout
    </Button>
  );
}
