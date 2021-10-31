import React, { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.webp';
import profile from '../../images/profile.svg';
import icon from '../../images/google.png';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { googleSignIn, error, setUser, setError } = useAuth();
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const histroy = useHistory();
    const url = location.state?.from || '/home';
    console.log(url)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                setError('');
                histroy.push(url);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    return (
        <Container className="my-5">
            <img src={logo} alt="" />
            <div className="py-4 my-4 border border-2 w-75 mx-auto d-flex flex-column align-items-center">
                <img className="w-25 mb-3" src={profile} alt="" />
                <button onClick={handleGoogleSignIn} className="bg-white border mb-3 py-2 rounded-pill"> <img className="img-fluid" src={icon} alt="" /> <span className="px-5 md:px-0">continue with google</span> </button>
                <small className="py-2 text-danger">{error}</small>
            </div>
        </Container>
    );
};

export default Login;