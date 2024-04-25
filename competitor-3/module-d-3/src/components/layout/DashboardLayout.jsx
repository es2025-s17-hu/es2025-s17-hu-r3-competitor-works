import React from "react";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

/**
 * Component for displayin the dashboard layout
 */
const DashboardLayout = ({ children }) => {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!token) return <Navigate to={"/login"} />;

  return (
    <div className="w-full flex flex-col gap-2">
      <header className="w-full border-b px-6 py-3 flex items-center gap-4">
        <h6 className="font-semibold text-lg">DineEase Admin</h6>

        <div className="flex items-center gap-2 ml-auto">
          {pathname !== "/" && (
            <Link to="/">
              <Button>Back to dashboard</Button>
            </Link>
          )}
          <Button
            onClick={() => {
              setToken(null);
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      </header>

      {children}
    </div>
  );
};

export default DashboardLayout;
