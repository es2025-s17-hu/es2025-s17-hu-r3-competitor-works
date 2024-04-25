export function Input({ label, className, ...rest }) {
  return (
    <>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <input
        className={
          "px-2 py-1 rounded border mb-2 w-full" +
          (className ? " " + className : "")
        }
        {...rest}
      />
    </>
  );
}
