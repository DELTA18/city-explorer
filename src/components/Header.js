import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import logo from '../../public/c-removebg-preview.png'
import '../styles/header.css';

const Header = (props) => {
  const history = useNavigate()
  const logo = process.env.PUBLIC_URL + '/c-removebg-preview.png';
  const [name] = useState(props.user_name)
    // setname(props.user_name)
    const handleclick = () => {
      history('/home')
    }
  return (
    <header>
  <nav>
    <ul>
      <div className="img" onClick={handleclick}>
        <img
          width="60px"
          alt="logo"
          height="60px"
          src= {logo}
        />
      </div>
      <div className="navs">
        <li className="nav">
          <a href="/destinations">
            <p>
              Destination
            </p>
          </a>
        </li>
        <li className="nav">
          <a href="/foodanddining">
            <p>
              Food&dine
            </p>
          </a>
        </li>
        <li className="nav">
          <a href="/stay">
            <p>
              Stay
            </p>
          </a>
        </li>
        <div className="acclogo">
        <p>hello {name} </p>
          <span className="material-symbols-outlined">
            account_circle
          </span>
        </div>
      </div>
    </ul>
  </nav>
  {' '}
</header>
  )
}

export default Header