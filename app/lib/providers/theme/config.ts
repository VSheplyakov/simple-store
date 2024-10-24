"use client";
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#29303f",
    },
    secondary: {
      main: "#ffb62a",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    htmlFontSize: 16,
    fontWeightBold: 800,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
    fontSize: 14,
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "-0.96px",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "normal",
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: "normal",
    },
  },
});

const myTheme = createTheme(baseTheme, {
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderWidth: "2px !important",
    //       textTransform: "none",
    //       fontSize: "1rem",
    //       lineHeight: "1",
    //     },
    //     sizeLarge: {
    //       padding: "14px 24px",
    //       lineHeight: "normal",
    //     },
    //     sizeMedium: {
    //       padding: "8px 24px",
    //     },
    //     contained: {
    //       fontWeight: 700,
    //     },
    //   },
    // },
  },
});

export const MY_THEME = createTheme(myTheme);
