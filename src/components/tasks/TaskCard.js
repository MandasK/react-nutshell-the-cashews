import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import "./TaskCard.css"


const TaskCard = props => {
  return (

      <Container className="taskCardContainer">
      <Card className="taskCard">
      <Card.Body className="taskCardBody">
        <Card.Title className="taskTitle">{props.thing.task}</Card.Title>
        <Card.Text className="taskUserDate">
          Created by: {props.thing.user}
          <br></br>
          Due Date: {props.thing.date}
        </Card.Text>
        {props.thing.userId === parseInt(sessionStorage.activeUserId) ?
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mark Task Complete" onClick={() => props.deleteTask(props.thing.id)} />
        </Form.Group>
        : ""}
        <br></br>

        {props.thing.userId === parseInt(sessionStorage.activeUserId) ? <Button className="taskDeleteButton" variant="custom" onClick={() => props.deleteTask(props.thing.id)}>Remove</Button> : ""}
      </Card.Body>
      
    </Card>  
      </Container>
  );
  
}

export default TaskCard