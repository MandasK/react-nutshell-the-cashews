import React, {useState} from "react"
import {Card, Button, Container, Row} from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import FriendsList from "./FriendList"
import "./NewFriendCard.css"


const NewFriendCard = props => {
    const [newFriend, setNewFriend] = useState({userId: 0, activeUserId: parseInt(sessionStorage.activeUserID), })
    let update = props.friendUpdate
    const handleFriendAdd = (evt) => {
        newFriend.userId = parseInt(evt.target.id)
        APIManager.Push("friends", newFriend).then(() => {
            APIManager.GetAll("users").then((response) => props.setFriends(response)).then(() => {
                APIManager.GetUsersFriends("friends").then((response) => props.setNewFriends(response)).then(() => props.setFilterFriends([]))
                .then(() => update()).then(() => props.clear).then(() => props.newFriends)
                
            })
        })
    }
   
    if(sessionStorage.activeUserID != props.friend.userName){

    
    return (
        <>
        <Container className="newfriendcontainer">
            <Row>
            <p className="new-freind-text">{props.friend.userName}</p>
            <Button
              className = "add-friend-btn"
              variant= "custom"
              id={props.friend.id}
              onChange = "disabled"
              onClick={handleFriendAdd}
              
              type="submit"
            >
              Add
            </Button>
            </Row>
        </Container>
        
        


        </>

    )
    }else {
        return (
            <>
            <Card>
            <Card.Text>    
                {props.friend.userName}
            </Card.Text>    
            </Card>
            
            
    
    
            </>
    
        )
    }
}

export {NewFriendCard}