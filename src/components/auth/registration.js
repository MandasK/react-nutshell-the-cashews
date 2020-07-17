import React, { useState }from "react";
import { Route, Redirect } from "react-router-dom";
import { Form,Button} from "react-bootstrap";


const Register = (props) => {
    const [credentials, setCredentials] = useState({ email: "", userName: "", password: "", confirmPassword:"" });
    
    const handleRegister = (event) => {
        event.preventDefault();
        props.setUser(credentials)
        APIManager.PushNewUser(credentials)
        props.history.push("/Dashboard")
        
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

export default register