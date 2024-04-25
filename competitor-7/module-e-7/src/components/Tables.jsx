import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";
import {TablesRow} from "./TablesRow.jsx";

export const Tables = ({setCurrentOrder, setCurrentTable, token}) => {
    const [tables, setTables] = useState([])

    useEffect(() => {
        const recoverData = async() =>{
            const response = await CallerApi('tables', 'GET', undefined, token)
            setTables(await response)
        }

        recoverData()
    }, []);

    return (
        <>
            <h1 style={{color: 'white'}}>Select a table</h1>
            <div className="container_table">
                {tables.map(el=>{
                    return <TablesRow key={el.id} table={el} setCurrentOrder={setCurrentOrder} setCurrentTable={setCurrentTable} token={token}/>
                })}
            </div>

        </>
    )
}