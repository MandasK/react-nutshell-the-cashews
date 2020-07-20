import React, {useState, useEffect} from 'react';
import MessageCard  from '../Messages/MessageCard';
import APIManager from '../../components/Modules/APIManager';

const MessageList = (props) => {
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        return APIManager.GetAll("messages").then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
        <div>
            {messages.map(message =>
                <MessageCard
                    key={message.id}
                    messages={message}
                    {...props}
                    />
            )}
        </div>
        </>
    )
}

export default MessageList