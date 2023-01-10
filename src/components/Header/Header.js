import Nav from "react-bootstrap/Nav";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import resume from "../../images/resume.pdf";
import Burger from "../Burger/Burger";
import { useState } from "react";

function Header({open, setOpen}) {
  
  return (
    <header>
      <Nav className="justify-content-center" id="navbar" activeKey="/home">
        <Burger open={open} setOpen={setOpen}/>
        <Nav.Item className="navlink">
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item className="navlink">
          <Link to="about">About</Link>
        </Nav.Item>
        <Nav.Item className="navlink">
          <Link to="projects">Projects</Link>
        </Nav.Item>
        <Nav.Item className="navlink">
          <Button variant="light" className="header-button">
            <a href={resume} target="_blank" className="resume-link">
              Resume
            </a>
          </Button>
        </Nav.Item>
        {/* <Nav.Item className="navlink">
          <Link to="contact">Contact</Link>
        </Nav.Item> */}
      </Nav>
    </header>
  );
}

export default Header;
