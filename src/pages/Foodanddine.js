
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hotelfilters from '../components/foodanddine/Hotelfilters'
import Hotelcontainer from '../components/foodanddine/Hotelcontainer'

import '../styles/foodanddine.css'
const Foodanddine = () => {
  return (
    <div className='hotel-wrapper'>
    <div className='hotel-80'>
    <Header></Header>
    <h1>Food and dine</h1>
    <Hotelfilters/>
    <Hotelcontainer/>
    <Footer/>
    </div>
    </div>
  )
}

export default Foodanddine