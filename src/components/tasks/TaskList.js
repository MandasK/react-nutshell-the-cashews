import React, { useState, useEffect } from 'react';
import { Container, Row} from 'react-bootstrap';
import APIManager from "../Modules/APIManager";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({userId: parseInt(sessionStorage.activeUserID), task: "", date: Date, user: sessionStorage.activeUser})
    const getTasks = () => {
        return APIManager.GetAll("tasks").then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    }

    const deleteTask = id => {
        APIManager.Delete("tasks", id)
        .then(() => APIManager.GetAll("tasks").then(setTasks))
    }

    const clearInputs = () => {
        document.getElementById("task").value= ""
        document.getElementById("date").value= ""
    }

    const ConstructNewTask = task => {
        if (task.task === "" || task.date === "") {
            alert("Please complete all fields.")
        } else {
            APIManager.Push("tasks", task)
            .then(() => APIManager.GetAll("tasks").then(setTask))
            clearInputs();
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <Container className="taskListContainer">
            <Row className="taskdashboard">
                <TaskForm
                constructTask={ConstructNewTask} />
                
            </Row>
            <Row className="dashboardTaskCard">
               {tasks.map(task => <TaskCard
               key={task.id}
               task={task}
               deleteTask={deleteTask}
               
               {...props} />)}
               
            </Row>
            </Container>
    )
}

export default TaskList