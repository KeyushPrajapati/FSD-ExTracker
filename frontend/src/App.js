import React from 'react';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header';
import Footer from './components/Footer';
// import Expenses from './pages/Expenses'
import Analysis from './pages/Analysis'
// import Logout from './components/Logout'
import Signup from './pages/Signup'

import {Routes,Route, Navigate,BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider,useAuth } from "./components/AuthContext";

const Appcontent = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
     <Header/>
      <Routes>
       
        <Route path='/' element={<Navigate to ='/home'/>} />
        <Route path='/home' element = {<Home/>} />
        {/* <Route path='/about' element={<About/>} /> */}
       
        

        {/* <Route path='/signup' element={<Register/>} /> */}

        {isLoggedIn ? (<>
          <Route path='/analysis' element={<Analysis/>} />
          {/* <Route path='/expenses' element={<Expenses/>} /> */}
        </>) : (
        <>
         <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </>)}
     </Routes>
     <Footer/>
    </>
   

  )
}




function App() {
  return (
    <>
      
      <AuthProvider>
        <Router>
          <Appcontent />
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
