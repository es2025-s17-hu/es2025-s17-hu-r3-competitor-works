import {CallerApi} from "../functions/CallerApi.js";
import {useState} from "react";

export const CategoriesRow = ({categorie, setCategories}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleDelete = () => {

        setCategories((cCat)=>{
            const categories = cCat.filter(categories => categories.id !== categorie.id)
            return [...categories]
        })

        CallerApi('menuCategories/'+categorie.id, 'DELETE')
    }

    const handleEdit = async(event) =>{
        const eventName = event.target.value
        const response = await CallerApi('menuCategories/'+categorie.id, 'PUT',{
            name : eventName
        })
    }

  return(
      <>
          <div className={'categorie_row'}>
            <div>{categorie.id}</div>
              {isEdit && <input
                  onChange={(event) => {
                      handleEdit(event)
                  }}
                  type={'text'} defaultValue={categorie.name}/>}
              {!isEdit &&
                <div>{categorie.name}</div>
              }

              <div>
                  {!isEdit && <button
                    onClick={()=>{
                        setIsEdit(true)
                    }}
                  >Edit</button>}
                  {isEdit && <button
                      onClick={()=>{
                          setIsEdit(false)
                      }}
                  >Close</button>}

                  <button
                      onClick={() => [
                          handleDelete()
                    ]}
                 >Delete</button>

              </div>
          </div>
      </>
  )
}