import React, { useState } from 'react';
import APIManager from "../Modules/APIManager";
import "./Event.css";

const EventForm = props => {
    const [event, setEvent] = useState({ userId: 0, event: "" })


    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event !== "") {
            APIManager.Push("events", event)
        
        } else {
            window.alert("Please enter an Event");
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div>
                        <input type="text"
                            required onChange={handleFieldChange}
                            id="event"
                            placeholder="Enter an Event" />
                        <div>
                            <button type="button" onClick={constructNewEvent}>
                                POST</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    

    )
}


export default EventForm