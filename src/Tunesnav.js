import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tunesnav.css";

const Tunesnav = () => {
  return (
    <div className="navbaar">
    <Navbar bg="" expand="lg" className="mv w-100 m-auto">
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-left">

          <div className="li">
            <Link to="/" className="any">myTunes</Link>
            <Link to="/Component" className="any">Overview</Link>
            <Link  className="any ">Music</Link>
            <Link  className="any ">Video</Link>
            <Link  className="any ">Gift Cards</Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default Tunesnav;
