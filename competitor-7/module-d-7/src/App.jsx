import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Login} from "./components/Login.jsx";
import {Dashboard} from "./components/Dashboard.jsx";
import {Categories} from "./components/Categories.jsx";
import {Header} from "./components/Header.jsx";
import {Items} from "./components/Items.jsx";

function App() {
    const [isAuth, setIsAuth] = useState(true)
    const [page, setPage] = useState('Dashboard')
    const [token, setToken] = useState(null)


    const logout = () => {
        setToken(null)
        setIsAuth(false)
        setPage('Dashboard')
    }

    useEffect(() => {
        alert('Please init connection to api endpoint')
    }, []);

  return (
      <>
          {page === 'Logout' && token === null && !isAuth && logout()}
        {!isAuth && <Login token={token} setToken={setToken}/>}
          {isAuth && <Header setPage={setPage} page={page}/>}
          {isAuth && page==='Dashboard' && <Dashboard  setPage={setPage}/>}
          {isAuth && page==='Categories' && <Categories  setPage={setPage}/>}
          {isAuth && page==='Items' && <Items  setPage={setPage}/>}
      </>
  )
}

export default App
