/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modal.scss";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  code,
  size_w,
  size_h,
  title,
  name,
  onclick,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="  "
      >
        <Box
          sx={style}
          className={`w-full max-w-[90%] md:max-w-[400px] lg:max-w-[{${size_w}}px] lg:max-h-[{${size_h}}px] sg:max-w-[200px] text-center`}
        >
          <div className="flex justify-between">
            <Typography
              className="name"
              id="modal-modal-title"
              variant="h4"
              component="h2"
              fontSize={20}
            >
              {title}
            </Typography>
            <Typography
              className="gia"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontSize={16}
            >
              <i
                onClick={handleClose}
                className="fa-regular fa-circle-xmark text-color-text cursor-pointer text-2xl"
              ></i>
            </Typography>
          </div>

          <Typography>{code}</Typography>
          <div className="float-right"></div>
          <Button
            name={name}
            onclick={onclick}
            className={"bg-white px-3  py-1.5 rounded text-black mt-5"}
          />
        </Box>
      </Modal>
    </div>
  );
}
