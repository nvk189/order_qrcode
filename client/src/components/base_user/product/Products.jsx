/* eslint-disable react/prop-types */

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import ProductModal from "../../modal/Modal";
import "./product.scss";
const Products = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 600,
    height: 500,
    transform: "translate(-50%, -50%)",
    bgcolor: "rgba(2, 8, 23, 1)",
    border: "1px solid #000",
    boxShadow: 24,
    borderRadius: 2,
    borderColor: "rgb(156 163 175)",
    p: 2,
  };
  return (
    <div>
      <a onClick={handleOpen} className="flex gap-4" href="#">
        <div className="flex-shrink-0">
          <img
            alt={item.name}
            loading="lazy"
            width="150"
            height="150"
            decoding="async"
            data-nimg="1"
            className="object-cover w-[150px] h-[150px] rounded-md rounded-1xl"
            style={{ color: "transparent" }}
            src={item.anh}
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-white text-xl font-semibold">{item.name}</h3>
          <p className="text-white">{item.mo_ta}</p>
          <p className="text-white font-semibold">{item.gia}&nbsp;₫</p>
        </div>
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="  "
      >
        <Box
          sx={style}
          className="w-full max-w-[90%] md:max-w-[400px] lg:max-w-[500px] sg:max-w-[200px] text-center   "
        >
          <Typography
            className="name"
            id="modal-modal-title"
            variant="h4"
            component="h2"
            fontSize={30}
          >
            {item.name}
          </Typography>
          <Typography
            className="gia"
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={16}
          >
            Giá : {item.gia}&nbsp;₫
          </Typography>
          <Typography>
            <img
              className=" h-full rounded-md rounded-1xl item_img"
              src={item.anh}
              alt={item.name}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Products;
