"use client";
import { Box, Typography } from "@mui/material";

export default function Error() {
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
          An error occurred
        </Typography>
        <Typography variant="h4">
          Failed to fetch data. Try again later.
        </Typography>
      </Box>
    </>
  );
}
