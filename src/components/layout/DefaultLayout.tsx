import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  
  return (
    <div className="flex">
      <Sidebar isOpenSidebar={isOpenSidebar} />
      <main className="w-full p-6 bg-gray-100">
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
