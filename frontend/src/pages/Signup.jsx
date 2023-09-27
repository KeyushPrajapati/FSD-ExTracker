import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
// import { useAuth } from "../components/AuthContext";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  var [registerForm, setRegisterForm] = useState({});
  const handleRegister = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleRegistersubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(registerForm.email)) {
      if (registerForm.createpassword === registerForm.confirmpassword) {
        axios.post("http://localhost:3004/api/auth/signup", {
            email: registerForm.email,
            password:registerForm.createpassword,
            
          })
          .then((res) => {
            if (res.data.error) {
              console.log(res.data.error);
            } else {
              console.log("Verify your account on your mail.");
              navigate("/login");
            }
          });
      } else {
        console.log("Password not matched");
      }
    } else {
      console.log("Email id is not right");
    }
  };

  return (
    <>
    <form action="" onSubmit={handleRegistersubmit}>
        <input type="email" 
        placeholder='Email'
        name="email"
        onChange={handleRegister}
        />
        <input 
        type="password"
        name="createpassword"
        placeholder='Password'
        onChange={handleRegister}
        />

        <input 
        type="password" 
        name="confirmpassword"
        placeholder='Confirm Password'
        onChange={handleRegister}
        />

        <input type="submit" 
        value='Sign-up'/>
    </form>
    </>
  )
}

export default Signup