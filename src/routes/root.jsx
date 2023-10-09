import {Outlet} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../images/library-64.png"

export default function Root() {
    return (
        <>
            <Navbar style={{background: "lightgray"}}>
                <Nav>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} width={40} />
                        </Navbar.Brand>
                    </LinkContainer>
                    <NavDropdown title="Books" id="basic-nav-dropdown">
                        <LinkContainer to="/books">
                            <NavDropdown.Item>List Books</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/books/create">
                            <NavDropdown.Item>New Book</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <div id="detail"><Outlet/></div>
        </>
    );
}