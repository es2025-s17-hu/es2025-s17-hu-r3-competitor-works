/**
 * Component for displaying a printing overlay
 * @returns
 */
const PrintingOverlay = () => {
  return (
    <div className="fixed z-[100] bg-black/10 inset-0 text-3xl font-semibold text-white flex items-center justify-center">
      Printing...
    </div>
  );
};

export default PrintingOverlay;
