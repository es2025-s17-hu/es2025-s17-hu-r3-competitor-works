import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function AuthEnsureWrapper() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token === null) {
      navigate("/");
    }
  }, [auth.token]);

  return <Outlet />;
}
