import { useContext } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="px-4 py-2 w-full flex items-center justify-between gap-4">
      <img src={logo} className="shrink-0" />
      <ul className="flex items-center gap-2">
        {location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard/" ? (
          <li>
            <Button
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Back to Dashboard
            </Button>
          </li>
        ) : null}

        <li>
          <Button
            onClick={() => {
              auth.setToken(null);
            }}
          >
            Log out
          </Button>
        </li>
      </ul>
    </nav>
  );
}
