import React from 'react'
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Homepagemainimg from '../components/Homepage_main_img';

import '../styles/header.css'

export const Home = () => {
  const location = useLocation()
  const username = location.state? location.state.id : ''
  return (
    <>
    <div className='sep'>
      <Header user_name = {username} />
      <Homepagemainimg/>
      <Main/>
      
      <Footer/>
    </div>
    </>
  )
}

