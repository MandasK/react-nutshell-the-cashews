import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  
  const handleLogout = () => {
    props.clearUser();
    ;
  }
  return (
    <header>
      <nav className="navBar">
        <ul className="container">
          <li>
            <NavLink className="nav-link" exact to="/Dashboard" disabled activeStyle={{

              color: "#e37d64"
            }}>
              Dashboard
            </NavLink>
          </li>
          <li>
          
            <NavLink className="nav-link" to="/News" disabled activeStyle={{
              
              color: "#e37d64"
            }}>
              News
            </NavLink>
          </li>
        
          <li>
              <NavLink className="nav-link" to="/Tasks" disabled activeStyle={{
              
              color: "#e37d64"
            }}>
                  Tasks
              </NavLink></li>
            <li>
              <NavLink className="nav-link" to="/Events" disabled activeStyle={{
              
              color: "#e37d64"
            }}>
                  Events
              </NavLink></li>
             
              
             
                <li>
                <NavLink className="nav-link" exact to= "/" onClick={handleLogout}> Logout </NavLink>
              </li>
             
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);