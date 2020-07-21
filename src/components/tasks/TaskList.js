import React, { useState, useEffect } from 'react';
import { Container, Row} from 'react-bootstrap';
import APIManager from "../Modules/APIManager";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const TaskList = props => {
    const [tasks, setTasks] = useState([]);
    const [thing, setTask] = useState({userId: parseInt(sessionStorage.activeUserID), task: "", date: "", user: sessionStorage.activeUser});

    const getTasks = () => {
        return APIManager.GetAll("tasks").then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    };

    const deleteTask = id => {
        APIManager.Delete("Tasks", id)
        .then(() => APIManager.GetAll("tasks").then(setTasks))
    };

    const clearInputs = () => {
        document.getElementById("task").value= ""
        document.getElementById("date").value= ""
    }

    const ConstructNewTask = thing => {
        if(thing.task === "") {
            alert("Please complete all fields.")
        } else {
            APIManager.PostTasks(thing)
            .then(() => APIManager.GetAll("tasks").then(setTask));
            clearInputs();
        }
    }

    useEffect(() => {
        getTasks()
    }, [])
    return (
        <Container className="taskListContainer">
            {/* Changeable dashboard in this  Col */}
            <Row className="taskdashboard">
                <TaskForm
                ConstructNewTask={ConstructNewTask} />
                
            </Row>
            <Row className="dashboardTaskCard">
               {tasks.map(thing => <TaskCard
               key={thing.id}
               thing={thing}
               deleteTask={deleteTask}
               
               {...props} />)}
               
            </Row>
            </Container>
    )
}

export default TaskList