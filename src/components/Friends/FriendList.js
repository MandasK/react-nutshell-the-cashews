import React, { useState, useEffect } from 'react';
import APIManager from "../Modules/APIManager"
import {Button, Modal} from "react-bootstrap"
import {FriendCard} from "./FriendCard"

const HandleFriendModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Body>
          <Button onClick={props.onHide}>Close</Button>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  function NewFriend() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add new Friend
        </Button>
  
        <HandleFriendModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
const FriendsList = props => {
    const [friends, setFriends] = useState([])

   
    const friendUpdate = () => {
        APIManager.GetUsersFriends("friends")
        .then((response) => {
            console.log(response)
            setFriends(response)
        })}

    useEffect(() => {
       friendUpdate()
        }, [])

   

    
    return (
    <div className="friend-container">
        <h2>Friend's List</h2>
        <NewFriend />

    <div className="friend-card-container">
        {friends.map(friend => 
            <FriendCard friend={friend} setFriends={friendUpdate}{...props} />
        )}

    </div>
    </div>
    )
}
export default FriendsList