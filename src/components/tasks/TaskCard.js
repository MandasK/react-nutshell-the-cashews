import React from 'react';
import { Container, Card, Form, Button  } from "react-bootstrap";


const TaskCard = props => {
    return(
        <Container className="taskCardContainer">
        <Card className="taskCard">
        <Card.Body className="taskCardBody">
          <Card.Title className="taskTitle">Task: {props.task.task}</Card.Title>
          <Card.Text className="taskDate">
            Due by: {props.task.date}    
          </Card.Text>
          <Form.Check className="taskCheck" type="checkbox" onClick={() => props.deleteTask(props.task.id)} label="Mark Complete" />
          <br></br>
        </Card.Body>
        <Card.Footer>
        <Button className="taskDeleteButton" variant="custom" onClick={() => props.deleteTask(props.task.id)}>Remove</Button>
        </Card.Footer>
        
      </Card>  
        </Container>  
    )
}

export default TaskCard