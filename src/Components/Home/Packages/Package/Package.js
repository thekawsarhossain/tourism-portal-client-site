import React from 'react';
import Rating from 'react-rating';
import { Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = ({ packages }) => {

    const histroy = useHistory();
    const { img, name, places, review, description, duration, _id } = packages;

    // handle booking here 
    const handleBooking = id => {
        histroy.push(`/package/${id}`);
    }

    return (
        <Col md={6}>
            <Row className="border m-1 rounded">
                <Col className="p-0" md={6}><img className="img-fluid rounded" src={img} alt="" /></Col>
                <Col md={6} className="text-start py-1">
                    <div className="d-flex align-items-center justify-content-between"><h5>{name} </h5> <small className="bg-danger text-light p-1 rounded-pill">{places} places</small></div>
                    <p className="mb-0">Duration: {duration} day</p>
                    <small className="text-secondary">{description.slice(0, 50)}...</small>
                    <div className="mt-1 d-flex justify-content-between align-items-center">
                        <Button onClick={() => handleBooking(_id)} variant="outline-danger" size="sm">Book now</Button>
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