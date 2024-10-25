import React from "react";
import { Grid, Container } from "@mui/material";
import { products } from "@/app/lib/data/products";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsGrid() {
  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
