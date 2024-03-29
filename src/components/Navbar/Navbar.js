import React from 'react';
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import './Navbar.css';

const cookies = new Cookies();

export default class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    logout() {
        cookies.remove('_s');
        window.location.reload();
        window.location.href = '/login';
    }
    
    render() {
        return (
            <Navbar id="navbar-menu" fixed="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">DK Fries</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                                <Dropdown.Header id="dropdown-header">
                                    <Row>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                    </Row>
                                    <Row>
                                        <p>Admin</p>
                                    </Row>
                                </Dropdown.Header>
                                <Dropdown.Divider></Dropdown.Divider>
                                <Dropdown.Item onClick={() => this.logout() } >
                                    Cerrar Sesion
                                </Dropdown.Item>
                                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}