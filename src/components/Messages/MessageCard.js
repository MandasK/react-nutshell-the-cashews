import React from 'react';

const MessageCard = props => {
    const activeUserId = sessionStorage.getItem("activeUser")
    
    if (props.messages.userId === activeUserId.userId) {
    return (
        <>
        <div>
            {props.messages.userId}: {props.messages.message}
        </div>
        <button
          type="button"
         >Edit</button>
        </>
    )
        } else {
        return (
            <div>
                {props.messages.userId}: {props.messages.message}
            </div>
        )
    }
}

export default MessageCard