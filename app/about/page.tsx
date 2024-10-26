import { Container, Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <Stack
      flexGrow={1}
      alignItems={"center"}
      gap={2}
      justifyContent={"center"}
      maxWidth={"lg"}
      component={Container}
    >
      <Typography variant="h2">About</Typography>
      <Typography variant="h6" textAlign={"center"}>
        The page is under construction. Please check back later.
      </Typography>
    </Stack>
  );
}
