import React from 'react'
import Home from './Home'
import {  Route, Routes } from "react-router-dom";
import Showdetails from './Showdetails';
import Modal from '../src/modal/Modal';

const Routing = () => {
  return (
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/Showsdetails/:id" element={<Showdetails/>} />


  </Routes>
  )
}

export default Routing  