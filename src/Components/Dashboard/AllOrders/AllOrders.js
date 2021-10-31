import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AllOrder from './AllOrder/AllOrder';

const AllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div>
            <Container className="my-4 text-start">
                <h4 className="py-2">Here is all orders !</h4>
                <div>
                    <Table striped bordered hover responsive="md">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Ticket Type</td>
                                <td>Price</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(order => <AllOrder
                                    key={order._id}
                                    orders={order}
                                ></AllOrder>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default AllOrders;