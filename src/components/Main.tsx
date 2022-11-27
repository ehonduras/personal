import React from "react";
import Navigation from "./navigation/Navigation";
import Home from "../pages/Home";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "99vw",
        display: "flex",
        justifyContent: "center",
        marginTop: "10em"
      }}
    >
      <Navigation />

      <Footer />
    </Box>
  );
};

export default Main;
