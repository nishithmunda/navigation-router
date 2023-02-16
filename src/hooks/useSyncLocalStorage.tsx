import { useSyncExternalStore } from "react";

export const useSyncLocalStorage = (key) => {
  const data = useSyncExternalStore(subscribe, () => {
    return window.localStorage[`${key}`];
  });
  return data;
};

const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
};
