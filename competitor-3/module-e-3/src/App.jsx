import { useState } from "react";
import PinSection from "./sections/PinSection";
import axios from "axios";
import TableSelectSection from "./sections/TableSelectSection";
import OrderingSection from "./sections/OrderingSection";

/**
 * Set the default axios values
 */
axios.defaults.baseURL = "https://module-c-3-solution.dineease.com/api/v1";

/**
 * The entrypoint of the application
 */
const App = () => {
  // Store the token
  const [token, setToken] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);

  const [printing, setPrinting] = useState(false);

  // If the token cannot be found, return the PIN
  if (!token) return <PinSection setToken={setToken} />;

  // Display the select table section
  if (!selectedTable)
    return (
      <TableSelectSection token={token} setSelectedTable={setSelectedTable} />
    );

  /**
   * Handle the closing of the order
   */
  async function closeOrder() {
    setPrinting(true);
    axios.put(`/orders/tables/${selectedTable.id}/close`, undefined, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Wait for 5 sesc
    await new Promise((res) => setTimeout(res, 5000));

    setPrinting(false);
    setSelectedTable(null);
  }

  return (
    <OrderingSection
      printing={printing}
      selectedTable={selectedTable}
      token={token}
      onExit={() => setSelectedTable(null)}
      onClose={closeOrder}
    />
  );
};

export default App;
