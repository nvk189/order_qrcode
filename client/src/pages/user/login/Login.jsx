const Login = () => {
  return (
    <div className="flex h-[589px] flex-col justify-start px-6  lg:px-8 bg-color-primary mt-16">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm min-h-min min-h-full">
        <div className="rounded border border-slate-800 p-5">
          <h1 className="text-center text-4xl py-5">Đăng nhập</h1>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Tên khách hàng
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tên khách hàng"
                  required
                  className="bg-color-primary px-3 py-2 block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-white"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" flex w-full justify-center rounded-md bg-white text-black px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-color-text   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
