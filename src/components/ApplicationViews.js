import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Registration from './auth/registration';
import Login from './auth/login';
import EventList from "../components/Events/EventList";
import EventForm from "../components/Events/EventForm"
// import APIManager from "../components/Modules/APIManager"
import ArticleList from './News/ArticleList'

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

    return (
      <>
        {/* Login */}
        <Route
          exact
          path="/"
          render={(props) => {
            return <Login setUser={setUser} {...props} />;
          }}
        />
        {/* Registration */}
        <Route
          path="/Registration"
          render={(props) => {
            return <Registration setUser={setUser} {...props} />;
          }}
        />
        {/* Dashboard */}
        <Route
          exact
          path="/Dashboard"
          render={(props) => {
            if (hasUser) {
              return <Dashboard {...props} />;
            } else {
              return <Redirect exact to="/" />;
            }
          }}
        />

        {/* Events */}
        <Route
          exact
          path="/events"
          render={(props) => {
            return <EventList {...props} />;
          }}
        />
        <Route path="/events/new"
          render={(props) => {
            return <EventForm {...props} />;
          }}
        />
      </>
    );
}

export default ApplicationViews