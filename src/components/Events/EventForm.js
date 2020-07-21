import React, { useState } from 'react';
import APIManager from "../Modules/APIManager";
import "../Events/Event.css";

const EventForm = props => {
    const [place, setEvent] = useState({ userId: 0, name: "", date: "", place: "" });
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
                            id="place"
                            placeholder="Enter an Location" />
                        <div>
                            <button class ="eventButton" type="button" onClick={constructNewestEvent}>
                                POST</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    

    )
}


export default EventForm