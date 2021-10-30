import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from './Package/Package';

const Packages = () => {

    // react hooks here 
    const [packages, setPackages] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://calm-ravine-47843.herokuapp.com/packages')
            .then(response => response.json())
            .then(data => {
                setPackages(data)
                setLoad(true);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <Container className="py-4">
                <h6 className="text-danger fst-italic">Pacific Provide Places</h6>
                <h2>Select Your Destination</h2>

                {/* spinner here  */}
                <div className={!load ? "spinner-border text-danger mt-5" : " d-none"} mt-5 role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

                <Row className="gy-4 gx-4 my-3">
                    {
                        packages.map(item => <Package
                            key={item._id}
                            packages={item}
                        ></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;