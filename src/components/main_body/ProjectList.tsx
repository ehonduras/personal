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
        <Typography variant="h4">Project List</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "2em",
            rowGap: "1em",
            padding: "1em 1em 3em 1em"
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
