"use client";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "@/app/lib/providers/CartProvider/CartProvider";
import CartDialog from "../CartDialog/CartDialog";

export default function CartButton() {
  const { cartItems, openCart } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <IconButton onClick={openCart}>
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <CartDialog />
    </>
  );
}
