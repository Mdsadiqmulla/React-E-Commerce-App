import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Header.css';



const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="header-navbar">
      <Container>
        <div className="header-cr">
          <h1 className="header-text">THE GENERICS</h1>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
