import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import React from "react";
// import Dashboard from './Dashboard';

const Dashboard = () => {
  return (
    <div>
      {/* side bar */}
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
