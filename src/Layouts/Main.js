import React from "react";
import Navbar from "../component/Shared/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-500 h-20"></div>
      <Outlet />
    </div>
  );
};

export default Main;
