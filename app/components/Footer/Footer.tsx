import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Stack component="footer" maxWidth={"lg"} m="0 auto" py={1}>
        <Stack
          px={4}
          py={2}
          alignItems={"center"}
          direction={"row"}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={50}
                height={50}
                style={{ borderRadius: "12px" }}
              />
            </Link>
          </Box>
          <Stack maxWidth={"lg"} gap={2} direction={"row"}>
            <Link
              href="/about"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>

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
