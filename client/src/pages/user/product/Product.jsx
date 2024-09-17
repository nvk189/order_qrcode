import { useState } from "react";
const Product = () => {
  const initialQuantities = [0, 0, 0, 0]; // Số lượng khởi tạo cho từng sản phẩm (giả sử có 4 sản phẩm)
  const [quantities, setQuantities] = useState(initialQuantities);

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };
  return (
    <div className=" flex h-[589px] flex-col justify-start px-6 lg:px-8 bg-color-primary mt-16">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm min-h-min min-h-full relative">
        <div className="flex w-full h-full flex-col  rounded  p-2 ">
          <form className="space-y-6" action="#" method="POST">
            <div className="overflow-auto max-h-[400px]">
              <h1 className="text-center text-2xl py-1">Menu quán</h1>
              <ul role="list" className="divide-y divide-gray-100 px-1">
                {quantities.map((quantity, index) => (
                  <li
                    key={index}
                    className="flex justify-between gap-x-6 py-5 items-center"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-20 w-20 flex-none rounded bg-gray-50"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto ">
                        <p className="text-sm leading-6 text-white">
                          Súp bí ngô
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-white">
                          Được nấu từ bí ngô Thái Lan, Vịt xiêm
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-white">
                          130.000&nbsp;₫
                        </p>
                      </div>
                    </div>
                    <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          className={`px-3 py-1 text-decoration-color  rounded ${
                            quantity > 0
                              ? "bg-gray-400 "
                              : "bg-gray-400 cursor-not-allowed"
                          } text-white`}
                          onClick={() => handleDecrease(index)} // Cập nhật đúng sản phẩm
                          disabled={quantity === 0}
                        >
                          -
                        </button>

                        <span className="text-lg text-white">{quantity}</span>

                        <button
                          type="button"
                          className="px-3 py-1 bg-white text-black  rounded"
                          onClick={() => handleIncrease(index)} // Cập nhật đúng sản phẩm
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sticky bottom-0 bg-white rounded px-2 cursor-pointer">
              <div className=" flex  justify-between items-center ">
                <div className="">
                  <p className="bg-white text-black rounded px-3 py-2 cursor-pointer">
                    Đặt hàng - 2 món
                  </p>
                </div>
                <div className=" text-black text-center ">130.000&nbsp;₫</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
