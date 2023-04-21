import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='outro'>
            <h2>Just some texts</h2>
            <p>you can unsubscribe at any time</p>
            <form>
                <input placeholder='your email'/>
                <input type='submit' value='Subscribe'/>
            </form>

        </div>
        <div className='contacts'>
            <div className='item'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>

            </div>

            <div className='item'>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
                
            </div>

            <div className='item'>
            <h2>Videos</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
                
            </div>

            <div className='item'>
            <h2>Social Media</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
                
            </div>

            
        </div>

        <div className='social'>
            
        </div>
        

    </div>
  )
}

export default Footer