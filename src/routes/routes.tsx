import AreaManagement from "../pages/AreaManagement";
import AssignHistory from "../pages/AssignHistory";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import PartnerList from "../pages/PartnerList";
import PartnerRegister from "../pages/PartnerRegister";
import Performance from "../pages/Performance";
import ShiftScheduling from "../pages/ShiftScheduling";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "register-partner",
        element: <PartnerRegister />,
      },
      {
        path: "manage-orders",
        element: <Orders />,
      },
      {
        path: "view-partner",
        element: <PartnerList />,
      },
      {
        path: "availability-status",
        element: <PartnerList />,
      },
      {
        path: "shift-schedule",
        element: <ShiftScheduling />,
      },
      {
        path: "track-status",
        element: <Orders />,
      },
      {
        path: "area",
        element: <AreaManagement />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "assign-history",
        element: <AssignHistory />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
