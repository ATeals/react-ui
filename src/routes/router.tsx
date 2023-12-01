import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { PATH } from "./constants";
import { DropboxPage } from "@/pages";
import { Test } from "@/pages/Test";
import { ToastPage } from "@/pages/ToastPage";
import { HomePage } from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.DROP_BOX, element: <DropboxPage /> },
      { path: PATH.TOAST, element: <ToastPage /> },
      { path: PATH.TEST, element: <Test /> },
    ],
  },
]);
