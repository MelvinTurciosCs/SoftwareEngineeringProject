import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {useState} from 'react'
import "../App.css"

//npm i axios

const Register = () => {

  const [inputs,setInputs] = useState({
    username:"",
    fullname:"",
    email:"",
    phone:"",
    password:""
  })

  //to catch registering a username already made
  const [err,setError] = useState(null)

  //function to navigate to login after registering
  const navigate = useNavigate()

  //async function because we are making an api request
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/authen/register", inputs)
      navigate("/login")
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
            <input required type="text" placeholder='username' name = 'username' onChange={handleChange}/>
            <input required type="text" placeholder='Full Name' name = 'fullname' onChange={handleChange}/>
            <input required type="email" placeholder='email' name = 'email' onChange={handleChange} />
            <input required type="text" placeholder='phone' name = 'phone' onChange={handleChange}/>
            <input required type="password" placeholder='password' name = 'password' onChange={handleChange}/>
            <button onClick = {handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>Already have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register