import React from "react";
import { Box, Typography } from "@mui/material";
import { posts } from "../../assets/recentPosts";

const RecentPosts = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">Recent Posts</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "3em",
            rowGap: "2em",
            padding: "3% 1%"
          }}
        >
          {posts.map(post => (
            <Box key={post.postId} sx={{ alignContent: "center" }}>
              <Typography>{post.postContent}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RecentPosts;
