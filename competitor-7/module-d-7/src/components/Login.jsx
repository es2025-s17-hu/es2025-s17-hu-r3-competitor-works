import {useState} from "react";
import {CallerApi} from "../functions/CallerApi.js";

export const Login = ({token , setToken}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const changeUsername = (event) => {
      setUsername(()=>{
          return event.target.value
      })
    }

    const changePassword = (event) => {
        setPassword(()=>{
            return event.target.value
        })
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
        const response = await CallerApi('login', 'POST',{
            username : username,
            password :password
        })
        setToken(()=>{
            return response.token
        })
    }
  return (
      <>
          <div>Login</div>
          {token}
          <form onSubmit={(event)=>{
              handleSubmit(event)
          }}>
              <input type="text" value={username} onChange={(event) => {
                  changeUsername(event)
              }}/>

              <input type="password" value={password} onChange={(event) => {
                  changePassword(event)
              }}/>

              <button>Log In</button>
          </form>

      </>
  )
}