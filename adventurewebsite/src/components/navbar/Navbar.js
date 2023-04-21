import React from 'react'
import "./Navbar.css"
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {HiOutlineMenu} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa'; 
import {BsFillSignpostSplitFill} from 'react-icons/bs';
import {BsFillHouseFill} from 'react-icons/bs';
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
            <div onClick={()=>{navigate("/")}} className='logo' > <span>AB</span> <BsFillSignpostSplitFill /><span>ours</span></div>
            <ul className='navmenudisplay'>
                <button onClick={()=>{navigate("/")}}>Home</button>
                <button onClick={()=>{navigate("/services")}}>Services</button>
                <button onClick={()=>{navigate("/products")}}>Product</button>
            </ul>
            <button onClick={()=>{setSignUpClicked(!signupClicked)}} className='btn' ref={signuprefclick}>Sign Up</button>

            <div onClick={()=>{setHamclicked(!hamClicked)}} className='hamburger' ref={refclick} >
                {hamClicked? <FaRegTimesCircle className='icon'/> : <HiOutlineMenuAlt4 className='icon'/>}
            </div>
            
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
                    <FaRegTimesCircle className='icon' onClick={()=>{setSignUpClicked(!signupClicked)}}/>
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