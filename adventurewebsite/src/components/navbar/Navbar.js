import React from 'react'
import "./Navbar.css"
import {BrowserRouter as Router, Link, useNavigate} from "react-router-dom";
import { useEffect, useState, useRef } from 'react';


function Navbar() {
    let navigate = useNavigate();
    const [hamClicked, setHamclicked] =useState(false);
    const [signupClicked, setSignUpClicked] =useState(false);

    useEffect(()=>{document.addEventListener("click", handleClickOutside, true)}, [])

    const refclick = useRef(null)
    const handleClickOutside =(e) => {
        if(!refclick.current.contains(e.target)){
            setHamclicked(false)
        }
    }

    useEffect(()=>{document.addEventListener("click", handleSignupClickOutside, true)}, [])

    const signuprefclick = useRef(null)
    const signuprefclick2 = useRef(null)
    const handleSignupClickOutside =(e) => {
        if(!signuprefclick.current.contains(e.target) && !signuprefclick2.current.contains(e.target) ){
            setSignUpClicked(false)
          
        }
    }
    
    





  return (
    <div className='navbar'> 

        <div className='bar'>
            <h2 onClick={()=>{navigate("/")}}>Logo and Title</h2>
            <ul className='navmenudisplay'>
                <button onClick={()=>{navigate("/")}}>Home</button>
                <button onClick={()=>{navigate("/services")}}>Services</button>
                <button onClick={()=>{navigate("/products")}}>Product</button>
            </ul>
            <button onClick={()=>{setSignUpClicked(!signupClicked)}} className='btn' ref={signuprefclick}>Sign Up</button>

            <h2 onClick={()=>{setHamclicked(!hamClicked)}} className='hamburger' ref={refclick} >
                Logo
            </h2>
            
            <ul className={hamClicked?'navmenuvertical':'navmenuverticaloff'}>
                {/* <li>Home</li>
                <li>Services</li>
                <li>Products</li> */}
                <button onClick={()=>{navigate("/")}}>Home</button>
                <button onClick={()=>{navigate("/services")}}>Services</button>
                <button onClick={()=>{navigate("/products")}}>Product</button>
                <button onClick={()=>{setSignUpClicked(!signupClicked)}}>Sign Up</button>
            </ul>
            <div className={signupClicked?'formcontainer': "formcontaineroff"}>
                <form  className='signup' ref={signuprefclick2}>
                    <h2>Logo and Title</h2>
                    <input type='text' placeholder='username'/>
                    <input type='text' placeholder= "email"/>
                    <input type='text' placeholder="password"/>
                    <input type='submit' value="SignUp" />
                </form>
             </div>

            
        </div>

       


        <div >
           

        </div>
       
      


    </div>
    
  )
}

export default Navbar