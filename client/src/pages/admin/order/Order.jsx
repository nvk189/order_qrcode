/* eslint-disable react/no-unknown-property */
import Button from "../../../components/base_admin/button/Button";
import InputText from "../../../components/base_admin/input/InputText";
import Text from "../../../components/base_admin/input/Text";
import { GiCookingPot } from "react-icons/gi";
import { FiLoader } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";

const Order = () => {
  const handleButton = () => {
    alert("thông báo ok");
  };
  const handleButtonReset = () => {
    alert("thông báo handleButtonReset");
  };
  return (
    <div className="flex  flex-col justify-center px-6  lg:px-8 bg-color-primary rounded-md lg:py-4 ">
      <h5>Đơn hàng</h5>
      <h6 className="text-color-text mb-5">Quản lý đơn hàng</h6>
      <div className=" flex justify-between ">
        <div className="flex justify-center items-center">
          <p className=" mr-3">Từ </p>
          <input
            className="text-white bg-color-primary px-2 py-1 border border-zinc-600 rounded "
            type="datetime-local"
            name=""
            id=""
          />
          <p className="ml-2 mr-2">Đến </p>
          <input
            className="text-white bg-color-primary px-2 py-1 border border-zinc-600 rounded "
            type="datetime-local"
            name=""
            id=""
          />
          <Button
            name="Reset"
            className={
              "ml-3 text-white px-3 py-1.5 border border-zinc-600 rounded-lg"
            }
            onclick={handleButtonReset}
          />
        </div>
        <Button
          name={
            <>
              <i className="fa-solid fa-circle-plus text-black"></i>
              Thêm đơn hàng
            </>
          }
          onclick={handleButton}
          className={" px-3 py-0.5 bg-white text-black border rounded-lg"}
        />
      </div>

      {/*  tìm kiếm theo tên và bàn ăn */}
      <div className="flex mt-5">
        <InputText name=" Tên khách" className="w-[100px]" type="text" />
        <InputText className=" ml-5 w-[80px] " name=" Số bàn" type="text" />
        <Button
          name={<i class="fa-solid fa-magnifying-glass"></i>}
          // name={<IoSearch />}
          className={"border border-zinc-600 rounded-lg px-3 py-1 ml-3"}
        />
      </div>

      {/*  trạng thái bàn ăn */}
      <div className=" flex flex-wrap mt-5">
        <div className="mr-3 mb-3 cursor-pointer flex justify-between w-[120px] h-[100px] bg-slate-800 border rounded border-slate-600">
          <div className="flex flex-col justify-center items-center px-2 border-r-2 border-slate-600">
            <h1 className="text-lg pb-2 font-bold text-center">1</h1>
            <div className="flex items-center">
              <FaUserGroup className="pr-1 text-xl" />
              {/* <i className="fa-solid fa-users pr-1"></i> */}
              <span className="whitespace-nowrap">22</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-3 ">
            <div className="flex items-center pb-2">
              <FiLoader className="text-lg mr-3" />
              <span className="whitespace-nowrap">22</span>
            </div>
            <div className="flex items-center pb-2">
              <GiCookingPot className="text-2xl mr-2" />
              <span className="whitespace-nowrap">22</span>
            </div>
            <div className="flex items-center pb-2">
              <i className="fa-solid fa-truck-fast pr-3"></i>
              <span className="whitespace-nowrap">21</span>
            </div>
          </div>
        </div>
      </div>

      {/*  trạng thái các món ăn  */}
      <div className="flex mt-2">
        <Text name={"Chờ xử lý"} className={"mr-3"} number={2} />
        <Text name={"Đang nấu"} className={"mr-3"} number={0} />
        <Text name={"Từ chối"} className={"mr-3"} number={0} />
        <Text name={"Đã phục vụ"} className={"mr-3"} number={0} />
        <Text name={"Đã thanh toán"} className={"mr-3"} number={0} />
      </div>
      {/*  danh sách cá đơn hàng ngày hiện tại */}
      <div className="mt-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope=" " className="px-2 py-2 text-center w-[20px]">
                  Bàn
                </th>
                <th scope="col" className="px-2 py-2 text-center">
                  Khách hàng
                </th>
                <th scope="col" className="px-2 py-2 text-center w-[300px]">
                  Món ăn
                </th>
                <th scope="col" className="px-2 py-2 text-center w-[200px]">
                  Trạng thái
                </th>
                <th scope="col" className="px-2 py-2 text-center">
                  Người xử lý
                </th>
                <th scope="col" className="px-2 py-2 text-center w-[200px]">
                  Tạo/Cập nhật
                </th>
                <th scope="col" className="px-2 py-2 text-center w-[80px]">
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
                <td className="px-2 py-2 text-center">Nguyễn Văn Khoa</td>
                <td className="px-2 py-2 text-center">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-2 ">
                      <img
                        alt="ảnh món ăn"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="object-cover w-[60px] h-[60px] rounded-md rounded-1xl"
                        style={{ color: "transparent" }}
                        src="data:image/jpeg;base64,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"
                      />
                    </div>
                    <div className="space-y-1  w-48 overflow-hidden">
                      <div className="flex">
                        <h3 className="text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                          món ăn cua hải sản
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </h3>
                        <span className="py-0.5 px-1 ml-2 text-center rounded bg-color-text">
                          x2
                        </span>
                      </div>
                      <p className="text-white font-semibold italic float-left ">
                        40.000&nbsp;₫
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-center">
                  <div>
                    <button
                      id="dropdownRadioButton"
                      // data-dropdown-toggle="dropdownRadio"
                      className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <svg
                        className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                      </svg>
                      Last 30 days
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdownRadio"
                      className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                      data-popper-reference-hidden=""
                      data-popper-escaped=""
                      data-popper-placement="top"
                      style={{
                        position: "absolute",
                        inset: "auto auto 0px 0px",
                        margin: "0px",
                        transform: "translate3d(522.5px, 3847.5px, 0px)",
                      }}
                    >
                      <ul
                        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownRadioButton"
                      >
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              id="filter-radio-example-1"
                              type="radio"
                              value=""
                              name="filter-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="filter-radio-example-1"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Last day
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              checked=""
                              id="filter-radio-example-2"
                              type="radio"
                              value=""
                              name="filter-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="filter-radio-example-2"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Last 7 days
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              id="filter-radio-example-3"
                              type="radio"
                              value=""
                              name="filter-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="filter-radio-example-3"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Last 30 days
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              id="filter-radio-example-4"
                              type="radio"
                              value=""
                              name="filter-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="filter-radio-example-4"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Last month
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              id="filter-radio-example-5"
                              type="radio"
                              value=""
                              name="filter-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="filter-radio-example-5"
                              className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              Last year
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-center">Laptop</td>
                <td className="px-2 py-2 text-center">$2999</td>
                <td className="px-2 py-2 text-center">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
