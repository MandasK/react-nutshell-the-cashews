import React, { useState } from 'react';
import APIManager from '../Modules/APIManager';

const MessageForm = props => {
    const [message, setMessage] = useState({message:""})

    const clearInputField = () => {
        let inputField = document.getElementById("message")
        inputField.value = ""
    };

    const handleFieldChange = evt => {
        const stateToChange = {...message};
        stateToChange[evt.target.id] = evt.target.value;
        stateToChange.userId = parseInt(sessionStorage.activeUserID)
        setMessage(stateToChange);
    };


    const constructNewMessage = evt => {
        evt.preventDefault();
        if (message !== "") {
            APIManager.Push("messages", message)
            props.getMessages()
            clearInputField();
        } else {
            window.alert("Please enter a message");
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="message"
                            placeholder="What's on your mind?"
                        />
                        <button
                            type="button"
                            onClick={constructNewMessage}
                        >Post</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default MessageForm