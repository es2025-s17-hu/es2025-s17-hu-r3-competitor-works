import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Create the auth context
 */
const AuthContext = createContext(null);

/**
 * Hook for using the context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error();

  return context;
}

/**
 * AuthContextProvider
 */
const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage(
    "token",
    "a31405d272b94e5d12e9a52a665d3bfe"
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
