import { RouteProps } from "../components/Route/type";
import {
  CreateBrowserRouterReturnType,
  NavigateOptionsType,
  NavigationRoutes,
  StateType,
} from "./type";

const findRoute = (routes: RouteProps[], pathname: string) => {
  return routes.find((route) => route.path === pathname) || null;
};

export function createBrowserRouter(
  routes: RouteProps[]
): CreateBrowserRouterReturnType {
  let subscribers: any = [];

  const subscribe = (subscriber: StateType) => {
    subscribers.push(subscriber);
    return () => {
      subscribers = subscribers.filter((sub: StateType) => sub !== subscriber);
    };
  };

  let state: StateType = {
    pathname: "/",
    routeDetail: null,
    loader: null,
    navigationInProgress: false,
  };

  //Return visited routes
  const visitedroutes = () => {
    //@ts-ignore
    let listArray: NavigationRoutes[] = window.navigation.entries();
    let list =
      listArray.length > 0
        ? new Set(listArray.map((nav) => new URL(nav?.url)?.pathname))
        : [];

    return Array.from(list);
  };

  const updateState = (obj: any) => {
    state = {
      ...state,
      ...obj,
    };
    subscribers.forEach((subscriber: any) => subscriber(state));
  };

  const completeNavigation = async (url: string) => {
    const { pathname } = new URL(url);
    const currRouter = findRoute(routes, pathname);
    updateState({
      pathname: pathname,
      routeDetail: currRouter,
      navigationInProgress: false,
    });
  };

  const listner = (e: any) => {
    e.intercept({
      async handler() {
        await completeNavigation(e.destination.url);
      },
    });
  };

  //@ts-ignore
  window.navigation.addEventListener("navigate", listner);
  completeNavigation(window.location.href);

  const navigate = (
    url: string,
    state?: any,
    options?: NavigateOptionsType
  ) => {
    //@ts-ignore
    window.navigation.navigate(url, {
      history: options?.replaceMode ? "replace" : "push",
      state: state,
      info: options?.info,
    });
  };

  return {
    get state() {
      return state;
    },
    get visited() {
      return visitedroutes();
    },
    navigate,
    subscribe,
  };
}
