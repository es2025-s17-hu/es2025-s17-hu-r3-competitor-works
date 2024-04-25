import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";
import {OrderItems} from "./OrderItems.jsx";

export const OrderCat = ({currentCategorie, setCurrentCategorie, token}) => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        const recoverData = async() =>{
            const response = await CallerApi('menuCategories', 'GET', undefined, token)
            setCategories(await response)
        }

        recoverData()

    }, []);

    useEffect(() => {

    }, []);

  return (
      <>
          <div className={'categories'}>
              {categories.map(categorie=>{
                  return <div  onClick={()=>{
                      setCurrentCategorie(categorie.id)
                  }} className={`categorie ${categorie.id == currentCategorie ? 'active_cat' : null}`} key={categorie.id}>{categorie.name}</div>
              })}
          </div>
      </>
  )
}