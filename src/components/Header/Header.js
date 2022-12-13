import Nav from 'react-bootstrap/Nav';
import "../../styles/Header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <Nav className="justify-content-center" id="navbar" activeKey="/home">
            <Nav.Item>
            <Link to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="about">About</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="resume">Resume</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="projects">Projects</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="contact">Contact</Link>
            </Nav.Item>
                </Nav>
        </header>
    )
}

export default Header; 