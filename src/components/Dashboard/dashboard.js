import React from 'react';
import MessageList from '../../components/Messages/MessageList';
import MessageForm from '../../components/Messages/MessageForm';
import { Row, Col, Container } from "react-bootstrap";
import "./dashboard.css"


const Dashboard = props => {
    return (
        // User info and Navbar inside this Row
        <Container fluid className="dashboardContainer">
        <Row className="userAndNavRow">
            {/* User info in this Col */}
            <Col md={2} className="userCol">
                Current User
            </Col>
            {/* Navbar in this Col */}
            <Col className="navbarCol">
                Navbar
            </Col>
        </Row>
        {/* // Friends list and changeable dashboard in this Row */}
        <Row className="friendsAndDashboardRow">
            {/* Firends List in thie Col */}
            <Col md={2} className="friendsCol">
                friends list
            </Col>
            {/* Changeable dashboard in this  Col */}
            <Col className="dashboardCol">
                <MessageList />
            </Col>
        </Row>
        </Container>
    )
}

export default Dashboard