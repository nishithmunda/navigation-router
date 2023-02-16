import { RouteProps } from "../components/Route/type";

export interface NavigateOptionsType {
  replaceMode?: string;
  info?: string;
}

export type StateType = {
  pathname: string;
  routeDetail: RouteProps | null;
  loader: any;
  navigationInProgress: boolean;
};

export interface RouterContextType {
  navigate: (url: string, state?: any, option?: NavigateOptionsType) => void;
}

export interface RouterStateContextType {
  state: StateType;
  visited: Array<string>;
}
