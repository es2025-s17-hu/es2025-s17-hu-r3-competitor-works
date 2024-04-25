import { useEffect, useState } from "react";

/**
 * Hook for using the local storage more easily
 */
export function useLocalStorage(key, defaultValue) {
  // Get the value initially
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  // Update it every time
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
