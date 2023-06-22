import React from 'react'
import Home from './Home'
import {  Route, Routes } from "react-router-dom";
import Showdetails from './Showdetails';
import Modal from '../src/modal/Modal';
import MoviesPage from './pages/MoviesPage';
import NowPlaying from './pages/Now-playing';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import LoginPage from './pages/Loginpage';

const Routing = () => {
// /movies huda moviespage ma ja 


  return (
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/Showsdetails/:id" element={<Showdetails/>} />
    <Route  path="/movies/now-playing" element={<NowPlaying/>} />
    <Route  path="/popular" element={<Popular/>} />
    <Route  path="/movies/upcoming" element={<Upcoming/>} />

    <Route path="/movies"  element={<MoviesPage/>} />
    <Route  path="/login" element={<LoginPage/>} />




  </Routes>
  )
}

export default Routing  