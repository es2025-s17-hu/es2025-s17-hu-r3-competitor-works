import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PrintBillModalContext = createContext({
  open() {},
});

export default function PrintBillModal({ children }) {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setOpen(false);
        navigate("/tables");
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  return (
    <PrintBillModalContext.Provider
      value={{
        open() {
          setOpen(true);
        },
      }}
    >
      <div
        className={
          "fixed left-0 top-0 right-0 bottom-0 bg-black/50 transition-all flex items-center justify-center " +
          (isOpen ? "opacity-1" : "opacity-0 pointer-events-none")
        }
      >
        <div className="p-2 bg-gray-500 rounded">Printing bill...</div>
      </div>
      {children}
    </PrintBillModalContext.Provider>
  );
}
