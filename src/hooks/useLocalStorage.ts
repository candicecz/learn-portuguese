import React, {useEffect, useState} from "react";

// Hook used to read and write to local storage
export const useLocalStorage = (
  key: string,
  initialValue: any = "",
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) => {
  const [state, setState] = useState(() => {
    const storageValue =
      typeof window !== "undefined" && window.localStorage.getItem(key);
    if (storageValue) {
      return deserialize(storageValue);
    } else {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });
  const prevKeyRef = React.useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, [state]);

  return [state, setState];
};
