import React from "react";
import { Card, Container, Button,Row } from "react-bootstrap";
// import { Link } from "react-router-dom";


import "./Event.css";


const EventCard = (props) => {
  return (
    <Container className={`section__itemCard event--${props.locations.id}`}>
      <div className="div__card__event">
        <Card className="Eventcard">
          <Card.Body className="card-Content">
            {/* <picture>
              <img
                src={require("https://i.imgur.com/mNfn5An.jpg")}
                alt="Nashville"
              />
            </picture> */}

            <div
              className={`header__itemCard header__itemCard--${props.locations.id}`}
            ></div>
            <Card.Title>
              <strong>Name:</strong> {props.locations.name}
            </Card.Title>
            <Card.Text>
              <strong>Date:</strong> {props.locations.date}
              <br />
              <strong>Location:</strong> {props.locations.place}
            </Card.Text>
          </Card.Body>
          <div>
        <Button
          className="eventDeleteButton"
          type="button"
          variant="custom"
          onClick={() => props.deleteEvent(props.locations.id)}
        >
          Remove
        </Button>
        <Button
          className="eventEditButton"
          type="button"
          variant="custom"
          onClick={() => props.editEvent(props.locations.id)}
        >
          Edit
        </Button>
        </div>
        </Card>
      </div>
    </Container>
  );
};

export default EventCard;