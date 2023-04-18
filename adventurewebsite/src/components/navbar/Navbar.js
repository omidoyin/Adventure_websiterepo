import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div className='navbar'> 

        <div className='bar'>
            <h2>Logo and Title</h2>
            <ul className='navmenudisplay'>
                <button>Home</button>
                <button>Services</button>
                <button>Product</button>
            </ul>
            <button className='btn'>Sign Up</button>

            <h2 className='hamburger'>
                Logo
            </h2>
            
            <ul className='navmenuvertical'>
                {/* <li>Home</li>
                <li>Services</li>
                <li>Products</li> */}
                <button>Home</button>
                <button>Services</button>
                <button>Product</button>
                <button>Sign Up</button>
            </ul>
        </div>

       


        <div >
           

        </div>
       
      


    </div>
    
  )
}

export default Navbar