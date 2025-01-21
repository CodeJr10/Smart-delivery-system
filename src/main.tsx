import "./index.css";

import { ContextProvider } from "./contexts/ContextProvider";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
