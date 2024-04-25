import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import TablePage from "./pages/TablePage.jsx";

function App() {

  return (
    <div className={"app"}>
        <main>
            {/*DEFINING ROUTES*/}
            <Routes>
                <Route path={"/"} element={<LoginPage />}></Route>
                <Route path={"/tables"} element={<TablePage />}></Route>
            </Routes>
        </main>
    </div>
  )
}

export default App
