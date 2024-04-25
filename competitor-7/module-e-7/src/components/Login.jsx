import {useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";

export const Login = ({setToken, setIsAuth}) => {
  const [code, setCode] = useState('')
    const [error, setError] = useState(false)
  const handleAddCode = async(char) =>{
        setError(false)
    setCode((curr)=>{
      let newCurr = curr+=char

      if (newCurr.length === 4 ){
        Check(newCurr)
      }
      return newCurr
    })
  }

  const Check = async (newCurr) => {
      setError(true)
      setCode('')
    const response = await CallerApi('login/pin', 'POST', {
      pin : newCurr
    })

    if (await response){
      setToken(await response.token)
      setIsAuth(true)
    }

  }

  return (
      <>

        <div className="container_login">
            <div className="subcontainer_login">
                <h2>Enter your pin</h2>
                <h3>
                {code.replace(0, '*')
                    .replace(1, '*')
                    .replace(2, '*')
                    .replace(3, '*')
                    .replace(4, '*')
                    .replace(5, '*')
                    .replace(6, '*')
                    .replace(7, '*')
                    .replace(8, '*')
                    .replace(9, '*')
                }
                </h3>
                {error && <p style={{color: 'orangered'}}>Incorrect PIN. Try again!</p>}
            <div className="grid">
            <div className="A"
              onClick={()=>{
                handleAddCode('0')
              }}
            >0</div>
            <div className="B"
                          onClick={()=>{
                handleAddCode('1')
              }}
            >1</div>
            <div className="C"
                          onClick={()=>{
                handleAddCode('2')
              }}
            >2</div>
            <div className="D"
                          onClick={()=>{
                handleAddCode('3')
              }}
            >3</div>
            <div className="E"
                          onClick={()=>{
                handleAddCode('4')
              }}
            >4</div>
            <div className="F"
                          onClick={()=>{
                handleAddCode('5')
              }}
            >5</div>
            <div className="G"
                          onClick={()=>{
                handleAddCode('6')
              }}
            >6</div>
            <div className="H"
                          onClick={()=>{
                handleAddCode('7')
              }}
            >7</div>
            <div className="I"
                          onClick={()=>{
                handleAddCode('8')
              }}
            >8</div>
            <div className="J"
                          onClick={()=>{
                handleAddCode('9')
              }}
            >9</div>
            <div className="CLR"
              onClick={()=>{
                setCode('')
              }}
            >CLEAR</div>
          </div>
            </div>
        </div>

      </>

  )
}