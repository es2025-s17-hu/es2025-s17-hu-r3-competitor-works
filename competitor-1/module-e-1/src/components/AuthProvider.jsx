import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: null,
  setToken(token) {
    console.warn(
      "Default AuthContext.setToken called! Do you have an AuthProvider?"
    );
  },
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken(token) {
          if (token === null) {
            localStorage.removeItem("token");
          } else {
            localStorage.setItem("token", token);
          }
          setToken(token);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
