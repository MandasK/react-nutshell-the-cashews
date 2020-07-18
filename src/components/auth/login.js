import React, { useState, useEffect } from "react";
import APIManager from '../Modules/APIManager';
import { Card, Form, Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import "./login.css"

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
              return (
                      window.alert("Password is incorrect")
                      )
            }
          } else {
            return (
                    <>
                    window.alert("username is incorrect")
                    </>
                    )
          }
        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }



    return (
      <div className="loginContainer">
        <Card style={{ width: '60rem' }}>
          <Card.Body>
          <Card.Img 
          className="loginLogo" 
          src={require("../images/Brendaangel.PNG")} 
          alt="imgLogo"
          style={{ width: '20rem' }} />
          <br></br>
          <Card.Img 
          className="loginLogo" 
          src={require("../images/logo2.png")} 
          alt="imgLogo"
          style={{ width: '20rem' }} />
            
          
         <Card.Title className="loginWelcome"> 
         Welcome to Nutshell
         </Card.Title>
         <Card.Subtitle>
           Your life in a Nutshell.
         </Card.Subtitle>

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
            <Button 
            className = "loginButton"
            variant="custom" 
            type="submit">
              Login
            </Button>
            <Button
              className = "registerButton"
              variant= "custom"
              onClick={() => props.history.push("/Registration")}
              
              type="submit"
            >
              Register
            </Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Login