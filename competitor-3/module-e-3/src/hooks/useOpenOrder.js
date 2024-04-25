import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Hook that fetches the open order for a table
 */
export function useOpenOrder(token, tableId) {
  const [openOrder, setOpenOrder] = useState();

  /**
   * useEffect for fetching
   */
  useEffect(() => {
    axios
      .get(`/orders/tables/${tableId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOpenOrder(res.data));
  }, [token]);

  return { openOrder, setOpenOrder };
}
