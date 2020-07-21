import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "./TaskForm.css";

const TaskForm = props => {
  const [thing, setTask] = useState({userId: parseInt(sessionStorage.activeUserID), task: "", date: "", user: sessionStorage.activeUser})
  let newTaskVariable = props.ConstructNewTask;
  
  const handleFieldChange = evt => {
    const stateToChange = { ...thing };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange)
    }

  const ConstructNewestTask = () => {
      newTaskVariable(thing)
  }  

  return (
          <Form className="taskFormContainer">
              <Row className="taskFormRow">
              <Col className="taskFormCol">
              <Form.Group className="taskFormGrp" controlId="task">
              <Form.Label className="TaskFormLbl">New Task</Form.Label>
              <Form.Control
                        className="taskFormCtl"
                        onChange={handleFieldChange} 
                        type="text" 
                        placeholder="Enter New Task" />
              </Form.Group>
              </Col>
              <Col className="taskFormCol">
              <Form.Group className="taskFormGrp" controlId="date">
              <Form.Label className="taskFormLbl">Select Due Date</Form.Label>
              <Form.Control
                      className="taskFormCtl"
                      onChange={handleFieldChange} 
                      type="date" 
                      placeholder="Select Due Date" />
              </Form.Group>
              </Col>
              </Row>
              <Button 
                      className="taskFormButton" 
                      variant="custom" 
                      onClick={ConstructNewestTask}
                      type="submit"
              >
              Submit
              </Button>
          </Form>

)

}

export default TaskForm