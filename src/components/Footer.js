import React from 'react'
import '../styles/footer.css';

const footer = () => {
  return (
    <footer>
  <div className="foot">
    <div className="lfoot">
      <div className="lfu">
        <img
          alt=""
          height="180px"
          src="/photos/c-removebg-preview.png"
        />
      </div>
    </div>
    <div className="rfoot">
      <div className="1 ftemp">
        <h3>
          Destination
        </h3>
      </div>
      <div className="2 ftemp">
        <h3>
          Food and Dine
        </h3>
      </div>
      <div className="3 ftemp">
        <h3>
          Things to do
        </h3>
      </div>
      <div className="4 ftemp">
        <h3>
          Our Social Handles
        </h3>
      </div>
    </div>
  </div>
  {' '}
</footer>
  )
}

export default footer