import { useEffect, useState } from "react";
import { LocationType } from "./type";

export function useLocation() {
  let [location, setLocation] = useState<LocationType>({
    hostname: "",
    port: "",
    pathname: "",
    search: "",
    hash: "",
    protocol: "",
  });

  useEffect(() => {
    const { hostname, port, pathname, search, hash, protocol } =
      document.location;
    setLocation({ hostname, port, pathname, search, hash, protocol });
  }, [document.location.pathname]);

  return location;
}
