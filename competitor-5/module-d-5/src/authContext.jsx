import {createContext, useContext, useState} from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(null);

    const login = (token) => {
        localStorage.setItem('token', token);
    }

    return (
        <AuthContext.Provider value={{isLoading, login}}>
            {children}
        </AuthContext.Provider>
    )
}