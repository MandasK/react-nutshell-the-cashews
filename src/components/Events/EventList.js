import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager";
import EventCard from "../Events/EventCard";
import "./Event.css";
import EventForm from "../Events/EventForm";


const EventList = (props) => {
  // The initial state is an empty array
  const [events, setEvents] = useState([]);

  const getEvent = () => {
    // After the data comes back from the API, we
    //  use the setEvents function to update state
    return APIManager.GetAll("events").then((eventFromAPI) => {
      setEvents(eventFromAPI);
    });
  };
  const deleteEvent = (id) => {
    APIManager.delete(id).then(() =>
      APIManager.GetAll("event").then(setEvents)
    );
  };

  // got the events from the API on the component's first render
  useEffect(() => {
    getEvent();
  }, []);

  // Finally we use map() to "loop over" the events array to show a list of animal cards
  return (
    <div className="container-eventCards">
      {/* //add this button above your display of animal cards */}
      <section className="section-eventContent">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/events/new");
          }}
        >
          Add Event
        </button>
      </section>
      {events.map((event) => (
        <EventCard
          key={event.id}
          locations={event}
          deleteLocation={deleteEvent}
          {...props}
        />
      ))}
    </div>
  );
};
export default EventList;
