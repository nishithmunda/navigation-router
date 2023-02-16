import React from "react";
import { useLocation } from "../../hooks";
import { RouteProps } from "./type";

export const Route = ({ children, path }: RouteProps) => {
  const location = useLocation();
  return <>{location.pathname === path ? children : null}</>;
};

