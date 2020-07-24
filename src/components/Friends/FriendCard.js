import React from "react"
import {Card, Button, Row, Image } from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import "./FriendCard.css"


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
        <Card className="FriendCardContainer">
            <Card.Body className="FriendCardBody">
            <Row>
            <Card.Text className="friendCardText">
            {props.friend.user.userName}
            </Card.Text>
            <Image className="angelImage" src={require("../images/Brendaangel.PNG")} roundedCircle />
            <Button
              className = "delete-friend-btn"
              variant= "custom"
              id={props.friend.id}
              onClick={handleFriendDelete}
              
              type="submit"
            >
              X
            </Button>
            </Row>
            </Card.Body>
        </Card>

        


        </>

    )
}

export {FriendCard}