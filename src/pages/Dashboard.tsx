// import React from 'react'

// import AreaManagement from "./AreaManagement";
// import AssignHistory from "./AssignHistory";

import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import { useStateContext } from "../contexts/ContextProvider";

// import Orders from "./Orders";

const Dashboard = () => {
  const { isActiveMenu } = useStateContext();

  return (
    <div className="flex relative">
      <Navbar />
      {isActiveMenu ? (
        <div className="w-64 fixed dark:bg-white-400 bg-gray-100">
          <Sidebar />
        </div>
      ) : (
        <div></div>
      )}
      <div className={`flex-1 ${isActiveMenu ? "ml-64" : "ml-0"} p-4`}>
        {/* Outlet renders child routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
