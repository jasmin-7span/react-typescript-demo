import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-6">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
