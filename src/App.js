import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Store from './components/Pages/Store';
import Cart from './components/Pages/Cart';
import Header from './components/Header';
import Footer from './components/Pages/Footer';

const App = () => {
  return (
    <Router>
      
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/store">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Cart></Cart>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
        <Header></Header>
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />


        </Routes>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
