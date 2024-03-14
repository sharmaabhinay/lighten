import React from 'react';
import Navbar from './pages/Navbar';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About/About';
import Hero from './pages/Hero';
import Product from './pages/About/Product';
import Blog from './pages/About/Blog';
import Contact from './pages/About/Contact'

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='About' element={<About/>}/>
        <Route path='Product' element={<Product />}/>
        <Route path='Blog' element={<Blog />}/>
        <Route path='Contact' element={<Contact />}/>
      </Routes>     
    </>
  );
};

export default App;
