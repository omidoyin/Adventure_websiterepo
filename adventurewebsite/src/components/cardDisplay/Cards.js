import React from 'react'
import "./Cards.css"
import { CardStore } from './CardStore'


function Cards() {
  return (
    <div className='cards'>
       
        {
            CardStore.map((items,index)=> (<div className='flexcard'>
                <div className='images'>
                  <img  src={items.image} alt=""  />
                  <h2>Cool Stuffs </h2>
                </div>  
                <div className='details'>
                    <p>{items.text}</p>
                    <p>Explore the earth and her beauty</p>
                    <button>Book a visit</button>

                </div>
                
                 </div> ))
        }
    
    
    </div>
  )
}

export default Cards