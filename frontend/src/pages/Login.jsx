import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
// import validator from "validator";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  var [loginForm, setLoginForm] = useState({
    email:'',
    password:''
  });
  const handleLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3004/api/auth/login", {
      email: loginForm.email,
      password: loginForm.password,
    })

    if (data.message) {
      console.log('Login if condition')
      console.log(data.message);
      setIsLoggedIn(true);
      navigate("/");
    } else if (data.error) {
      console.log(data.error);
    }
  };
  return (
    <>
       
       <form action="" onSubmit={handleSubmit}>
          <input type="email" 
          placeholder='Email'
          name='email'
          onChange={handleLogin}
          />

          <input 
          type="password" 
          name='password'
          placeholder='Password'
          onChange={handleLogin}
          />
       
          <input type="submit" 
          value='Login'/>

    </form>
        
    </>
    
  )
}

export default Login