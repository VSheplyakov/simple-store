import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { headerConfig } from "../Header/headerConfig";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Stack component="footer" maxWidth={"lg"} m="0 auto" py={1}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Stack sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/">
              <Stack direction="row" gap={1} alignItems="center">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={35}
                  height={35}
                  style={{ borderRadius: "12px" }}
                />

                <Typography
                  variant="h4"
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
          </Stack>
          <Stack maxWidth={"lg"} gap={2} direction={"row"}>
            {headerConfig.map((item) => (
              <Link key={item.name} href={item.href} style={{
                color: "white",
                textDecoration: "none",
              }}>
                <Typography
                  variant="body1"
                >
                  {item.name}
                </Typography>
              </Link>
            ))}

            <Link
              href="/terms"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Privacy
            </Link>
          </Stack>
        </Stack>

        <Typography textAlign="center" fontSize="12px" color="white" pt={2}>
          © SimpleStore, 2024. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
