import { notFound } from "next/navigation";
import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Stack,
} from "@mui/material";
import { AdCaroucel } from "@/app/components/Recommendation/AdCaroucel";
import { getProduct, getProducts } from "@/app/lib/data/products";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
};

type Params = Promise<{ slug: string }>;

export default async function ProductDetailedPage({
  params,
}: {
  params: Params;
}) {
  try {
    const { slug } = await params;
    const products = (await getProducts()) as Product[];
    const product = await getProduct(slug) as Product;

    if (!product) {
      notFound();
    }

    return (
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  borderRadius: 2,
                }}
              />
            </Stack>
            {/* </CardMedia>
          {/* <Image
            src={product.imageURL}
            width={350}
            height={350}
            alt={product.name}
          /> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>
            <List>
              {product.description.split(",").map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="text.secondary">
                        • {item}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 2,
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
        <AdCaroucel products={products} />
      </Container>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}
