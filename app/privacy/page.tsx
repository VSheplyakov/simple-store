import { Stack, Typography } from "@mui/material";

export default function Privacy() {
  return (
    <Stack flexGrow={1} alignItems={"center"} gap={2} justifyContent={"center"} maxWidth={"lg"}>
      <Typography variant="h2">Privacy</Typography>
      <Typography variant="h6" textAlign={"center"}>
        The page is under construction. Please check back later.
      </Typography>
    </Stack>
  );
}