import {createContext, useState, useEffect} from "react";

export const LoginContext = createContext({});

const LoginContextProvider = ({children}) =>{

    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState("");

    useEffect(()=>{
        if(!loggedIn){
            setToken("");
        }
    }, [loggedIn]);

    useEffect(() => {
        if(token.trim().length === 0){
            setLoggedIn(false);
        }
    }, [token]);

    return(
      <LoginContext.Provider value={{loggedIn, setLoggedIn, token, setToken}}>
          {children}
      </LoginContext.Provider>
    );
}

export default LoginContextProvider;