import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string[];
  imageURL: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.imageURL}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <List dense={true}>
          {product.description.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    • {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around", pb: 2 }}>
        <Button size="small" variant="contained" color="primary">
          Buy Now
        </Button>
        <Link href={`/products/${product.slug}`} passHref>
          <Button size="small" variant="outlined" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
