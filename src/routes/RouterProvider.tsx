import { RouterProvider as Provider } from "react-router";
import { router } from "@/routes";

export const RouterProvider = () => {
  return <Provider router={router} />;
};
