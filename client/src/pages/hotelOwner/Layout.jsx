import React from "react";
import Navbar from "../../components/hotelOwner/Navbar";
import Sidebar from "../../components/hotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="mt-5 ml-5 md:mt-10 md:ml-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
