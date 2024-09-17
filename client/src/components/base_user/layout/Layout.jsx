/* eslint-disable react/prop-types */
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex  w-full flex-col relative ">
        <Header />
        <>{children}</>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
