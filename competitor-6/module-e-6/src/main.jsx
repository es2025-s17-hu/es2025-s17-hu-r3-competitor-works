import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginContextProvider from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LoginContextProvider>
            <App />
        </LoginContextProvider>
    </BrowserRouter>

)
