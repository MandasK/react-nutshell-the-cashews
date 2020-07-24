import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, NavLink, } from "react-router-dom";
import { Image } from "react-bootstrap"; 
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
        <Image className="logoNavbarLeft" src={require("../images/logo2.png")} />
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
              <Image className="logoNavbar" src={require("../images/logo1.png")} />
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);