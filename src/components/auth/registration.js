import React, { useState }from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Button, Alert} from "react-bootstrap";
import APIManager from '../Modules/APIManager';


const Register = (props) => {
    const [credentials, setCredentials] = useState({ email: "", userName: "", password: "", confirmPassword:"" });
    const allUsers = APIManager.GetAll("users")

    const handleRegister = (event) => {
        event.preventDefault();
        const userEmailInputValue = document.getElementById("email").value
        const userNameInputValue = document.getElementById("userName").value
        const userPasswordValue = document.getElementById("password").value
        const userConfirmPasswordValue = document.getElementById("confirmedPassword").value
        let userNameCheck = true;
        let userEmailCheck = true;

        allUsers.forEach(user => {
            if (user.email === userEmailInputValue) {
                userEmailCheck = false;
                if (user.userName === userNameInputValue){
                    userNameCheck = false;
                } 
            }   
        })
            if (userEmailCheck === true) {
                if (userNameCheck === true) {
                    if (userPasswordValue === userConfirmPasswordValue) {
                        props.setUser(credentials)
                        APIManager.Push("users", credentials)
                        props.history.push("/Dashboard")
                    } else {
                       return <Alert variant='danger'>
                                Passwords do not match.
                              </Alert>
                    }
                } else {
                   return <Alert variant='danger'>
                            Username already in use, please make a new selection.
                          </Alert>
                }
            } else {
               return <Alert variant='danger'>
                        Email already in use, please make a new selection.
                      </Alert>
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </Form.Group>
              <Form.Group controlId="formBasicUsername">
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="password"
                id="confirmPassword"
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