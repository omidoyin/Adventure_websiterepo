import React from 'react'
import './Services.css'
import ServiceList from './serviceList/ServiceList'
import Shero from './Shero/Shero'

function Services() {
  return (
    <div className='service'>
      <Shero/>
      <ServiceList/>
      </div>
  )
}

export default Services