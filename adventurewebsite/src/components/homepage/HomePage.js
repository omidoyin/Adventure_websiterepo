import React from 'react'
import Hero from '../Hero/Hero'
import Cards from '../cardDisplay/Cards'
import Footer from '../footer/Footer'
import "./HomePage.css"

function HomePage() {
  return (
    <div className='hompage'> 
        <Hero/>
        <Cards/>
        <Footer/>
        


    </div>
  )
}

export default HomePage