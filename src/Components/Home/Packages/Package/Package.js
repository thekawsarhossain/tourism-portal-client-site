import React from 'react';
import Rating from 'react-rating';
import { Col, Row, Button } from 'react-bootstrap';

const Package = ({ packages }) => {

    const { img, name, places, review, description, duration } = packages;

    return (
        <Col md={6}>
            <Row className="border m-1 rounded">
                <Col className="p-0" md={6}><img className="img-fluid rounded" src={img} alt="" /></Col>
                <Col md={6} className="text-start py-1">
                    <h5>{name} </h5>
                    <div className="d-flex align-items-center justify-content-between"><p className="mb-0">Duration: {duration}</p> <small className="bg-danger text-light p-1 rounded-pill">{places} places</small></div>
                    {/* <h6 className="mb-0">Places: {places}</h6> */}
                    <small className="text-secondary">{description.slice(0, 50)}...</small>
                    <div className="mt-1 d-flex justify-content-between align-items-center">
                        <Button variant="outline-danger" size="sm">Book now</Button>
                        <Rating
                            initialRating={review}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            className="text-warning"
                            readonly
                        />
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default Package;