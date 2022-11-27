import { Box } from "@mui/material";
import React from "react";
import ProjectList from "./ProjectList";
import RecentPosts from "./RecentPosts";
import WelcomeSection from "./WelcomeSection";

const MainBody = () => {
  return (
    <Box
      sx={{
        height: "90%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        mb: "3em"
      }}
    >
      <WelcomeSection />

      <RecentPosts />

      <ProjectList />
    </Box>
  );
};

export default MainBody;
