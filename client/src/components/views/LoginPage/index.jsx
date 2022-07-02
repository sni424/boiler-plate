import axios, { Axios } from 'axios';
import { useState } from 'react'
import {useDispatch} from `react-redux`;

const LoginPage = () => {
  const dispatch = useDispatch();

  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");

  const onSubmitHandler = (e)=>{
  e.preventDefault();
  let body = {email: Email,password: Password}
  // dispatch(loginUser(body))
Axios.post('/api/users/login',body).then(res=>{
    res.data
  })
  }


  return (
    <div style={{display:"flex", justifyContent:'center',alignItems:"center"
    ,width:"100%",height:"100vh"
    }} >
     <form style={{display:"flex",flexDirection:"column"}}
     onSubmit={onSubmitHandler}
     >
      <label>Email</label>
      <input type="email" value={Email} onChange={(e)=>{
setEmail(e.target.value)
      }} />
      <label>Password</label>
      <input type="password" value={Password} onChange={
        (e)=>{
          setPassword(e.target.value);
        }
      } />
      <button style={{marginTop:"1rem"}}>
        Login
      </button>
     </form>
    </div>
  )
}

export default LoginPage
