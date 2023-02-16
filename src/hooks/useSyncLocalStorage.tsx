import { useSyncExternalStore } from "react";

export const useSyncLocalStorage = (key: string) => {
  const data = useSyncExternalStore(subscribe, () => {
    return window.localStorage[`${key}`];
  });
  return data;
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
};
