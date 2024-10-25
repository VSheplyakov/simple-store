import { Stack } from "@mui/material";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";

export default function Home() {
  return (
    <Stack width="100%" m="0 auto" justifyContent={"center"}>
      <ProductsGrid />
    </Stack>
  );
}
