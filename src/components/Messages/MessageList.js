import React, {useState, useEffect} from 'react';
import MessageCard  from '../Messages/MessageCard';
import MessageForm from '../Messages/MessageForm';
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
        <div>
            <MessageForm getMessages={getMessages} />
        </div>
        </>
    )
}

export default MessageList