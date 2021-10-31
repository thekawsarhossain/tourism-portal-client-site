import Swal from "sweetalert2";

const Order = ({ orders }) => {

    const { packageName, name, email, mobile, age, gender, ticketType, price, status, _id } = orders;

    const handleOrder = id => {
        const proceed = window.confirm('Are you sure you want to DELETE ?');
        if (proceed) {
            fetch(`https://calm-ravine-47843.herokuapp.com/order/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
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
            <td>{packageName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{ticketType}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td className="text-center"><button onClick={() => handleOrder(_id)} className="border-0 text-danger"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default Order;