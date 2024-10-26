import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "@/app/lib/data/products";
import { Product } from "@/app/utils/types/types";

export default async function ProductsGrid() {
  const products = (await getProducts()) as Product[];

  if (!products) {
    return null;
  }

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
