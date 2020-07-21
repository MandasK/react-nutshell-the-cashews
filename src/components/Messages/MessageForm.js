//Responsible for creating 
import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import './Messages.css'

const MessageForm = props => {
    const [message, setMessage] = useState({message:"", user:sessionStorage.activeUser})
    let newMessage = props.constructMessage


    const handleFieldChange = evt => {
        const stateToChange = {...message};
        stateToChange[evt.target.id] = evt.target.value;
        stateToChange.userId = parseInt(sessionStorage.activeUserID)
        setMessage(stateToChange);
    };

    const constructNewestMessage = () => {
        newMessage(message)
    }

    

    return (
        <>
            <form>
                <fieldset>
                    <div>
                        <Form.Control
                            className="messageForm"
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="message"
                            placeholder="What's on your mind?"
                            />
                        
                        <Button 
                            className = "postMessageButton"
                            type="button"
                            onClick={constructNewestMessage}
                            variant="custom"
                        >Post</Button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default MessageForm