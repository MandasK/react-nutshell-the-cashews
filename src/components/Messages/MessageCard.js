import React from 'react';

const MessageCard = props => {
    return (
        <div>
            {props.messages.userId}: {props.messages.message}
        </div>
    )
}

export default MessageCard