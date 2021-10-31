import React, { useState } from 'react';
import logo from '../../images/logo.webp';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    const [modal, setModal] = useState(false)
    const { user, setUser, setError, logOutUser } = useAuth();

    const handleModal = (info) => {
        if (!modal) {
            setModal(true);
        }
        if (modal) {
            setModal(false);
        }
    }

    const handleLogOut = () => {
        logOutUser().then(() => { setUser({}) }).catch(error => setError(error.message))
        setModal(false);
    }

    return (
        <div className="custom-navbar">
            <Navbar bg="light" expand="lg" className="shadow shadow">
                <Container>
                    <NavLink to="/home"><img src={logo} alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="px-2 text-decoration-none text-dark fw-bold" to="/home">Home</NavLink>

                            <NavLink className="px-2 text-decoration-none text-dark fw-bold" to="/packages">Packages</NavLink>

                            <NavLink className="px-2 text-decoration-none text-dark fw-bold" to="/about">About</NavLink>
                        </Nav>
                        {/* authentication button here  */}
                        <div>
                            {
                                !user?.email ? <Link to="/login"><Button variant="outline-danger" className="mx-2">Login</Button></Link> : <button onClick={handleModal} className="border-0 bg-light custom-btn" alt="" ><img className={modal ? " border border-2 border-danger w-50 rounded-circle" : "w-50 rounded-circle"} src={user.photoURL} alt="" /></button>
                            }
                        </div>
                        {/* avatar modal */}
                        <div className={!modal ? "d-none" : "custom-modal text-start"}>
                            <small className=" mb-2 text-secondary text-uppercase fst-italic fw-bold border-bottom d-block">{user.displayName}</small>
                            <NavLink className="text-decoration-none text-dark fw-bold" to="/my-orders">My orders</NavLink> <br />
                            <NavLink className="text-decoration-none text-dark fw-bold" to="/all-orders"> Manage all order</NavLink> <br />
                            <NavLink className=" text-decoration-none text-dark fw-bold" to="/add-package">Add package</NavLink> <br />
                            <Button onClick={handleLogOut} variant="outline-danger" className="my-3">Logout</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;