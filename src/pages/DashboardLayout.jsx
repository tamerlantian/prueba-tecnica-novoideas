import React from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
