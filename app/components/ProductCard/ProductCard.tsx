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
import BuyNowButton from "../BuyNowButton/BuyNowButton";
import { Product } from "@/app/utils/types/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <List dense={true}>
          {product.description.split(",").map((item: string, index: number) => (
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
        <BuyNowButton product={product} />
        <Link href={`/products/${product.slug}`} passHref>
          <Button variant="outlined" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
