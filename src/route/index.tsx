import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";
import React from "react";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
];

export default routes;
