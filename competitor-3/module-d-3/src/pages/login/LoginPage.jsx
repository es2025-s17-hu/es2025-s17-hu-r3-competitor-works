import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import axios from "axios";

/**
 * Page for logging in
 */
const LoginPage = () => {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // if the user is logged in, redirect
  if (token) {
    return <Navigate to={"/"} />;
  }

  /**
   * Handle the login
   */
  async function handleLogin(e) {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/login", { username, password });
      setToken(res.data.token);
      console.log(res.data.token);
      navigate("/");
    } catch (e) {
      setError(true);
    }
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <form
        className="w-[300px] border shadow-sm rounded-md p-3 flex flex-col gap-4"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl">Login</h1>
        {error && (
          <div className="bg-red-100 text-red-900 p-2 text-center w-full rounded-md">
            Username or password is incorrect
          </div>
        )}
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
