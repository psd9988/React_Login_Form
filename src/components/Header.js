import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{textDecoration:"none", color:"grey"}} to={"/"}>Registration</NavLink>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header