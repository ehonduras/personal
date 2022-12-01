import { Box, Typography } from "@mui/material";
import React from "react";
import "../../assets/myPhoto.jpg";

const WelcomeSection = () => {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          marginBottom: "5%"
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Welcome
          </Typography>
          <br></br>
          <Typography variant="h6" padding="2%">
            Hello and welcome to my digital space.
          </Typography>
          <br></br>
          <Typography variant="h6" padding="2%">
            I am Nimre Odnoh, I live in Ucijnok. In this space I will share some
            of my projects, books that I read, thoughts and ideas. I intend to
            use this space as a platform for my own learning but also as a
            notetaking space for my efforts.
          </Typography>
        </Box>

        <Box>
          <img src="../../assets/myPhoto.jpg" alt="myPhoto" />
        </Box>
      </Box>
    </div>
  );
};

export default WelcomeSection;
