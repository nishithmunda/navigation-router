import React, { useContext } from "react";
import { RouterContextType, RouterStateContextType } from "./type";

export const RouterStateContext = React.createContext<any>(null);
export const RouterContext = React.createContext<any>(null);

export const useRouterStateContext = () => {
  const stateContextValue: RouterStateContextType =
    useContext(RouterStateContext);
  return stateContextValue;
};

export const useRouterContext = () => {
  const contextValue: RouterContextType = useContext(RouterContext);
  return contextValue;
};
