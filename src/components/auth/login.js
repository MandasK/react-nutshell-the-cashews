import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Button, Alert} from "react-bootstrap";
import APIManager from '../Modules/APIManager';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ userName: "", password: "" });
    const [users, setUsers] = useState([])
    useEffect(()=> {
      APIManager.GetAll("users")
      .then((response) => {
        setUsers(response)
      })
    }, [])
    // console.log(users);
    
    const handleLogin = (event) => {
        event.preventDefault();
        const userNameInputValue = document.getElementById("userName").value
        const userPassword = document.getElementById("password").value
        let userNameCheck = false
        let passwordCheck = false

        users.forEach(user => {
          console.log("user.userName", user.userName)
          console.log("userNameInput", userNameInputValue)
          console.log("user.userPassword", user.password)
          console.log("userPassword", user)
          
          if (user.userName === userNameInputValue) {
            console.log("anything")
            userNameCheck = true;
            if (user.password === userPassword) {
              console.log("anything2")
              passwordCheck = true;
              props.setUser(credentials)
              props.history.push("/Dashboard")
            } 
          } 
        })
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
            <Form.Group>
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
            <Form.Group>
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