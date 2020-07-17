import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Button, Alert} from "react-bootstrap";
import APIManager from '../Modules/APIManager';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ userName: "", password: "" });
    const allUsers = APIManager.GetAll("users")
    
    const handleLogin = (event) => {
        event.preventDefault();
        const userNameInputValue = document.getElementById("userName").value
        const userPassword = document.getElementById("password").value
        let userNameCheck = false
        let passwordCheck = false

        allUsers.forEach(user => {
          if (user.userName === userNameInputValue) {
            userNameCheck = true;
            if (user.password === userPassword) {
              passwordCheck = true;
              props.setUser(credentials)
              props.history.push("/Dashboard")
            } 
          } 
          if (userNameCheck === true) {
            if (passwordCheck === false) {
              return <Alert variant='danger'>
                      Password is incorrect.
                     </Alert>
            }
          } else {
            return <Alert variant='danger'>
                    Username is incorrect.
                   </Alert>
          }
        })
        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }



    return (
      <div className="loginContainer">
        <div className="loginCard">
          <picture className="loginLogo">
            <img src="" alt="imgLogo" />
          </picture>
          <h2 className="loginWelcome">Nutshell</h2>

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                id="userName"
                placeholder="Enter Username"
              />
              <Form.Text className="text-muted">
                We'll share your email with everyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button
              onClick={() => props.history.push("/Registration")}
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
}

export default Login