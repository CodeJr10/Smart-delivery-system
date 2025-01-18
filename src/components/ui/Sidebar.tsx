// import React from 'react'

import AddTaskIcon from "@mui/icons-material/AddTask";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import TaskIcon from "@mui/icons-material/Task";

const Sidebar = () => {
  const isActiveMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isActiveMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <PeopleAltIcon />
              <span>Register Partner</span>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <RecentActorsIcon />
              <span>View Partners</span>
            </Link>
          </div>{" "}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <MapIcon />
              <span>Area</span>
            </Link>
          </div>{" "}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <CalendarMonthIcon />
              <span>Shift Schedule</span>
            </Link>
          </div>{" "}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <TaskIcon />
              <span>Orders</span>
            </Link>
          </div>
          {/* order/assignment status */}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <AddTaskIcon />
              <span>Track Status</span>
            </Link>
          </div>{" "}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <HistoryIcon />
              <span>Assignment History</span>
            </Link>
          </div>{" "}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <AutoGraphIcon />
              <span>Overall Performance</span>
            </Link>
          </div>
          {/* partner status */}
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-sm font-bold tracking-tight text-white "
              to="/"
              onClick={() => {}}
            >
              <QuestionMarkIcon />
              <span>Availability Status</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
