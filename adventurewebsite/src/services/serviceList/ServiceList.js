import React from 'react'
import { ServiceCards } from './ServiceCards'
import "./ServiceList.css"

function ServiceList() {
  return (
    <div className='servicelist'>

        {
            ServiceCards.map((items)=>(<div>
                <img src={items.service} alt='' style={{width:"400px", height:"300px"}}/>
                <h2>{items.text}</h2>
                <button>Register your Service</button>
            </div>))
        }
      
    </div>
  )
}

export default ServiceList