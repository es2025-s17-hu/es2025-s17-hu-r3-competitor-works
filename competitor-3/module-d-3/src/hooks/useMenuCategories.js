import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

/**
 * Hook that fetches the menuCard categories
 */
export function useMenuCategories() {
  const [categories, setCategories] = useState([]);
  const { token } = useAuth();

  /**
   * useEffect for fetching
   */
  useEffect(() => {
    axios
      .get("/menuCategories", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) =>
        setCategories(res.data.sort((a, z) => a.priority - z.priority))
      );
  }, [token]);

  return { categories, setCategories };
}
