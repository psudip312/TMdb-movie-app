import React from 'react'
import Home from './Home'
import {  Route, Routes } from "react-router-dom";
import Showdetails from './Showdetails';

const Routing = () => {
  return (
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/Showsdetails" element={<Showdetails/>} />


  </Routes>
  )
}

export default Routing