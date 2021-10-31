import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import logo from '../../../../images/logo.webp';
import './BookingPackage.css';

const BookingPackage = () => {

    const { user } = useAuth();
    const { id } = useParams();
    const [error, setError] = useState('');

    // loading single data here 
    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        fetch(`https://calm-ravine-47843.herokuapp.com/package/${id}`)
            .then(response => response.json())
            .then(data => setSinglePackage(data))
    }, [])

    // react hook form data here  
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Package Booked!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch(error => setError('server not responding'));
        reset();
    }


    return (
        <div className="py-5">
            <Container className="border border-2 my-4 p-3 px-4">
                <Row>
                    {/* package info here  */}
                    <Col md={7} className="border rounded p-0">
                        <img className="img-fluid" src={singlePackage?.img} className="card-img-top" alt="..." />
                        <div className="py-2 px-3 text-start">
                            <div className="d-flex align-items-center justify-content-between"><h4>{singlePackage.name}</h4><small className="bg-danger text-light px-2 py-1 rounded-pill">{singlePackage.places} places</small></div>
                            <p className="mb-0">Duration: {singlePackage.duration} Day's</p>
                            <p className="mb-0">Price: {singlePackage.price}</p>
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
                    <Col md={5} className="p-2">
                        <img src={logo} alt="" />
                        <h4 className="border-bottom p-1">Book your package here!</h4>
                        <form className="booking-form mx-auto p-3" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={singlePackage.name} {...register("packageName")} />
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email")} />
                            <input placeholder="Enter number" {...register("mobile")} />
                            <input placeholder="Enter age" type="number" {...register("age", { min: 18, max: 99 })} />
                            <select {...register("gender")}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                            <select {...register("ticketType")}>
                                <option value="Select Type">Package Type</option>
                                <option value="expensive">expensive</option>
                                <option value="normal">normal</option>
                            </select>
                            <input defaultValue={singlePackage.price} {...register("price")} />
                            <input className="btn btn-danger" type="submit" />
                        </form>
                    </Col>
                </Row>
                <p className="py-2 text-danger">{error}</p>
            </Container>
        </div>
    );
};

export default BookingPackage;
