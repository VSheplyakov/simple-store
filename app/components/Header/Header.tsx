import { Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { headerConfig } from "./headerConfig";
import { Menu } from "./Menu";

export default function Header() {
  return (
    <>
      <Stack
        maxWidth={"lg"}
        m="0 auto"
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          p: 2,
        }}
      >
        <Stack
          sx={{
            width: "150px",
            height: "60px",
            position: "relative",
          }}
        >
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="logo"
              fill
              style={{ borderRadius: "12px", objectFit: "cover" }}
              sizes="(max-width: 600px) 100px, 200px"
              priority
            />
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          gap={10}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            direction={"row"}
            gap={2}
          >
            {headerConfig.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="text">{item.name}</Button>
              </Link>
            ))}
          </Stack>
          <Stack>
            <Stack direction="row">
              <IconButton color="inherit" size="large">
                <ShoppingCartIcon sx={{ fontSize: "26px" }} />
              </IconButton>
              <Menu />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
