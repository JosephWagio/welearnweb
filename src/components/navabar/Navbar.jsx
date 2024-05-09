import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

import Logo from '../media/WELEARN png.png';
import './Navbar.css'

export const Navbar = () => {
  const handleClose = () => {
    setToggleMenu((prev) => !prev)
  }
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className='navbar-links_container'>
        <ul className="navbar-links">
          <li className='active'><Link to="/">Home</Link></li>
          <li className='active'><a href="#service">Why Use Welearn</a></li>
          <li className='active'><a href="#howitworks">How It Works</a></li>
          <li className='active'><a href="#testimonials">Testimonials</a></li>
          <li className='active'><a href="#waitlist">Waitlist</a></li>
        </ul>          
        <div className="navbar-download">
            <button><Link>Download App</Link></button>
          </div>
        <div className="navbar-menu">
          <CgMenuLeft color='#00262F' fontSize={35} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="navbar-menu_container">
              <IoCloseCircle color='#00262F' className='container_close' fontSize={50} onClick={() => setToggleMenu(false)} />
              <div className='navbar-menu_container-links'>
                <ul className="navbar-menu-links">
                  <li><Link to="/" onClick={handleClose}>Home</Link></li>
                  <li className='active' onClick={handleClose}><a href="#service">Why Use Welearn</a></li>
                  <li className='active' onClick={handleClose}><a href="#howitworks">How It Works</a></li>
                  <li className='active' onClick={handleClose}><a href="#testimonials">Testimonials</a></li>
                  <li className='active' onClick={handleClose}><a href="#waitlist">Waitlist</a></li>
                </ul>
                <div className="navbar-menu-download">
                  <button><Link>Download App</Link></button>
                </div>            
              </div>
            </div>
          )}
        </div>          
      </div>
    </div>
  )
}

