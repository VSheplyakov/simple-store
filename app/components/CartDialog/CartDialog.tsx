import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "@/app/lib/providers/CartProvider/CartProvider";
import Image from "next/image";

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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      mr: 2,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      style={{ borderRadius: "8px" }}
                    />
                  </Box>
                  <Stack sx={{ flexGrow: 1 }} alignItems={"center"}>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price.toFixed(2)} x {item.quantity} ={" "}
                      <strong>
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          "&:hover": { backgroundColor: "primary.dark" },
                        }}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <RemoveIcon sx={{ fontSize: "14px" }} />
                      </IconButton>
                      <Box sx={{ width: "50px" }}>
                        <Typography textAlign={"center"} sx={{ mx: 2 }}>
                          {item.quantity}
                        </Typography>
                      </Box>

                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          "&:hover": { backgroundColor: "primary.dark" },
                        }}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <AddIcon sx={{ fontSize: "14px" }} />
                      </IconButton>
                    </Box>
                  </Stack>
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
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
        <Button
          variant="contained"
          color="primary"
          disabled={!cartItems.length}
        >
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
