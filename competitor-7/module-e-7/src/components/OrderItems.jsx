import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";
import {OrderItemsRow} from "./OrderItemsRow.jsx";

export const OrderItems = ({setCurrentCategorie, currentCategorie, currentOrder, token, setHandleChangeItems}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const recoverData2 = async() =>{
            const response = await CallerApi('menuItems', 'GET', undefined, token)

            setItems(await response)
        }

        recoverData2()
    }, []);



    return (
        <div className="items">
            {items.filter(cat=>cat.menuCategoryId === parseInt(currentCategorie)).map(item => {
                return <OrderItemsRow item={item} key={item.id} currentCategorie={currentCategorie} currentOrder={currentOrder} setHandleChangeItems={setHandleChangeItems} token={token}/>
            })}
        </div>
    )
}