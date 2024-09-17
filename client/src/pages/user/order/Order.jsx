const Order = () => {
  return (
    <div className=" flex h-[589px] flex-col justify-start px-6 lg:px-8 bg-color-primary mt-16">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm min-h-min min-h-full relative">
        <div className="flex w-full h-full flex-col  rounded  p-2 ">
          <form className="space-y-6" action="#" method="POST">
            <div className="overflow-auto max-h-[400px]">
              <h1 className="text-center text-2xl py-1">Đơn hàng</h1>
              <ul role="list" className="divide-y divide-gray-100 px-1">
                <li className="flex justify-between gap-x-6 py-5 items-center">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto  ">1</div>
                    <img
                      className="h-20 w-20 flex-none rounded bg-gray-50"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto ">
                      <p className="text-sm leading-6 text-white">Súp bí ngô</p>

                      <p className="mt-1 truncate text-xs leading-5  text-white">
                        130.000&nbsp;₫ X
                        <span className="ml-2 px-1 py-2 bg-white text-black rounded">
                          2
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="px-2 py-1 border rounded border-slate-600">
                      Chờ xử lý
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sticky bottom-0 bg-transparent rounded px-2 cursor-pointer">
              <div className=" flex  justify-between items-center ">
                <div className="">
                  <p className="bg-transparent text-white rounded px-3 py-2 ">
                    Đơn chưa thanh toán - 2 món
                  </p>
                </div>
                <div className=" text-white text-center ">130.000&nbsp;₫</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
