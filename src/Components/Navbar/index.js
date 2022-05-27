import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/' style={{color:'violet', fontSize:25}}>
         Makarand's Portfolio Webpage
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle style={{color:'white'}}>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Me
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/contact' activeStyle>
        Contact Me
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;