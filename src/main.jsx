import React from "react";
import ReactDOM from "react-dom";
import { Outlet, ReactLocation, Router } from "react-location";
import { routes } from "./index.routes";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

const location = new ReactLocation();
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
