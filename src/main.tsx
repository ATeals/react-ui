import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "./routes";

import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
