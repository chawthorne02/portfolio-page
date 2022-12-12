import Nav from 'react-bootstrap/Nav';
import "../../styles/Header.css";


function Header() {
    return (
        <header>
            <Nav className="justify-content-center" id="navbar" activeKey="/home">
            <Nav.Item>
            Home
            </Nav.Item>
            <Nav.Item>
            About
            </Nav.Item>
            <Nav.Item>
            Resume
            </Nav.Item>
            <Nav.Item>
            Projects
            </Nav.Item>
            <Nav.Item>
            Contacts
            </Nav.Item>
                </Nav>
        </header>
    )
}

export default Header; 