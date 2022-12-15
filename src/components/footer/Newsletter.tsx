import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import BasicModal from "../shared/BasicModal";

const Newsletter = () => {
  const [email, emailSet] = useState("");
  const [showError, showErrorSet] = useState(false);
  const [showSignupModal, showSignupModalSet] = useState(false);

  const handleEmailSubmit = () => {
    emailSet("");
    validateEmail() ? showSignupModalSet(true) : showErrorSet(true);
  };

  //should be validated on server
  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
        position: "absolute",
        bottom: "5%",
        display: "flex"
      }}
      autoComplete="off"
    >
      {showSignupModal && (
        <BasicModal
          showSignupModal={showSignupModal}
          showSignupModalSet={showSignupModalSet}
        />
      )}

      <TextField
        id="outlined-basic"
        type="email"
        label="Signup for the newsletter"
        variant="outlined"
        value={email}
        onChange={e => emailSet(e.target.value)}
        error={showError}
      />
      <Button variant="contained" onClick={handleEmailSubmit}>
        Sign Up
      </Button>
    </Box>
  );
};

export default Newsletter;
