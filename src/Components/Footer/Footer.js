import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp';

const Footer = () => {
    return (
        <div className="bg-light shadow-lg mt-5">
            <Container className="py-4 text-start">
                <Row>
                    <Col md={4}>
                        <img src={logo} alt="" />
                        <p className="text-start my-2">We are <span className="text-danger fw-bold">Travelo</span> Alhumdulillah we provide the first class tour services in the world wide ! Our services is an kind of packages like ...</p>
                        <Link to="/about"><Button variant="outline-danger">Readmore</Button></Link>
                    </Col>
                    <Col md={3} className="py-2">
                        <h4>Address</h4>
                        <small>Sharail, Brahmanbaria, Bangladesh</small>
                        <p className="m-0">+088 01900000</p>
                        <p>travelo@gmail.com</p>
                    </Col>
                    <Col md={5} className="p-2">
                        <h4>Have a Questions?</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Your email" />
                            <button class="btn btn-outline-danger" type="button">SEND</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;