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

    const messages = true;
    const news = true;
    const events = true;
    const tasks = true;

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
                render={props => {
                    if(hasUser){
                       return <Dashboard messages={messages} {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/News"
                render={props => {
                    if(hasUser){
                       return <Dashboard news={news} {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/Tasks"
                render={props => {
                    if(hasUser){
                       return <Dashboard tasks={tasks} {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
            <Route
                exact
                path="/Events"
                render={props => {
                    if(hasUser){
                       return <Dashboard events={events} {...props} />;
                    } else {
                       return <Redirect exact to="/" />
                    }
                }}
            />
        {/* Messages
            <Route
                exact
                path="/Messages"
                render={props => {
                    if(hasUser){
                        return <Messages {...props} />;
                    } else {
                        return <Redirect exact to="/" />
                     }
                }}
            /> */}
        </>
    )
}

export default ApplicationViews