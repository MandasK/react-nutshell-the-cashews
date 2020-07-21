import React from "react"
import {Card, Button} from "react-bootstrap"
import APIManager from "../Modules/APIManager"


const FriendCard = props => {

    const handleFriendDelete = (evt) => {
        APIManager.Delete("friends", evt.target.id).then(() => {
            APIManager.GetUsersFriends("friends", sessionStorage.activeUserID)
        })
        .then((response) => {
            props.setFriends(response)
        })

        
    }

    return (
        <>
        <Card>
            <h3>{props.friend.user.userName}</h3>
            <Button
              className = "delete-friend-btn"
              variant= "custom"
              id={props.friend.id}
              onClick={handleFriendDelete}
              
              type="submit"
            >
              X
            </Button>
        </Card>

        


        </>

    )
}

export {FriendCard}