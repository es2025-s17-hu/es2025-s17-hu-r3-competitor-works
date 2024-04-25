import {useEffect, useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";
import {CategoriesRow} from "./CategoriesRow.jsx";

export const Categories = () => {

    const [categories, setCategories] = useState([])
    const [isAdd, setIsAdd] = useState(false)

    useEffect(() => {
        const recoverData = async() => {
          const response = await CallerApi('menuCategories')
            setCategories(await response)
        }

        recoverData()
    }, []);
    
    
  return (
      <>
          <button className={'add_button'}
            onClick={()=>{
                setIsAdd(true)
            }}>+</button>
        <h1>Menucard categories</h1>
          {categories.map((categorie)=>{
            return <CategoriesRow categorie={categorie} setCategories={setCategories} key={categorie.id}/>
          })}
          {isAdd && <div className="categorie_row">
              <div className=""></div>
              <input type="text"/>
              <div className=""></div>
              <div className=""></div>
          </div>}
      </>
  )
}