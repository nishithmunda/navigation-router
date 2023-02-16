import React, { ReactElement, useEffect, useState } from "react";
import { createBrowserRouter } from "../../BrowserRouter/createBrowserRouter";
import { RouterContext } from "../../BrowserRouter/RouterContext";
import { CreateBrowserRouterReturnType } from "../../BrowserRouter/type";
import { RouteProps } from "../Route/type";
import { RouterProviderView } from "../RouterProviderView";

export function RouterProvider({ children }: { children: ReactElement[] }) {
  const [routes, setRoutes] = useState<RouteProps[]>([]);

  //Fetching Children
  useEffect(() => {
    let list: RouteProps[] = [];
    React.Children.forEach(children, (child) => {
      list.push(child.props);
    });
    setRoutes(list);
  }, [children]);

  const router: CreateBrowserRouterReturnType = createBrowserRouter(routes);

  return (
    <RouterContext.Provider value={{ navigate: router?.navigate }}>
      {routes.length > 0 && <RouterProviderView router={router} />}
    </RouterContext.Provider>
  );
}

interface RouterProvider {
  children: React.ReactElement;
}
