import { useRouterContext } from "../../BrowserRouter/RouterContext";

export function useNavigate() {
  const { navigate } = useRouterContext();
  return navigate;
}
