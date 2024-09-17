import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Defaultuser } from "./components/base_user/layout";
import { Defaultadmin } from "./components/base_admin/layout";
import { userRouter } from "./routers/Router";
import { adminRouter } from "./routers/Router";
function App() {
  const listRouter = [
    ...userRouter.map((route) => ({
      ...route,
      layout: route.layout === null ? Fragment : Defaultuser,
    })),
    ...adminRouter.map((route) => ({
      ...route,
      layout: route.layout === null ? Fragment : Defaultadmin,
    })),
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {listRouter.map((route, index) => {
            const Layout = route.layout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
