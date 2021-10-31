import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddPackages = () => {

    // react hook form data here  
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Package Added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        reset();
    }

    return (
        <div>
            <Container className="my-5">
                <h2>Add a New package here !</h2>
                <form className="booking-form mx-auto px-4 py-2 w-75" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter img Link" {...register("img")} />
                    <input placeholder="Enter Package name" {...register("name")} />
                    <input placeholder="Enter total places" {...register("places")} />
                    <input placeholder="Enter ratings" {...register("review")} />
                    <input placeholder="Enter duration" {...register("duration")} />
                    <input placeholder="Enter price" {...register("price")} />
                    <input placeholder="Enter description" {...register("description")} />


                    <input className="btn btn-danger" type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddPackages;