import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function DashboardWrapper() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token === null) {
      navigate("/");
    }
  }, [auth.token]);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
