import { Box, Link, Stack, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Stack component="footer" maxWidth={"lg"} m="0 auto" py={1}>
        <Stack px={4} py={2}>
          <Stack
            maxWidth={"lg"}
            gap={2}
            direction={"row"}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Link
              href="/about"
              sx={{
                color: "white",
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              sx={{
                color: "white",
              }}
            >
              Contact
            </Link>

            <Link
              href="/terms"
              sx={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              sx={{
                color: "white",
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
