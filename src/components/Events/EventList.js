import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager";
import EventCard from "../Events/EventCard";
import "./Event.css";


const EventList = (props) => {
  // The initial state is an empty array
  const [places, setEvents] = useState([]);

  const getEvent = () => {
    // After the data comes back from the API, we
    //  use the setEvents function to update state
    return APIManager.GetAll("events").then((eventsFromAPI) => {
      setEvents(eventsFromAPI);
    });
  };
  const deleteEvent = (id) => {
    APIManager.delete(id).then(() =>
      APIManager.GetAll("events").then(setEvents)
    );
  };

  // got the events from the API on the component's first render
  useEffect(() => {
    getEvent();
  }, []);

  // Finally we use map() to "loop over" the events array to show a list of animal cards
  return (
    <div className="container-eventCards">
      {/* //add this button above your display of events cards */}
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
      {places.map((place) => (
        <EventCard
          key={place.id}
          locations={place}
          deleteEvent={deleteEvent}
          {...props}
        />

        
      ))}
    </div>
  );
};
export default EventList;
