import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {useState} from 'react'
import "../App.css"
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [inputs,setInputs] = useState({
        username:"",
        password:""
      })
    
      //to catch registering a username already made
      const [err,setError] = useState(null)
    
      //function to navigate to login after registering
      const navigate = useNavigate()
    
      //get current user info from context
      //login function returns current user
      //login in from authContext
      const {login} = useContext(AuthContext);

      //console.log(currentUser) --> from context

      //async function because we are making an api request
      const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await login(inputs)
            //api request moved to authenContext
            //   await axios.post("/authen/login", inputs)
          navigate("/welcome")
        }catch(err){
          setError(err.response.data); //path of the error message in inpsect
        }
      }
    
      const handleChange = e => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      }


  return (
    <div className='userSys'>
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='username' name = "username" onChange = {handleChange}/>
            <input required type="password" placeholder='password' name = "password" onChange = {handleChange}/>
            <button onClick = {handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login