import { notFound } from "next/navigation";
import { products } from "@/app/lib/data/products";
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
import Image from "next/image";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface Params {
  slug: string;
}

export default async function ProductDetailedPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack alignItems={"center"}>
            <CardMedia
              component="img"
              image={product.imageURL}
              alt={product.name}
              sx={{
                borderRadius: 2,
                maxHeight: 300,
                maxWidth: 300,
                
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
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <List>
            {product.description.map((item, index) => (
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
      <AdCaroucel />
    </Container>
  );
}
