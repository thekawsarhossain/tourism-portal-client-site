import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from './Order/Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-ravine-47843.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])

    // logged in users data here 
    const loggedInUserData = orders.filter(order => order.email === user.email);
    console.log(loggedInUserData)

    return (
        <Container className="my-4 text-start">
            <h4 className="py-2"><span className="text-uppercase fst-italic text-danger">{user.displayName}</span> Here is your order summury</h4>
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
                            loggedInUserData.map(userData => <Order
                                key={userData._id}
                                orders={userData}
                            ></Order>)
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MyOrders;