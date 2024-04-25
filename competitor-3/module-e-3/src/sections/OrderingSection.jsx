import axios from "axios";
import MenuItemSelect from "../components/ordering/MenuItemSelect";
import Sidebar from "../components/ordering/Sidebar";
import { useOpenOrder } from "../hooks/useOpenOrder";
import PrintingOverlay from "../components/PrintingOverlay";

/**
 * Component for displaying the ordering section
 */
const OrderingSection = ({
  selectedTable,
  token,
  onExit,
  onClose,
  printing,
}) => {
  const { openOrder, setOpenOrder } = useOpenOrder(token, selectedTable.id);

  if (!openOrder) return;

  /**
   * Select a menu item
   */
  async function handleMenuItemSelect(menuItem) {
    const item = {
      quantity: 1,
      MenuItem: menuItem,
      updatedAt: new Date().toISOString(),
    };
    setOpenOrder((prev) => ({
      ...prev,
      OrderItems: [item, ...prev.OrderItems],
    }));

    // Create the order item actually
    axios.post(
      "/orderItems",
      {
        orderId: openOrder.id,
        menuItemId: menuItem.id,
        quantity: 1,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  return (
    <>
      {printing && <PrintingOverlay />}
      <div className="flex items-start w-screen min-h-screen bg-[#4b4b4b] h-full">
        <Sidebar
          selectedTable={selectedTable}
          openOrder={openOrder}
          onExit={onExit}
          onClose={onClose}
        />
        <MenuItemSelect token={token} onSelect={handleMenuItemSelect} />
      </div>
    </>
  );
};

export default OrderingSection;
