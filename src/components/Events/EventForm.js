import React, { useState } from 'react';
import APIManager from "../Modules/APIManager";
import "../Events/Event.css";
import { Form, Col, Button, Row } from 'react-bootstrap';

const EventForm = props => {
    const [place, setEvent] = useState({ userId: parseInt(sessionStorage.activeUserID) , name: "", date: "", place: "" });
    let newVariable = props.placeConstruct


    const handleFieldChange = evt => {
        const stateToChange = { ...place };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewestEvent = () => {
        newVariable(place)
    }


    return (
        <>
            <Form>
                <Row className="EventRow">
                    <Col>
                    <Form.Group className="eventFormGrp" controlId="name">
                        <Form.Label className="eventformLbl">Event</Form.Label>
                        <Form.Control
                            className="articleFormCtl"
                            type="text"
                            required onChange={handleFieldChange}
                            placeholder="Enter a Name" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="eventFormGrp" controlId="date">
                        <Form.Label className="eventformLbl">Date</Form.Label>
                        <Form.Control
                            className="articleformLbl"
                            type="date"
                            required onChange={handleFieldChange}
                            placeholder="Enter a Date" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="eventFormGrp" controlId="place">
                        <Form.Label className="eventformLbl">Location</Form.Label>
                        <Form.Control
                            className="articleformLbl"
                            type="text"
                            required onChange={handleFieldChange}
                            placeholder="Enter a Location" />
                        </Form.Group>
                        </Col>
                            <Button
                            className="EventSubmitButton"
                            variant="custom"
                             id ="eventButton" 
                             type="submit" 
                             onClick={constructNewestEvent}>
                                Submit
                            </Button>
                        </Row>
                    </Form>
                
        </>
    

    )
}


export default EventForm