import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="custom-bg py-5">
            <Container className="text-start py-5">
                <h4 className=" fst-italic">Welcome to <span className="text-danger fw-bold">Travelo</span></h4>
                <h1 className="display-5 fw-bold text-light pb-3">Discover Your Favorite <br /> Place with Us</h1>
                <Button variant="danger" className="fw-bold px-4">Book now</Button>
            </Container>
        </div >
    );
};

export default Banner;