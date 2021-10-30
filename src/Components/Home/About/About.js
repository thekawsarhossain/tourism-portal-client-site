import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about_img from '../../../images/memory.jpg';

const About = () => {
    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col md={6}>
                        <img className="img-thumbnail shadow" src={about_img} alt="" />
                    </Col>
                    <Col md={6} className="py-2">
                        <h6 className="text-danger fst-italic text-end">About us</h6>
                        <h2 className="text-end">Make Your Tour Memorable <br /> and Safe With Us</h2>
                        <p className="text-start">We are <span className="text-danger fw-bold">Travelo</span> Alhumdulillah we provide the first class tour services in the world wide ! Our services is an kind of packages like we go to the country where you want to go then we select some famous places and interesting places as well and we travel there! In our website you can see the current plans. That's all about us if you want to know more than you can call us , we will give you the full details about our packages. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;