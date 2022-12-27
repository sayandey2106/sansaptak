import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './Header.css'

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]



export default function Header() {
  return (
    <Navbar bg=""sticky  expand="lg" className='bg-purple-500'>
    <Container>
      <Navbar.Brand href="#home" className='font-bold text-white text-2xl d-flex'>
      <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='20'
              width="55"
              alt=''
              loading='lazy'
              className='me-2'
            /><h1>React-Bootstrap</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        <Nav className="ms-auto ">
          <Nav.Link href="#home" className='text-white text-lg me-2'>Home</Nav.Link>
          <Nav.Link href="#link" className='text-white text-lg me-2'>Link</Nav.Link>
          <Nav.Link href="#link" className='text-white text-lg me-2'>Link</Nav.Link>
          <Nav.Link href="#link" className='text-white text-lg me-2'>Link</Nav.Link>
     
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
