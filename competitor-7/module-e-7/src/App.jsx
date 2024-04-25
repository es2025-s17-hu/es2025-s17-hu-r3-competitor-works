import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Login} from "./components/Login.jsx";
import {Tables} from "./components/Tables.jsx";
import {Order} from "./components/Order.jsx";

function App() {
  const [count, setCount] = useState(0)
    const [token, setToken] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [currentTable, setCurrentTable] = useState(null)
    const [currentOrder, setCurrentOrder] = useState(null)
    const [handleChangeItems, setHandleChangeItems] = useState('')


  return (
      <>
          {!isAuth && <Login setToken={setToken} setIsAuth={setIsAuth}/>}
          {!currentOrder && isAuth && <Tables setCurrentOrder={setCurrentOrder} setCurrentTable={setCurrentTable} token={token}/>}
          {currentOrder && isAuth &&  <Order currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} currentTable={currentTable} token={token}
                                             handleChangeItems={handleChangeItems}
                                             setHandleChangeItems={setHandleChangeItems}
          />}
      </>
  )
}

export default App
