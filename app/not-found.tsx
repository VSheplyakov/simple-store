"use client";
import { Box, Typography } from "@mui/material";

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
      </Box>
    </>
  );
}
