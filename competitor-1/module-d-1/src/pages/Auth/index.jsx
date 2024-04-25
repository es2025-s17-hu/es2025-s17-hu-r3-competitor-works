import { useContext, useEffect } from "react";
import { login } from "../../api";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";

export default function Auth() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token !== null) {
      navigate("/dashboard");
    }
  }, [auth.token]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <main>
        <img src={logo} className="mx-auto mb-16" />
        <form
          className="p-8 rounded-lg shadow"
          onSubmit={async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);

            const req = {
              username: data.get("username"),
              password: data.get("password"),
            };

            const res = await login(req);
            auth.setToken(res.token);
            console.log("Logged in! " + res.token);
          }}
        >
          <h1 className="font-black text-2xl mb-8 text-center">Log In</h1>
          <Input label="Username" name="username" required />
          <Input label="Password" type="password" name="password" required />

          <button className="block mx-auto px-2 py-1 rounded bg-indigo-600 text-white mt-4">
            Log In
          </button>
        </form>
      </main>
    </div>
  );
}
