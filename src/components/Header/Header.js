import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

// bg-gradient-to-r from-purple-500 to-blue-700

export default function Header() {

  // useEffect(() => {
  //   sessionStorage.setItem('isHome',true)
  // }, [])
  return (
    
    <Navbar sticky  expand="lg" className='bg-white sticky-top filter drop-shadow-md md:drop-shadow-xl '>
    <Container>
      <Navbar.Brand href="#home" className='font-bold text-white text-2xl d-flex'>
      <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='20'
              width="55"
              alt=''
              loading='lazy'
              className='me-2 '
            /><h1
            class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-800 to-blue-800 mx-4" 
          >
            SANSAPTAK
          </h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        <Nav className="ms-auto ">
        
          <NavLink to="/"  className={({ isActive }) => (isActive ? 'active text-black text-xl me-4' : 'inactive text-black text-xl me-4')}>  Home</NavLink>
         
          <NavLink to="/courses"  className={({ isActive }) => (isActive ? 'active text-black text-xl me-4' : 'inactive text-black text-xl me-4')}>  Courses</NavLink>
          <NavLink to="/login"  className={({ isActive }) => (isActive ? 'active text-black text-xl me-4' : 'inactive text-black text-xl me-4')}>Login</NavLink>
          <NavLink to="/contact"  className={({ isActive }) => (isActive ? 'active text-black text-xl me-4' : 'inactive text-black text-xl me-4')} >Contact Us</NavLink>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
