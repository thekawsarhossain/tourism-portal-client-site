import React from 'react';
import NotFound from '../../images/404.svg';

const PageNotFound = () => {
    return (
        <div className="w-50 mx-auto pt-4">
            <img className="img-fluid" src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;