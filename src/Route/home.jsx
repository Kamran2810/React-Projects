import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Home = () => {
       
  return (
    <>
      <nav className="flex flex-row justify-evenly p-3 mb-2 bg-black text-white">
        <Link to="/">Home</Link>
        <Link to="bmi">BMI Calculator</Link>
        <Link to="imggallery">Image Gallery</Link>
        <Link to="shopping">Shopping Cart</Link>
      </nav>
      <div className='greet'>Navigate using NAVBAR </div>
      <Outlet />
      </>
  );

};


export default Home;