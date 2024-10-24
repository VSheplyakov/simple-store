"use client";
import { ThemeProvider } from "@mui/material";
import { MY_THEME } from "./config";
import { ReactNode } from "react";

export function MyTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={MY_THEME}>{children}</ThemeProvider>;
}
