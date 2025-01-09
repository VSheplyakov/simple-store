import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "@/app/lib/providers/CartProvider/CartProvider";
import Image from "next/image";
import CheckoutButton from "./ChecoutButton";

export default function CartDialog() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isCartOpen,
    closeCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Dialog open={isCartOpen} onClose={closeCart} fullWidth maxWidth="xs">
      <DialogTitle>
        Cart
        <IconButton
          onClick={closeCart}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {cartItems.length === 0 ? (
          <Typography variant="body1" textAlign={"center"}>
            Your cart is empty. Add some products!
          </Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <Stack
                    sx={{
                      width: { xs: "80px", md: "120px" },
                      height: { xs: "80px", md: "120px" },

                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ borderRadius: "8px" }}
                    />
                  </Stack>
                  <Stack sx={{ flexGrow: 1 }} alignItems={"center"}>
                    <Typography
                      variant="h6"
                      textAlign={"center"}
                      gutterBottom
                      fontWeight={600}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        mt: 1,
                        border: "1px solid lightGray",
                        borderRadius: "8px",
                        p: 0.5,
                      }}
                    >
                      <IconButton
                        size="medium"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <RemoveIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <Box sx={{ width: "30px" }}>
                        <Typography textAlign={"center"}>
                          {item.quantity}
                        </Typography>
                      </Box>

                      <IconButton
                        size="medium"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <AddIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </Stack>
                  </Stack>
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
                <Divider />
              </React.Fragment>
            ))}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Box sx={{ flexGrow: 1 }} p={1}>
          <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
        </Box>

        <CheckoutButton />
      </DialogActions>
      <Box width={"100%"} textAlign={"center"} p={2}>
        <Button onClick={closeCart} sx={{ textTransform: "none" }}>
          Return to shopping
        </Button>
      </Box>
    </Dialog>
  );
}
