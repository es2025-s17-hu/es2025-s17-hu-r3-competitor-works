import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";

export const TablesRow = ({table, setCurrentOrder, setCurrentTable, token}) => {
    const [orderOfTable, setOrderOfTable] = useState(null)
    useEffect(() => {
        const recoverData = async() =>{
            const response = await CallerApi('orders/tables/'+table.id, 'GET', undefined, token)
            setOrderOfTable(await response.id)
        }

        recoverData()
    }, []);

    const handleClickOnTable = async () =>{
        if (orderOfTable){
            setCurrentOrder(orderOfTable)
            setCurrentTable(table)
        }
        else{
            const response = await CallerApi('orders', 'POST',{
                'tableId' : table.id
            }, token)
            await setCurrentOrder(await response.id)
            await setCurrentTable(table)
        }
    }

    return (
        <div
            onClick={()=>{
                handleClickOnTable()
            }}
            className={`table ${table.hasOpenOrder ? 'active' : 'disactive'}`} style={{position: "absolute", left : table.x, top: table.y, height: table.height, width: table.width}}>
            {table.name}</div>
    )
}