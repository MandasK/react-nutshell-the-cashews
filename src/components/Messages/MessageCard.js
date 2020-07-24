//Responsible for generating and displaying chat messages based on database. Created by Brandon W.

import React from 'react';
import { Button, Row, Image, Col } from "react-bootstrap";
import './Messages.css'
//Creates message entries by passing in userId and content of message from database
const MessageCard = props => {
    let activeUserId = sessionStorage.getItem("activeUserID")

    //One day...
    const editMessage = () => {
        window.alert("Feature coming soon")  
    }
    
    return (
        <>
        <input type="hidden" id="messageId" value="" />
        <Col>
        <Row>
            <Image className="angelImage" src={require("../images/Brendaangel.PNG")} roundedCircle />
            <p className="messageCardText">{props.messages.user}: {props.messages.message}</p>
        {/*checks current UserId against userId of message for displaying of edit functionality*/}
            {props.messages.userId === parseInt(activeUserId) ? <Button className = "editMessageButton" type="button" variant="custom" onClick={editMessage}>Edit</Button>: ""}
        </Row>
        </Col>
        </>
    )
}

export default MessageCard