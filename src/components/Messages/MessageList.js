//Responsible for managing message data, constructing new messages, and displaying them to the DOM in real time - Brandon W.
import React, {useState, useEffect} from 'react';
import MessageCard  from '../Messages/MessageCard';
import MessageForm from '../Messages/MessageForm';
import APIManager from '../../components/Modules/APIManager';
import { Card } from 'react-bootstrap';

const MessageList = (props) => {
    const [messages, setMessages] = useState([]);

    const clearInputField = () => {
        
        let inputField = document.getElementById("message")
        inputField.value = ""
    };

    
    const getMessages = () => {
        return APIManager.GetAll("messages").then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        })
    }

    const constructNewMessage = message => {
        if (message !== "") {
            APIManager.Push("messages", message)
            .then(()=> APIManager.GetAll("messages")
            .then(setMessages))
            clearInputField();
        } else {
            window.alert("Please enter a message");
        }
    };
    
    useEffect(() => {
        getMessages();
    }, []);
    
    return (
        <>
        <Card className="messageContainer">
            
            <Card.Text className="MessageInputs">
            {messages.map(message =>
                <MessageCard
                    key={message.id}
                    messages={message}
                    {...props}
                    />
            )}
            <MessageForm getMessages={getMessages} constructMessage={constructNewMessage} />
            </Card.Text>
            
        </Card>
        </>
    )
}

export default MessageList