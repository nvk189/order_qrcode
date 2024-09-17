const Login = () => {
  return (
    <>
      <div className="flex  flex-col justify-center px-6  lg:px-8 bg-color-primary rounded-md border border-gray-600">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <div className="border-gray-100">
            <h1 className="text-center text-4xl py-5">Đăng nhập</h1>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Nhập email"
                    required
                    className="bg-color-primary px-3 py-2  block w-full rounded-md border-0  text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Nhập mật khẩu"
                    required
                    className="bg-color-primary px-3 py-2 block w-full rounded-md border-0  text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 pr-10 focus:ring-white"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => {
                      const passwordInput = document.getElementById("password");
                      passwordInput.type =
                        passwordInput.type === "password" ? "text" : "password";
                    }}
                  >
                    <i className="fa fa-eye text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
