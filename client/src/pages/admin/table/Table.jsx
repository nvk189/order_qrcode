/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputText from "../../../components/base_admin/input/InputText";
import Button from "../../../components/base_admin/button/Button";
import { useState } from "react";
// import ModarlTable from "../../../components/modal/Modal";
const Table = () => {
  const [isOn, setIsOn] = useState(false);

  // Hàm để xử lý khi nhấn vào switch
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdate = () => setUpdate(true);
  const handleUpdateClose = () => setUpdate(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    bgcolor: "rgba(2, 8, 23, 1)",
    border: "1px solid #000",
    boxShadow: 24,
    borderRadius: 2,
    borderColor: "rgb(156 163 175)",
    p: 2,
  };
  return (
    <>
      <div className="flex  flex-col justify-center px-6  lg:px-8 bg-color-primary rounded-md lg:py-4 ">
        <h5>Bàn ăn</h5>
        <h6 className="text-color-text mb-5">Quản lý bàn ăn</h6>
        <div className=" flex justify-between ">
          <div className="flex justify-center items-center">
            <InputText name=" Lọc số bàn" className="w-[400px]" type="text" />
          </div>
          <Button
            onclick={handleOpen}
            name={
              <>
                <i className="fa-solid fa-circle-plus text-black"></i>
                Thêm bàn
              </>
            }
            className={"px-3 py-0.5 bg-white text-black border rounded-lg"}
          />
        </div>
        <div className="mt-3">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope=" " className="px-2 py-2 text-center w-[80px]">
                    Số bàn
                  </th>
                  <th scope="col" className="px-2 py-2 text-center w-[180px]">
                    Sức chứa
                  </th>
                  <th scope="col" className="px-2 py-2 text-center w-[300px]">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-2 py-2 text-center w-[500px]">
                    QR Code
                  </th>
                  <th scope="col" className="px-2 py-2 text-center">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-2 py-2 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-2 py-2 text-center">11</td>

                  <td className="px-2 py-2 text-center">Có sẵn</td>
                  <td className="px-2 py-2 flex justify-center">
                    <div className="bg-white flex flex-col  justify-center">
                      <div className="flex justify-center">
                        <img
                          className="w-[250px] h-[250px] px-3 "
                          src="https://media.istockphoto.com/id/1095468748/vi/vec-to/m%C3%A3-qr-m%E1%BA%ABu-m%C3%A3-v%E1%BA%A1ch-hi%E1%BB%87n-%C4%91%E1%BA%A1i-vector-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng-%C4%91%E1%BB%83-qu%C3%A9t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng-minh-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn.jpg?s=612x612&w=0&k=20&c=nCjpoa8qW4lREJGqVCQZsWcrKGOcKKuy5RSsSVzqlL8="
                          alt=""
                        />
                      </div>
                      <div className=" text-center  px-3 font-semibold">
                        <p className="text-black text-2xl pb-1">Bàn số 3</p>
                        <p className="text-black text-2xl pb-2">
                          Quét mã QR để gọi món
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center text-2xl">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-5"
                    >
                      <i
                        onClick={handleUpdate}
                        className="fa-regular fa-pen-to-square"
                      ></i>
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="  "
        >
          <Box
            sx={style}
            className="w-full max-w-[90%] md:max-w-[400px] lg:max-w-[580px] lg:max-h-[300px] sg:max-w-[200px] text-center   "
          >
            <div className="flex justify-between">
              <Typography
                className="name"
                id="modal-modal-title"
                variant="h4"
                component="h2"
                fontSize={20}
              >
                Thêm bàn
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
            <Typography>
              <div className="flex justify-between pt-5">
                <div className="w-[180px] space-y-4">
                  <p className="flex items-center h-[40px]">Số hiệu bàn</p>
                  <p className="flex items-center h-[40px]">Sức chứa (người)</p>
                  <p className="flex items-center h-[40px]">Trạng thái</p>
                </div>
                <div className="flex flex-col">
                  <InputText
                    name=" Số bàn"
                    className="w-[350px] h-[40px]  mb-4"
                    type="number"
                  />
                  <InputText
                    name=" sức chứa"
                    className="w-[350px] h-[40px] mb-4"
                    type="number"
                  />

                  <select
                    id="currency"
                    name="currency"
                    className="mb-4 w-[350px] h-[40px]  focus:ring-gray-50  border-slate-800  text-white flex h-10 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[140px]"
                  >
                    <option className="hover:bg-slate-700 bg-color-primary text-white ">
                      Tiếng Việt
                    </option>
                    <option className="hover:bg-slate-700 bg-color-primary text-white ">
                      Tiếng Anh
                    </option>
                  </select>
                </div>
              </div>
            </Typography>
            <div className="float-right"></div>
            <Button
              name={"Thêm"}
              className={
                "bg-white px-3  py-1.5 rounded text-black mt-5 font-semibold"
              }
            />
          </Box>
        </Modal>

        {/*  update */}
        <Modal
          open={update}
          onClose={handleUpdateClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="  "
        >
          <Box
            sx={style}
            className="w-full max-w-[90%] md:max-w-[400px] lg:max-w-[580px] lg:max-h-[700px] sg:max-w-[200px] text-center   "
          >
            <div className="flex justify-between">
              <Typography
                className="name"
                id="modal-modal-title"
                variant="h4"
                component="h2"
                fontSize={20}
              >
                Cập nhật thông tin
              </Typography>
              <Typography
                className="gia"
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontSize={16}
              >
                <i
                  onClick={handleUpdateClose}
                  className="fa-regular fa-circle-xmark text-color-text cursor-pointer text-2xl"
                ></i>
              </Typography>
            </div>

            <Typography>
              <div className="flex justify-between pt-5">
                {/* Cột tiêu đề */}
                <div className="w-[180px] space-y-4">
                  <p className="flex items-center h-[40px]">Số hiệu bàn</p>
                  <p className="flex items-center h-[40px]">Sức chứa (người)</p>
                  <p className="flex items-center h-[40px]">Trạng thái</p>
                  <p className="flex items-center h-[40px]">Đổi QR Code</p>
                  <p className="flex items-center h-[40px]">QR Code</p>
                  <p className="flex items-center h-[40px] pt-[255px]">
                    URL gọi món
                  </p>
                </div>

                {/* Cột nội dung */}
                <div className="w-[350px] space-y-4">
                  <InputText
                    name="Số bàn"
                    className="w-full h-[40px]"
                    type="number"
                  />
                  <InputText
                    name="Sức chứa"
                    className="w-full h-[40px]"
                    type="number"
                  />

                  {/* Dropdown trạng thái */}
                  <select
                    id="currency"
                    name="currency"
                    className="w-full h-[40px] border border-slate-800 text-white rounded-md bg-transparent px-3 py-2 shadow-sm focus:ring-gray-50"
                  >
                    <option className="bg-slate-700 text-white">
                      Tiếng Việt
                    </option>
                    <option className="bg-slate-700 text-white">
                      Tiếng Anh
                    </option>
                  </select>

                  {/* Switch đổi QR Code */}
                  <div>
                    <div
                      onClick={toggleSwitch}
                      className={`h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out cursor-pointer ${
                        isOn ? "bg-indigo-600" : "bg-gray-400"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${
                          isOn ? "translate-x-4" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* QR Code hình ảnh */}
                  <div className="mt-3">
                    <div className="bg-white flex flex-col w-[290px] h-[300px]  justify-center">
                      <div className="flex justify-center">
                        <img
                          className="w-full h-[200px] px-3 "
                          src="https://media.istockphoto.com/id/1095468748/vi/vec-to/m%C3%A3-qr-m%E1%BA%ABu-m%C3%A3-v%E1%BA%A1ch-hi%E1%BB%87n-%C4%91%E1%BA%A1i-vector-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng-%C4%91%E1%BB%83-qu%C3%A9t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng-minh-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn.jpg?s=612x612&w=0&k=20&c=nCjpoa8qW4lREJGqVCQZsWcrKGOcKKuy5RSsSVzqlL8="
                          alt=""
                        />
                      </div>
                      <div className=" text-center  px-3 font-semibold">
                        <p className="text-black text-xl pb-1">Bàn số 3</p>
                        <p className="text-black text-xl pb-2">
                          Quét mã QR để gọi món
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* URL gọi món */}
                  <div className="flex flex-wrap justify-items-start">
                    <p className="break-words max-w-[300px]">
                      hạdhakshdakjsdhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                  </div>
                </div>
              </div>
            </Typography>

            <div className="float-right"></div>
            <Button
              name={"Cập nhật"}
              className={
                "bg-white px-3  py-1.5 rounded text-black mt-5 font-semibold"
              }
            />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Table;
