import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Product from './components/product';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/nav';


function App() {


  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
