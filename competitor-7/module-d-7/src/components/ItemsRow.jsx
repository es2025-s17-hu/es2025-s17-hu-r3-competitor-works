import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";

export const ItemsRow = ({item, setItem}) => {
    const [popUp, setPopUp] = useState(false)

    const handleDelete = () => {

        setItem((cItems)=>{
            const items = cItems.filter(el => el.id !== item.id)
            return [...items]
        })

        CallerApi('menuItems/'+item.id, 'DELETE')
    }


    return(
        <>
            {popUp && <div className="popup">
                <div className="popup_content">
                    <h2>Edit meni item</h2>
                    <input type="text" value={item.name}/>
                    <input type="text" value={item.price}/>
                    <select name="" id="" value={item.type}>
                        <option value="FOOD">FOOD</option>
                        <option value="DRINK">DRINK</option>
                        <option value="OTHER">OTHER</option>
                    </select>
                    <select name="" id="" value={item.category}>

                    </select>

                    <button
                        className={'button_style'}
                        onClick={() => {
                            setPopUp(false)
                        }}
                    >
                        Save
                    </button>
                    <button
                        className={'button_style'}
                        onClick={() => {
                            handleDelete()
                        }}
                    >
                        Delete
                    </button>
                    <button
                        className={'button_style'}
                        onClick={() => {
                            setPopUp(false)
                        }}
                    >Close
                    </button>
                </div>
            </div>}

            <div className="item_row"
                 onClick={() => {
                     setPopUp(true)
                 }}
            >
                <div>{item.name}</div>
                <div>{item.type}</div>
                <div>{item.price}</div>
            </div>
        </>
    )
}