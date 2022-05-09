import React from 'react'
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const NavBar = () => {
    
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Projects',
        link: '/projects'
      },
      {
        text: 'Contact Me',
        link: '/contact',
       color:'black'
        
      },
     
     
    ],
    logo: {
      text: ''
    },
    style: {
      barStyles: {
        background: 'gray'
      },
      sidebarStyles: {
        background: 'gray',
        buttonColor: 'white'
      }
    }
  }
  return (
    <div className="NavBar">
        <Navbar {...props}/>
    </div>
  )
}
  export default NavBar;