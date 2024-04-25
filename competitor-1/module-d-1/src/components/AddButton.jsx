export default function AddButton({ ...rest }) {
  return (
    <button
      className="w-16 h-16 rounded-full border border-indigo-700 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors flex items-center justify-center text-center font-bold absolute top-4 right-4 text-3xl pb-[0.325rem]"
      {...rest}
    >
      +
    </button>
  );
}
