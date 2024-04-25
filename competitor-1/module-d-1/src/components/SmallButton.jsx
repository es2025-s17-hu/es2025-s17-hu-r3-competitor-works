export default function SmallButton({ children, ...rest }) {
  return (
    <button
      className="px-2 py-1 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
      {...rest}
    >
      {children}
    </button>
  );
}
