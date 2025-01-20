// import React from 'react'

import { Route, Routes } from "react-router-dom";

import AreaManagement from "./AreaManagement";
import AssignHistory from "./AssignHistory";
import Orders from "./Orders";
import PartnerList from "./PartnerList";
import ShiftScheduling from "./ShiftScheduling";
import Sidebar from "../components/ui/Sidebar";

const Dashboard = () => {
  const isActiveMenu = true;

  return (
    <div className="flex relative">
      Navbar
      {isActiveMenu ? (
        <div className="w-64 fixed dark:bg-white-400 bg-gray-100">
          <Sidebar />
        </div>
      ) : (
        <div>NoSidebar</div>
      )}
      <Routes>
        {/* view orders */}
        <Route path="/orders" element={<Orders />} />
        {/* view partner list */}
        <Route path="/partnerlist" element={<PartnerList />} />
        {/* view assignments */}
        <Route path="/assignments" element={<AssignHistory />} />
        {/* map scheduling */}
        <Route path="/schedule" element={<ShiftScheduling />} />
        <Route path="/Areamanagement" element={<AreaManagement />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
