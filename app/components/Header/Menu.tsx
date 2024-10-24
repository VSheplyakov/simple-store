"use client";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <IconButton
        color="inherit"
        size="large"
        sx={{ display: { sx: "block", md: "none" } }}
        onClick={() => toggleMenu()}
      >
        <MenuIcon sx={{ fontSize: "26px" }} />
      </IconButton>
      <MobileMenu open={menuOpen} close={toggleMenu} />
    </>
  );
}
