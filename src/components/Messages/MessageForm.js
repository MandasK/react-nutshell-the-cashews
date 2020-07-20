import React, { useState } from 'react';
import APIManager from '../Modules/APIManager';

const MessageForm = props => {
    const [message, setMessage] = useState({userId: 0, message:""})

    const clearInputField = () => {
        let inputField = document.getElementById("message")
        inputField.value = ""
    };

    const handleFieldChange = evt => {
        const stateToChange = {...message};
        stateToChange[evt.target.id] = evt.target.value;
        stateToChange.userId = sessionStorage.activeUser.userId
        setMessage(stateToChange);
    };

    const editMessage = evt => {
        evt.preventDefault();
        console.log("editing message")
        let editedMessageInput = document.querySelector("#message").value
        APIManager.Push("messages", editedMessageInput)
    }

    const constructNewMessage = evt => {
        evt.preventDefault();
        if (message !== "") {
            APIManager.Push("messages", message)
            clearInputField();
            props.getMessages()
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
                        <div>
                            <button
                                type="button"
                                onClick={constructNewMessage}
                            >Post</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default MessageForm