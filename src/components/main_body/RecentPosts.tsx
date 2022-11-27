import React from "react";
import { Box, Typography } from "@mui/material";
import { posts } from "../../assets/recentPosts";

const RecentPosts = () => {
  return (
    <>
      <Box>
        <Typography variant="h4">Recent Posts</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "2em",
            rowGap: "2em",
            padding: "1em"
          }}
        >
          {posts.map(el => (
            <Box sx={{ alignContent: "center" }}>
              <Typography>{el}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RecentPosts;
