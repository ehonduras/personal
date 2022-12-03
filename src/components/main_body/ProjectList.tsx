import { Box, Typography } from "@mui/material";
import Project from "./Project";
import "../../styles/main.scss";
import {projects} from "../../assets/projects";

const ProjectList = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">Project List</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "3em",
            rowGap: "3em",
            padding: "3% 1%"
          }}
        >
          {projects.map(el => (
            <Project key={el.projectId} project={el}/>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectList;
