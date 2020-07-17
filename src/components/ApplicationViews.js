import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Registration from './auth/registration';
import Login from './auth/login';

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser
    console.log("hasUser", hasUser)

    return (
        <>
        {/* Login */}
            <Route 
                exact
                path="/"
                render={props => {
                    return <Login setUser={setUser} {...props} />;
                }}
            />
        {/* Registration */}
            <Route
                path="/Registration"
                render={props => {
                    return <Registration setUser={setUser} {...props} />;
                }}
            />
        {/* Dashboard */}
            <Route
                exact
                path="/Dashboard"
                render={props => {
                    if(hasUser){
                       return <Dashboard {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
        </>
    )
}

export default ApplicationViews