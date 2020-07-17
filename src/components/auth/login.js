import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Form,Button} from "react-bootstrap";

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", userName: "", password: "" });
    
    const handleLogin = (event) => {
        event.preventDefault();
        props.setUser(credentials)
        props.history.push("/Dashboard")
        
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address/Username</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                type="email"
                placeholder="Enter Email/Username"
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