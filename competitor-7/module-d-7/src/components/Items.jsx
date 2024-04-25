import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";
import {CategoriesRow} from "./CategoriesRow.jsx";
import {ItemsRow} from "./ItemsRow.jsx";

export const Items = () => {
    const [items, setItems] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    const [categories, setCategories] = useState([])
    const [currentCategorie, setCurrentCategorie] = useState(12)
    
    useEffect(() => {
        const recoverData = async() => {
            const response = await CallerApi('menuCategories')
            setCategories(await response)
        }

        recoverData()
    }, []);


    useEffect(() => {
        const recoverData = async() => {
            const response = await CallerApi('menuItems')
            setItems(await response)
        }

        recoverData()
    }, []);


    return (
        <>
            <button className={'add_button'}>+</button>
            <h1>Menu Items</h1>
            <select name="" id="" value={currentCategorie}
                onChange={(event)=>{
                    setCurrentCategorie(event.target.value)
                }}
            >
                {categories.map(cat=>{
                  return <option value={cat.id}> {cat.name}</option>
                })}
            </select>
            {items.filter(cat=>cat.menuCategoryId === parseInt(currentCategorie)).map((item) => {
                return <ItemsRow item={item} setItem={setItems} key={item.id}/>
            })}
            {/*{isAdd && input}*/}
        </>
    )
}