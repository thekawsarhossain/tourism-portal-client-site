import React from 'react';
import Swal from 'sweetalert2';

const AllOrder = ({ orders }) => {

    const { packageName, name, email, mobile, age, gender, ticketType, status, price, _id } = orders;

    // deleting order here 
    const handleOrder = id => {
        const proceed = window.confirm('Are you sure you want to DELETE ?');
        if (proceed) {
            fetch(`https://calm-ravine-47843.herokuapp.com/order/${id}`, {
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

    // update status handler here 
    const handleStatus = id => {
        fetch(`https://calm-ravine-47843.herokuapp.com/orders${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount) {
                    Swal.fire({
                        title: 'Order Approved!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    window.location.reload();
                }
            })

    }

    return (
        <tr>
            <td>{packageName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{ticketType}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td className="text-center">
                <button onClick={() => handleOrder(_id)} className="border-0 text-danger border"><i className="fas fa-trash-alt"></i></button>
            </td>
            <td className="text-center">
                {status === 'approved' ? <i class="text-danger fas fa-bookmark"></i> : <button onClick={() => handleStatus(_id)} className="border-0 text-danger border"><i className="fas fa-clipboard-check"></i></button>}
            </td>
            {!orders && <td>No Order found !</td>}
        </tr>
    );
};

export default AllOrder;