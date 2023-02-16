import React, { useContext } from "react";
import { useSyncExternalStore } from "react";
import { RouterStateContext } from "../../BrowserRouter/RouterContext";
import {
  CreateBrowserRouterReturnType,
  StateType,
} from "../../BrowserRouter/type";

export const RouterProviderView = ({
  router,
}: {
  router: CreateBrowserRouterReturnType;
}) => {
  const state: StateType = useSyncExternalStore(
    router?.subscribe,
    () => router?.state
  );
  return (
    <RouterStateContext.Provider
      value={{ state: state, visited: router.visited }}
    >
      <div>{state?.routeDetail?.children}</div>
    </RouterStateContext.Provider>
  );
};
