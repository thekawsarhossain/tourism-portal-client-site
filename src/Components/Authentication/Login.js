import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.webp';
import profile from '../../images/profile.svg';
import icon from '../../images/google.png';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { googleSignIn, error } = useAuth();

    return (
        <Container className="my-5">
            <img src={logo} alt="" />
            <div className="py-4 my-4 border border-2 w-50 mx-auto d-flex flex-column align-items-center">
                <img className="w-25 mb-3" src={profile} alt="" />
                <button onClick={googleSignIn} className="bg-white border mb-3 py-2 rounded-pill"> <img className="img-fluid" src={icon} alt="" /> <span className="px-5">continue with google</span> </button>
                <small className="py-2 text-danger">{error}</small>
            </div>
        </Container>
    );
};

export default Login;