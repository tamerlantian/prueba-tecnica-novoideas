import React from "react";
import {  ResponsiveDrawer } from "../components";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <ResponsiveDrawer>
        <Outlet />
      </ResponsiveDrawer>
    </div>
  );
};

export default DashboardLayout;
