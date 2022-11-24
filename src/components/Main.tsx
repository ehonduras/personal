import React from "react";
import Navigation from "./navigation/Navigation";
import MainBody from "./main_body/MainBody";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '99vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'      
      }}
    >
      <Navigation />

      <MainBody />

      <Footer />
    </Box>
  );
};

export default Main;
