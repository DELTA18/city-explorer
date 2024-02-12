import React from 'react'
import '../styles/homepage_main_img.css'


const Homepage_main_img = () => {
    const mainimg = process.env.PUBLIC_URL + '/mainimg.jpg';
  return (
    <div>
        <div className="container">
        <div className="mainimg" style={{backgroundImage: `url(${mainimg})`}}>Discover explore repete</div>
    </div>
    </div>
  )
}

export default Homepage_main_img