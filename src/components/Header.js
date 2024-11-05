import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../icons/logo.png'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="logo">
                </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#about">О нас</Nav.Link>
                    <Nav.Link href="#services">Услуги</Nav.Link>
                    <Nav.Link href="#contact">Контакты</Nav.Link> */}
                    {/* <h1>Система управления устройствами умного дома</h1> */}
                    <Navbar.Text className="ml-auto">
                    Система управления устройствами умного дома
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;