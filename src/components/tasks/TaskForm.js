import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const TaskForm = props => {
    const [task, setTask] = useState({userId: parseInt(sessionStorage.activeUserID), task:"", date:"", user: sessionStorage.activeUser})
     let taskMoney=props.contructTask

     const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange)
    } 

    const ConstructTasksArticle = () => {
        taskMoney(task)
    }

    return (
        <Form className="taskFormContainer">
        <Row className="taskFormRow">
            <Col className="taskFormCol">
          <Form.Group className="taskFormGrp" controlId="task">
            <Form.Label className="taskFormLbl">Task</Form.Label>
            <Form.Control
                      className="taskFormCtl"
                      onChange={handleFieldChange} 
                      type="text" 
                      placeholder="Enter task" />
          </Form.Group>
          </Col>
          <Col className="taskFormCol">
          <Form.Group className="taskFormGrp" controlId="date">
            <Form.Label className="taskFormLbl">Date to Complete</Form.Label>
            <Form.Control
                    className="taskFormCtl"
                    onChange={handleFieldChange} 
                    type="date" 
                    placeholder="Select Date to Complete" />
          </Form.Group>
          </Col>
          </Row>
          <Button 
                    className="taskFormButton" 
                    variant="custom" 
                    onClick={ConstructTasksArticle}
                    type="submit"
          >
            Submit
          </Button>
        </Form>
    )
}

export default TaskForm