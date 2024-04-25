import { Link } from "react-router-dom";

function BigButton({ children, className, disabled, to, ...rest }) {
  return (
    <Link
      to={disabled ? "#" : to}
      className={
        "w-full h-full p-8 text-3xl font-bold text-center bg-gray-300 rounded-lg" +
        (disabled ? " text-gray-400" : "") +
        (className ? " " + className : "")
      }
      {...rest}
    >
      {children}
    </Link>
  );
}

export default function Index() {
  return (
    <main className="py-16">
      <h1 className="text-center text-3xl font-black mb-16">Admin Dashboard</h1>
      <div className="w-3/4 mx-auto flex grid grid-cols-3 gap-4">
        <BigButton to="/dashboard/categories">Menu Categories</BigButton>
        <BigButton to="/dashboard/items">Menu Items</BigButton>
        <BigButton to="/dashboard/tables" disabled>
          Tables
        </BigButton>
        <BigButton to="/dashboard/users" disabled>
          Users
        </BigButton>
        <BigButton to="/dashboard/stats" disabled>
          Statistics
        </BigButton>
        <BigButton to="/dashboard/preferences" disabled>
          Preferences
        </BigButton>
      </div>
    </main>
  );
}
