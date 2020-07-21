import React, {useState} from "react"
import {Card, Button} from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import FriendsList from "./FriendList"


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
        <Card>
            <h3 className="new-freind-text">{props.friend.userName}</h3>
            <Button
              className = "add-friend-btn"
              variant= "custom"
              id={props.friend.id}
              onChange = "disabled"
              onClick={handleFriendAdd}
              
              type="submit"
            >
              Add Friend
            </Button>
        </Card>
        
        


        </>

    )
    }else {
        return (
            <>
            <Card>
                <h3>{props.friend.userName}</h3>
                
            </Card>
            
            
    
    
            </>
    
        )
    }
}

export {NewFriendCard}