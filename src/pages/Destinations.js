import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Destinationcomponent from '../components/Destination_component'
import '../styles/destination.css'
const Destinations = () => {
  return (
    <>
     <div className='sep'>
        <Header></Header>
        <h1>Destinations</h1>
        <Destinationcomponent/>
        <Footer/>
        </div>
    </>
  )
}

export default Destinations