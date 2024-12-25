import { useEffect, useState } from "react";

export function useDebounce(value, timeout) {
  const [deBounceValue, setDeBounceValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDeBounceValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);

  return deBounceValue;
}
