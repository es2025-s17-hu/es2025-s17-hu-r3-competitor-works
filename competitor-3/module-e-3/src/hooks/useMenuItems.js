import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Hook that fetches the menuCard items
 */
export function useMenuItems(token) {
  const [items, setItems] = useState([]);

  /**
   * useEffect for fetching
   */
  useEffect(() => {
    axios
      .get("/menuItems", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setItems(res.data));
  }, [token]);

  return { items, setItems };
}
