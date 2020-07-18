import React, { useState, useEffect }from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Button, Alert} from "react-bootstrap";
import APIManager from '../Modules/APIManager';


const Register = (props) => {
    const [credentials, setCredentials] = useState({ email: "", userName: "", password: "", confirmPassword:"" });
    const [users, setUsers] = useState([])
    useEffect(()=> {
      APIManager.GetAll("users")
      .then((response) => {
        setUsers(response)
      })
    }, [])

    const handleRegister = (event) => {
        event.preventDefault();
        const userEmailInputValue = document.getElementById("email").value
        const userNameInputValue = document.getElementById("userName").value
        const userPasswordValue = document.getElementById("password").value
        const userConfirmPasswordValue = document.getElementById("confirmedPassword").value
        let userNameCheck = true;
        let userEmailCheck = true;

        users.forEach(user => {
            if (user.email === userEmailInputValue ) {
                userEmailCheck = false;
                if (user.userName === userNameInputValue){
                    userNameCheck = false;
                } 
            }   
        })
        console.log(userEmailCheck )
        console.log(userNameCheck)
        console.log(userPasswordValue)
        console.log(userConfirmPasswordValue)
            if (userEmailCheck === true && userEmailInputValue !== "") {
                if (userNameCheck === true && userNameInputValue !== "") {
                    if (userPasswordValue === userConfirmPasswordValue && userPasswordValue !== "" ) {
                        props.setUser(credentials)
                        APIManager.Push("users", credentials)
                        props.history.push("/Dashboard")
                    } else {
                       return (
                              window.alert("Retry password")
                              )
                    }
                } else {
                   return (
                          window.alert("retry username")
                          )
                }
            } else {
               return (
                      window.alert("retry email")
                      )
            }

        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }



    return (
      <div className="registerContainer">
        <div className="registerCard">
          <picture className="registerLogo">
            <img src="" alt="imgLogo" />
          </picture>
          <h2 className="registerWelcome">Nutshell</h2>

          <Form onSubmit={handleRegister}>
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </Form.Group>
              <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="userName"
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
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="password"
                id="confirmedPassword"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button
              onClick={handleRegister}
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

export default Register