import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import logo from '../../../../images/logo.webp';

const BookingPackage = () => {

    const { id } = useParams();

    // loading single data here 
    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        fetch(`https://calm-ravine-47843.herokuapp.com/package/${id}`)
            .then(response => response.json())
            .then(data => setSinglePackage(data))
    }, [])


    return (
        <div className="py-5">
            <img src={logo} alt="" />
            <Container className="border border-2 my-4 p-3 px-4">
                <Row>
                    {/* package info here  */}
                    <Col md={5} className="border rounded p-0">
                        <img className="img-fluid" src={singlePackage?.img} class="card-img-top" alt="..." />
                        <div className="py-2 px-3 text-start">
                            <div className="d-flex align-items-center justify-content-between"><h4>{singlePackage.name}</h4><small className="bg-danger text-light px-2 py-1 rounded-pill">{singlePackage.places} places</small></div>
                            <p className="mb-0">Duration: {singlePackage.duration} Day's</p>
                            <Rating
                                initialRating={singlePackage.review}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                className="text-warning"
                                readonly
                            /> <br />
                            <small className="text-secondary">{singlePackage.description}</small>
                        </div>
                    </Col>

                    {/* book form here  */}
                    <Col md={7}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookingPackage;
