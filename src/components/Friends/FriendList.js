import React, { useState, useEffect } from 'react';
import APIManager from "../Modules/APIManager"
import {HandleFriendModal, NewFriend} from "./FriendModal"
import {FriendCard} from "./FriendCard"
import "../Dashboard/dashboard.css"





const FriendsList = props => {
    const [friends, setFriends] = useState([])

   
    const friendUpdate = () => {
        APIManager.GetUsersFriends("friends")
        .then((response) => {
            console.log(response)
            setFriends(response)
            props.newFriends(response)
        })}

    useEffect(() => {
       friendUpdate()
        }, [])

   

    
    return (
    <div className="friend-container">
        <h2>Friend's List</h2>
        <NewFriend friendUpdate={friendUpdate} newFriends={props.newFriends} />

    <div className="friend-card-container">
        {friends.map(friend => 
            <FriendCard friend={friend} setFriends={friendUpdate}{...props} />
        )}

    </div>
    </div>
    )
}
export default FriendsList