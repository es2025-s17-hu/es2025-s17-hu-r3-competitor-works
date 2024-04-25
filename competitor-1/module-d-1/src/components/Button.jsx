export default function Button({ className, children, ...rest }) {
  return (
    <button
      className={
        "py-1 px-2 rounded bg-indigo-100 hover:bg-indigo-200 transition-colors border border-indigo-700 text-indigo-700 font-medium" +
        (className ? " " + className : "")
      }
      {...rest}
    >
      {children}
    </button>
  );
}
