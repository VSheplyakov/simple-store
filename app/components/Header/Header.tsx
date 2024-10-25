import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
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
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.jpg"
              alt="logo"
              width={50}
              height={50}
              priority
              style={{ borderRadius: "12px" }}
            />
            <Typography
              variant="h3"
              sx={{
                background: "linear-gradient(90deg, #ff6b6b, #f0e130)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SimpleStore
            </Typography>
          </Stack>
        </Link>
        <Stack
          sx={{ display: { xs: "none", md: "flex" } }}
          direction={"row"}
          gap={2}
        >
          {headerConfig.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button variant="text" size="large">
                {item.name}
              </Button>
            </Link>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          gap={10}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
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
      <Divider />
    </>
  );
}
