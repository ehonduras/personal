import Footer from "../components/footer/Footer";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@mui/material";
import { projects } from "../assets/projects";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "89vw",
        height: "95vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "3%",
        rowGap: "3%",
        margin: "10% 0"
      }}
    >
      {projects.map(project => (
        <Card key={project.projectId} sx={{
          position: "relative"
        }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, padding: "3%" }}
              color="text.secondary"
              gutterBottom
            >
              {project.projectName}
            </Typography>

            <Typography sx={{ padding: "10px 0" }}>
              {project.projectDescription.length > 75
                ? project.projectDescription.slice(0, 72).concat(" ...")
                : project.projectDescription}
            </Typography>

            <Typography variant="body2">{project.tags}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{
              position: "absolute",
              bottom: "0.1%"
            }}>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectsPage;
