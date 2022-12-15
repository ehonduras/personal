import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  border: "2px solid #000",
  p: 4,
  color: "white"
};

interface Props {
  showSignupModal: boolean;
  showSignupModalSet: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasicModal = ({ showSignupModal, showSignupModalSet }: Props) => {
  const handleClose = () => {
    showSignupModalSet(false);
  };

  return (
    <Modal
      open={showSignupModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={style}
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          You signed up!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          I hope we will make this successful communication.
        </Typography>
      </Box>
    </Modal>
  );
};

export default BasicModal;
