import React, {useEffect, useState} from 'react';
import MessageList from '../../components/Messages/MessageList';
import { Row, Col, Container } from "react-bootstrap";
import "./dashboard.css"
import ArticleList from "../News/ArticleList"
import TaskList from "../tasks/TaskList"
import APIManager from "../Modules/APIManager"
import Navbar from "../Navbar/Navbar"
import FriendsList from "../Friends/FriendList"
import EventList from "../Events/EventList"

const Dashboard = props => {
    const [friends, setFriends] = useState([])
    
    const refresh = ref => {
        setFriends(ref)
    }

    const clearUser = () => {
        sessionStorage.clear();
        localStorage.clear();
        
      }
      
      if(props.messages){
        return (
            // User info and Navbar inside this Row
            <Container fluid className="dashboardContainer">
            <Row className="userAndNavRow">
                {/* User info in this Col */}
                <Col md={2} className="userCol">
                    {sessionStorage.activeUser}
                </Col>
                
                <Col className="navbarCol">
                <Navbar clearUser={clearUser} {...props} />
                </Col>
            </Row>
            {/* // Friends list and changeable dashboard in this Row */}
            <Row className="friendsAndDashboardRow">
                {/* Firends List in thie Col */}
                <Col md={2} className="friendsCol">
                    <FriendsList newFriends={refresh} {...props} />
                </Col>
                {/* Changeable dashboard in this  Col */}
                <Col>
                <Container className="dashboardCol">
                    <MessageList />
                </Container>
                
                </Col>
            </Row>
            </Container>
        )
      }else if(props.news){
        return (
            // User info and Navbar inside this Row
            <Container fluid className="dashboardContainer">
            <Row className="userAndNavRow">
                {/* User info in this Col */}
                <Col md={2} className="userCol">
                    {sessionStorage.activeUser}
                </Col>
                
                <Col className="navbarCol">
                <Navbar clearUser={clearUser} {...props} />
                </Col>
            </Row>
            {/* // Friends list and changeable dashboard in this Row */}
            <Row className="friendsAndDashboardRow">
                {/* Firends List in thie Col */}
                <Col md={2} className="friendsCol">
                    <FriendsList newFriends={refresh} {...props} />
                </Col>
                {/* Changeable dashboard in this  Col */}
                <Col>
                <Container className="dashboardCol">
                    <ArticleList />
                </Container>
                
                </Col>
            </Row>
            </Container>
        )
      }else if(props.events){
        return (
            // User info and Navbar inside this Row
            <Container fluid className="dashboardContainer">
            <Row className="userAndNavRow">
                {/* User info in this Col */}
                <Col md={2} className="userCol">
                    {sessionStorage.activeUser}
                </Col>
                
                <Col className="navbarCol">
                <Navbar clearUser={clearUser} {...props} />
                </Col>
            </Row>
            {/* // Friends list and changeable dashboard in this Row */}
            <Row className="friendsAndDashboardRow">
                {/* Firends List in thie Col */}
                <Col md={2} className="friendsCol">
                    <FriendsList newFriends={refresh} {...props} />
                </Col>
                {/* Changeable dashboard in this  Col */}
                <Col>
                <Container className="dashboardCol">
                   <EventList />
                </Container>
                
                </Col>
            </Row>
            </Container>
        )
      }else if(props.tasks){
        return (
            // User info and Navbar inside this Row
            <Container fluid className="dashboardContainer">
            <Row className="userAndNavRow">
                {/* User info in this Col */}
                <Col md={2} className="userCol">
                    {sessionStorage.activeUser}
                </Col>
                
                <Col className="navbarCol">
                <Navbar clearUser={clearUser} {...props} />
                </Col>
            </Row>
            {/* // Friends list and changeable dashboard in this Row */}
            <Row className="friendsAndDashboardRow">
                {/* Firends List in thie Col */}
                <Col md={2} className="friendsCol">
                    <FriendsList newFriends={refresh} {...props} />
                </Col>
                {/* Changeable dashboard in this  Col */}
                <Col>
                <Container className="dashboardCol">
                    <TaskList />
                </Container>
                
                </Col>
            </Row>
            </Container>
        )
      }
}

export default Dashboard