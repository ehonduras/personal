import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Newsletter = () => {
  const [email, emailSet] = useState('');
  
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        position: "absolute",
        bottom: "5%",
        display: "flex"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        type="email"
        label="Signup for the newsletter"
        variant="outlined"
        defaultValue="Your email"
      />
      <Button variant="contained" value={email}>Sign Up</Button>
    </Box>
  );
};

export default Newsletter;
