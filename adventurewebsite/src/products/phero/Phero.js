import React from 'react'
import heroimage1 from "../../components/images/kiking1.PNG"
import heroimage2 from "../../components/images/hiking2.PNG"
import "./Phero.css"

function Phero() {
  return (
    <div className='phero'>
        <img className='heroimage' src={heroimage1} alt=''/>
        <div className='text'>
          <h2>Get your products</h2>
           <p> at a discounted rate</p>
        </div>
        <img className='heroimage' src={heroimage2} alt=''/>
        
         

    </div>
  )
}

export default Phero