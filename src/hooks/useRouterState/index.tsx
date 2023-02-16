import { useRouterStateContext } from "../../BrowserRouter/RouterContext";

export function useRouterState() {
  const { state, visited } = useRouterStateContext();
  return { state, visited };
}
