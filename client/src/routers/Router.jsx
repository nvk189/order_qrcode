import Home from "../pages/user/home/Home";
import Login from "../pages/user/login/Login";
import Product from "../pages/user/product/Product";
import Order from "../pages/user/order/Order";

// admin
import LoginAdmin from "../pages/admin/login/Login";
import OrderAdmin from "../pages/admin/order/Order";
import Table from "../pages/admin/table/Table";

const userRouter = [
  { path: "home", component: Home },
  { path: "login", component: Login },
  { path: "product", component: Product },
  { path: "order", component: Order },
];
const adminRouter = [
  {
    path: "ladmin",
    component: LoginAdmin,
  },
  {
    path: "orderadmin",
    component: OrderAdmin,
  },
  {
    path: "table",
    component: Table,
  },
];

export { userRouter, adminRouter };
