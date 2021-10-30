import React from 'react';
import logo from '../../images/logo.webp';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    const { user } = useAuth();

    return (
        <div className="custom-navbar">
            <Navbar bg="light" expand="lg" className="shadow shadow">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink activeStyle={{ color: "#dc3545" }} className="px-2 text-decoration-none text-dark fw-bold" to="/home">Home</NavLink>

                            <NavLink activeStyle={{ color: "#dc3545" }} className="px-2 text-decoration-none text-dark fw-bold" to="/packages">Packages</NavLink>

                            <NavLink activeStyle={{ color: "#dc3545" }} className="px-2 text-decoration-none text-dark fw-bold" to="/about">About</NavLink>
                        </Nav>
                        {/* authentication buttons here  */}
                        <div>
                            {
                                !user?.email ? <Link to="/login"><Button variant="outline-danger" className="mx-2">Login</Button></Link> : <div className="d-flex justify-content-center align-items-center">
                                    <small className="p-1 text-secondary text-uppercase fst-italic fw-bold">{user.displayName}</small>
                                    <img className="w-25 rounded-circle p-2" src={user.photoURL} alt="" />
                                </div>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;