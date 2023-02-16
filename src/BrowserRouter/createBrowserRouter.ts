import { RouteProps } from "../components/Route/type";
import { NavigateOptionsType, StateType } from "./type";

const findRoute = (routes, pathname) => {
  return routes.find((route) => route.path === pathname) || null;
};

export function createBrowserRouter(routes: RouteProps[]) {
  let subscribers: any = [];

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      subscribers = subscriber.filter((sub) => sub !== subscriber);
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
    let listArray = window.navigation.entries();
    let list =
      listArray.length > 0
        ? new Set(listArray.map((nav) => new URL(nav?.url)?.pathname))
        : [];

    return Array.from(list);
  };

  const updateState = (obj) => {
    state = {
      ...state,
      ...obj,
    };
    subscribers.forEach((subscriber) => subscriber(state));
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

  window.navigation.addEventListener("navigate", listner);
  completeNavigation(window.location.href);

  const navigate = (
    url: string,
    state?: any,
    options?: NavigateOptionsType
  ) => {
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
