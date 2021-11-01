import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <div className="spinner-border text-danger my-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
            }
        >
        </Route>
    );
};

export default PrivateRoute;