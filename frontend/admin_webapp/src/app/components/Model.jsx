import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import billImage from "../../images/bill.jpg";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
  position: "absolute",
  top: "40%",
  left: "52%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  marginTop: "5%",
  marginBottom: "5%",
  maxHeight: "85vh",
};

export default function BasicModal({ open, setOpen, base64Image }) {
  // const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container sx={{ justifyContent: "center", overflow: "auto" }}>
            <img
              src={billImage}
              style={{ width: "100%", height: "85vh", maxHeight: "85vh" }}
            />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
