import Home from "./pages/Home";
import React from "react";
import Flake from "./pages/Flake";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flake/:id",
    element: <Flake />,
  },
];
