import React from "react";
import { Route, RouterProvider } from "./components";

import { useNavigate, useRouterState } from "./hooks";

export function App() {
  return (
    <>
      <RouterProvider>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/test-url">
          <TU />
        </Route>
        <Route path="/test-url/:id">
          <TU />
        </Route>
      </RouterProvider>
    </>
  );
}

function Home() {
  const state = useRouterState();
  console.log(state);
  const navigate = useNavigate();

  return (
    <div>
      HOME
      <button onClick={() => navigate("/test-url")}>Navigate</button>
    </div>
  );
}

function TU() {
  const navigate = useNavigate();
  const state = useRouterState();
  return (
    <div>
      TEST-URL
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
