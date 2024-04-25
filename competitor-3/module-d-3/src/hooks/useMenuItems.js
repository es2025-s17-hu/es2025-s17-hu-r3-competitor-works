import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

/**
 * Hook that fetches the menuCard items
 */
export function useMenuItems() {
  const [items, setItems] = useState([]);
  const { token } = useAuth();

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
