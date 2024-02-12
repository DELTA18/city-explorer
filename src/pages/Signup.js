import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, } from 'react-router-dom'; 
import '../styles/signup.css';

const localIPAddress = window.location.hostname;

function isOnlyDigits(phone) {
  for (let i = 0; i < phone.length; i++) {
     var ascii = phone.charCodeAt(i);
     if (ascii < 48 || ascii > 57) {
      //  alert('hello')
       return false;
     }
  }
  return true;
}

export const Signup = () => {

  const history = useNavigate()
  const [name, setusername] = useState("")
  const [password, setpassword] = useState()
  const [phone, setphone] = useState()
  const [email, setemail] = useState()


  async function submit(e) {
    
    e.preventDefault();
    try {
    await axios.post(`http://${localIPAddress}:8000/signup`, {
      email,phone, name, password
    })
    .then(res => { 
      console.log(password.length)
         if(name == '')
         {
          alert('please Enter your name')
         }
         else if(res.data === "exists")
         {
           alert('username already exists!')
         }
         else if(!isOnlyDigits(phone))
         {
            alert('Phone number is not valid')
         }
          else if(res.data === 'notexists' && password.length < 5)
          {
           alert('password should be minimum of 5 characters')
         }
         else if(res.data==='notexists' && password.length >= 5)
         {
          history('/home', {state:{id:name}})
         }
      })
      .catch(e => {
        alert('Wrong Details')
        console.log(e)
      })


    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='swrapper'>
      <div className="signin">
        {' '}
        <h1>
          SignUp
        </h1>
        <form action='POST'>
          {' '}
          <div className="email stemp">
            <p className="stxt">
              Email:
            </p>
            <input type="text" onChange={(e) => {setemail(e.target.value )}} />
            {' '}
          </div>
          {' '}
          <div className="phone stemp">
            <p className="stxt">
              Phone no:
            </p>
            <input type="tel" onChange={(e) => {setphone(e.target.value )}}/>
            {' '}
          </div>
          {' '}
          <div className="username stemp">
            <p className="stxt">
              Username:
            </p>
            <input type="text" onChange={(e) => {setusername(e.target.value )}}/>
            {' '}
          </div>
          {' '}
          <div className="password stemp">
            <p className="stxt">
              Password:
            </p>
            <input type="text" onChange={(e) => {setpassword(e.target.value )}}/>
            {' '}
          </div>
          <button type='submit' onClick={submit} className="button">
            Submit
          </button>
          <div className="directlogin">
            {' '}
            <li className="logindirect">
              <p>
                If u have an account!
              </p>
              <a href="/">
                Log-in
              </a>
              {' '}
            </li>
            {' '}
          </div>
        </form>
      </div>
    </div>
  )
}

