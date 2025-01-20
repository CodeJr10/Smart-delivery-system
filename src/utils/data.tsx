import AddTaskIcon from "@mui/icons-material/AddTask";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import MapIcon from "@mui/icons-material/Map";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { ReactNode } from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import TaskIcon from "@mui/icons-material/Task";

// type DeliveryPartner = {
//   _id?: string;
//   name: string;
//   email: string;
//   phone: string;
//   status: "active" | "inactive";
//   currentLoad: number; // max: 3
//   areas: string[];
//   shift: {
//     start: string; // HH:mm
//     end: string; // HH:mm
//   };
//   metrics: {
//     rating: number;
//     completedOrders: number;
//     cancelledOrders: number;
//   };
// };

// type Order = {
//   _id: string;
//   orderNumber: string;
//   customer: {
//     name: string;
//     phone: string;
//     address: string;
//   };
//   area: string;
//   items: {
//     name: string;
//     quantity: number;
//     price: number;
//   }[];
//   status: "pending" | "assigned" | "picked" | "delivered";
//   scheduledFor: string; // HH:mm
//   assignedTo?: string; // partner ID
//   totalAmount: number;
//   createdAt: Date;
//   updatedAt: Date;
// };

// type Assignment = {
//   orderId: string;
//   partnerId: string;
//   timestamp: Date;
//   status: "success" | "failed";
//   reason?: string;
// };

// type AssignmentMetrics = {
//   totalAssigned: number;
//   successRate: number;
//   averageTime: number;
//   failureReasons: {
//     reason: string;
//     count: number;
//   }[];
// };

type linkItems = {
  name: string;
  icon: ReactNode;
};

type linkGroup = {
  title: string;
  links: linkItems[];
};
export const links: linkGroup[] = [
  {
    title: "Partner",
    links: [
      {
        name: " Register Partner",
        icon: <PeopleAltIcon />,
      },
      {
        name: "View Partner",
        icon: <RecentActorsIcon />,
      },
      {
        name: "Availability Status",
        icon: <QuestionMarkIcon />,
      },
      {
        name: "Shift Schedule",
        icon: <CalendarMonthIcon />,
      },
    ],
  },
  {
    title: "Orders",
    links: [
      {
        name: "Manage Orders",
        icon: <TaskIcon />,
      },
      {
        name: "Track Status",
        icon: <AddTaskIcon />,
      },
      {
        name: "Assignment History",
        icon: <HistoryIcon />,
      },

      {
        name: "Area",
        icon: <MapIcon />,
      },
      {
        name: "Overall Performance",
        icon: <AutoGraphIcon />,
      },
    ],
  },
];
