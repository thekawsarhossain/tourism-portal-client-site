import React from 'react';
import Swal from 'sweetalert2';

const AllOrder = ({ orders }) => {

    const { name, email, mobile, age, gender, ticketType, price, _id } = orders;

    // deleting order here 
    const handleOrder = id => {
        const proceed = window.confirm('Are you sure you want to DELETE ?');
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: 'Order Deleted!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{ticketType}</td>
            <td>{price}</td>
            <td className="text-center"><button onClick={() => handleOrder(_id)} className="border-0 text-danger"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default AllOrder;