import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AllOrder from './AllOrder/AllOrder';

const AllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-47843.herokuapp.com/orders')
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
                                <td>Package Name</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Ticket Type</td>
                                <td>Price</td>
                                <td>Status</td>
                                <td>Delete</td>
                                <td>Approve</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map((order) => <AllOrder
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