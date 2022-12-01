import { Box, Typography } from "@mui/material";
import Project from "./Project";

const projects = [
  "project",
  "project",
  "project",
  "project",
  "project",
  "project",
  "project",
  "project"
];

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
            padding: "3em 1em 3em 1em"
          }}
        >
          {projects.map(el => (
            <Project />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectList;
