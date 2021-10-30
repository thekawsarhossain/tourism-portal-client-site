import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bus_img from '../../../images/bus.svg';
import hotel_img from '../../../images/hotel.svg';
import guide_img from '../../../images/world.svg';

const MoreInfo = () => {
    return (
        <div className="py-5">
            <Container>
                <div className="text-start">
                    <h6 className="text-danger fst-italic">Comfortness</h6>
                    <h2 className="pb-3">We Ensure That</h2>
                </div>
                <Row>
                    <Col md={4} className="p-3">
                        <img src={bus_img} alt="" />
                        <h6>Comfortable Journey</h6>
                        <small>A journey without comfortness it's not good for our health so that we make sure that comfortness journey.</small>
                    </Col>
                    <Col md={4} className="p-3">
                        <img src={hotel_img} alt="" />
                        <h6>Luxuries Hotel</h6>
                        <small>We booked the luxuries hotel before arrived the place where we will travel , The hotel we select is one of the best hotel's.</small>
                    </Col>
                    <Col md={4} className="p-3">
                        <img src={guide_img} alt="" />
                        <h6>Travel Guide</h6>
                        <small>We also exsure that we have the world best travel guide so that they can guide the travelers and make this tour memorable </small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoreInfo;