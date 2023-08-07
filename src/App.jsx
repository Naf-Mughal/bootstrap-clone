/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import useScript from './components/Hooks/UseScript'
import { register } from 'swiper/element/bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  register();
  return (
      <Router>
          <Routes >
              <Route path={'/'} element={<Layout/>}>
                <Route path={"/"} element={<Home/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App