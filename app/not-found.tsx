"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="h4">
          The page you are looking for does not exist.
        </Typography>
        <Link href={"/"} style={{ marginTop: "30px" }}>
          <Button variant="contained">Return Home page</Button>
        </Link>
      </Box>
    </>
  );
}
