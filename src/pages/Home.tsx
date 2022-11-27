import { Box } from "@mui/material";
import React from "react";
import ProjectList from "../components/main_body/ProjectList";
import RecentPosts from "../components/main_body/RecentPosts";
import WelcomeSection from "../components/main_body/WelcomeSection";

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
