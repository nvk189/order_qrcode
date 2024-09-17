/* eslint-disable react/prop-types */
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="body bg-color-primary dark:bg-[#0F172A] ">
      <Header />
      <Sidebar />
      <div className="content ml-16 pt-16  h-[1300px] transform ease-in-out duration-500   md:px-8 pb-8">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
