import React from 'react'
import { ProductCards } from './ProductCards'
import "./ProductList.css"

function ProductList() {
  return (


    <div className='productlist'>
        
        
        
       {
        ProductCards.map((items)=>(<div>
            <img src={items.pro} alt=''/>
            <h2>{items.text}</h2>
            <button>Place your Order</button>

        </div>))
       }

    </div>
  )
}

export default ProductList