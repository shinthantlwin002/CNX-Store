import React from "react";
import Topbar from "./components/layout/Topbar";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
