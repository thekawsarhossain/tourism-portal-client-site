import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from './Package/Package';

const Packages = () => {

    // react hooks here 
    const [packages, setPackages] = useState([]);
    console.log(packages)
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(response => response.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <Container className="py-5">
                <h6 className="text-danger fst-italic">Pacific Provide Places</h6>
                <h2>Select Your Destination</h2>
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