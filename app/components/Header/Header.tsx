import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { headerConfig } from "./headerConfig";
import { Menu } from "./Menu";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <Stack
      maxWidth="100vw"
      position="sticky"
      sx={{
        top: 0,
        p: 2,
        backgroundColor: "white",
        zIndex: 1100,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Stack
        maxWidth="lg"
        width="100%"
        m="0 auto"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Stack
            direction="row"
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
          direction="row"
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
          direction="row"
          gap={10}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Stack direction="row">
              <CartButton />
              <Menu />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
