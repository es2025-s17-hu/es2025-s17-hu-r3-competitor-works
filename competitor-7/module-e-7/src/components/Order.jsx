import {OrderCat} from "./OrderCat.jsx";
import {useEffect, useState} from "react";
import {OrderItems} from "./OrderItems.jsx";
import {CallerApi} from "../functions/CallerApi.js";
import {ElementOrder} from "./ElementOrder.jsx";

export const Order = ({currentOrder, setCurrentOrder, currentTable, token, handleChangeItems, setHandleChangeItems}) => {
    const [printing, setPrinting] = useState(false)
    const [orderTotal, setOrderTotal] = useState([])
    const [tableName, setTableName] = useState('')

    useEffect(() => {
        const recoverData = async() =>{
            const response = await CallerApi('/tables', 'GET', undefined, token)
            let table = response.filter(el=>el.id === currentTable.id)
            setTableName(table[0].name)
        }

        recoverData()
    }, []);

    useEffect(() => {
        const recoverData = async() =>{
            const response = await CallerApi('orders/tables/'+currentTable.id, 'GET', undefined, token)
            setOrderTotal(await response.OrderItems)

        }

        recoverData()
    }, [handleChangeItems]);


    const [currentCategorie, setCurrentCategorie] = useState(12)

    const handleCloseTable = () => {
        setCurrentOrder(()=>{
            return null
        })
        CallerApi('orders/tables/{tableId}/close', 'PUT', undefined, token)
    }


    useEffect(() => {
        setTimeout(()=>{
            if (printing){
                setPrinting(false)
                setCurrentOrder(null)
                CallerApi('orders/tables/'+currentTable.id+'/close', 'PUT', undefined, token)
            }

        },5000)
    }, [printing]);

    const handleClose = () => {
        setPrinting(true)
    }

    return (
        <>
            {printing &&
            <div className="printing_pop">
                <div className="printing_content">
                    Printing bill...
                </div>
            </div>
            }

            <div className="container-order">
                <div className="bar-left">
                    <div className="table">
                        {tableName}
                    </div>
                    <div className="order">
                        {orderTotal.map(item=>{
                            return <ElementOrder item={item} key={item.id}/>
                        })}
                    </div>
                    <div className="price">

                        <p>Sum : {orderTotal.reduce((acc, item)=>{
                            return acc+=parseFloat(item.MenuItem.price)
                        },0)} Ft</p>
                    </div>
                    <div className="buttons">
                        <button
                            className={'exitb'}
                            onClick={() => {
                                setCurrentOrder(null)
                            }}
                        >Exit
                        </button>
                        <button
                            className={'closeb'}

                            onClick={()=>{
                                handleClose()
                            }}
                        >Close Order
                        </button>
                    </div>
                </div>
                <div className="left">
                    <div className="categories">
                        {<OrderCat currentCategorie={currentCategorie} setCurrentCategorie={setCurrentCategorie} token={token}/>}
                    </div>
                    <div className="items">
                        {<OrderItems currentCategorie={currentCategorie} setCurrentCategorie={setCurrentCategorie} token={token}
                                     currentOrder={currentOrder}
                                     handleChangeItems={handleChangeItems}
                                     setHandleChangeItems={setHandleChangeItems}
                        />}

                    </div>
                </div>
            </div>

        </>
    )
}