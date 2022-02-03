import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import "./mynavbar.css";
import logo from "../../assets/initial-logo.png";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="nav-link" href="/">
          <img className="img fluid logoImg" src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Link className="nav-link" to="/produse">
          Produse
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className='navbar-toggle'/>
        <Navbar.Collapse id="navbarScroll">
          <Link className="nav-link" to="/desprenoi">
            Despre noi
          </Link>
          <Link className="nav-link" to="/acasa">
            Acasă
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
