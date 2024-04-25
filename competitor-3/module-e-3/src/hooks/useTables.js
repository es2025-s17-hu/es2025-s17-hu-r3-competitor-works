import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Hook that fetches the menuCard items
 */
export function useTables(token) {
  const [tables, setTables] = useState([]);

  /**
   * useEffect for fetching
   */
  useEffect(() => {
    axios
      .get("/tables", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTables(res.data));
  }, [token]);

  return { tables, setTables };
}
