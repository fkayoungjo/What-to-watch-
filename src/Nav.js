import React from 'react';
import { NavLink } from "react-router-dom";
import image from './image.png'

const NavBar = (props) => {
  return (
    <div className="header">
    <ul className="navbar">
    <img src={image} className='image' alt="logo" width="120" height="67.5"/> <img src="https://fontmeme.com/permalink/190415/f34618951ab0075d9527e31357413ac7.png" className='title' height="67.5" alt="title logo"/>
      <NavLink to="/">
        <li className="navitem">Home</li>
      </NavLink>
      <NavLink to="/login">
        <li className="navitem">Log In</li>
      </NavLink>
      <NavLink to="/signup" >
        <li className="navitem">Sign Up</li>
      </NavLink>
      <NavLink to="/profile" >
        <li className="navitem">Profile</li>
      </NavLink>
      <NavLink to="/search" >
        <li className="navitem">Search</li>
      </NavLink>
      <NavLink to="/trending" >
        <li className="navitem">Trending</li>
      </NavLink>
    </ul>
    </div>
  );
};

export default NavBar;
