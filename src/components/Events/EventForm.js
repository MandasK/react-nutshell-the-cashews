import React, { useState } from 'react';
import APIManager from "../Modules/APIManager";
import "./Event.css";

const EventForm = props => {
    const [event, setEvent] = useState({ userId: 0, name: "", date: "", place: "" });


    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event !== "") {
            APIManager.Push("events", event)
            .then(() => props.history.push("/events"))
        
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
                            id="name"
                            placeholder="Enter an Name" />
                        
                        <input type="date"
                            required onChange={handleFieldChange}
                            id="date"
                            placeholder="Enter an Date" />
                    
                        <input type="text"
                            required onChange={handleFieldChange}
                            id="location"
                            placeholder="Enter an Location" />
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