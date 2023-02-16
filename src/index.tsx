// import React from "react";
// import { createRoot } from "react-dom/client";
// import { App } from "./App";
// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

export {
  useLocation,
  useNavigate,
  useRouterState,
  LocationType,
} from "./hooks";

export { RouterProvider, Route, RouteProps } from "./components";
