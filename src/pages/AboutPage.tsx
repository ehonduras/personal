import { Box } from "@mui/material";
import Newsletter from "../components/footer/Newsletter";

const AboutPage = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        height: "90vh",
        width: "75vw",
        bottom: "1%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <Newsletter />
    </Box>
  );
};

export default AboutPage;
