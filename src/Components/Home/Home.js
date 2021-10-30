import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import MoreInfo from './MoreInfo/MoreInfo';
import Packages from './Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner />
            <Packages />
            <MoreInfo />
            <About />
        </div>
    );
};

export default Home;