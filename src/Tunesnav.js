import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tunesnav.css";

const Tunesnav = () => {
  return (
    <div className="navbaar">
      <Navbar bg="primary" variant="dark">
        <Container>

          {/* <Link className="nav">Navbar</Link> */}
          <Nav className="me-auto">
            <div className="mee">
            <Link className="nav" >myTunes</Link>
            <Link className="nav">Overview</Link>
            <Link className="nav">Music</Link>
            <Link className="nav">Video</Link>
            <Link className="nav">Gift Cards</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Tunesnav;
