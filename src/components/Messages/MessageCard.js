//Responsible for generating and displaying chat messages based on database. Created by Brandon W.

import React from 'react';
//Creates message entries by passing in userId and content of message from database
const MessageCard = props => {
    let activeUserId = sessionStorage.getItem("activeUserID")

    const editMessage = () => {
        let messageToEdit = document.querySelector("#message")
        messageToEdit.value = props.messages.message    
    }
    
    return (
        <>
        <div>
            {props.messages.userId}: {props.messages.message}
        {/*checks current UserId against userId of message for displaying of edit functionality*/}
            {props.messages.userId === parseInt(activeUserId) ? <button type="button" onClick={editMessage}>Edit</button>: ""}
        </div>
        </>
    )
}

export default MessageCard