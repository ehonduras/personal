import { Box } from "@mui/material";
import Footer from "../components/footer/Footer";
import ProjectList from "../components/main_body/ProjectList";
import RecentPosts from "../components/main_body/RecentPosts";
import WelcomeSection from "../components/main_body/WelcomeSection";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "80%",
        padding: "7% 3% 3%",
        displax: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <WelcomeSection />

      <RecentPosts />

      <ProjectList />

      <Footer />
    </Box>
  );
};

export default HomePage;
