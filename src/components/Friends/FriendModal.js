import React, { useState, useEffect } from 'react';
import APIManager from "../Modules/APIManager"
import {Button, Modal, Form, FormControl} from "react-bootstrap"

import {NewFriendCard} from "./NewFriendCard"


const HandleFriendModal = (props) => {
    const [newFriend, setNewFriend] = useState([])
    const [friends, setFriends] = useState([])
    const [filterFriends, setFilterFriends] = useState([])

    const handleSearchChange = evt => {
       
        let searchEvent = evt.target.value
        searchEvent = searchEvent.toUpperCase()
        let  filteredFriends = friends.filter(friend => 
            

            friend.userName.toUpperCase().includes(searchEvent) ? true: false
            
        
        )
        let finalFilter = filteredFriends.filter(friend => {
            let filterCheck = true
            newFriend.forEach(person =>{
                
                if(friend.userName == person.user.userName){
                    filterCheck = false
                }else if(friend.userName == sessionStorage.activeUser){
                    filterCheck = false
                    
                }
               
            })
            return filterCheck
        })
        
      setFilterFriends(finalFilter)
        
    }
    const clearSearch = () => {
        document.querySelector(".mr-sm-2").value = ""
    }
    const userFriends = () => {
        APIManager.GetUsersFriends("friends").then((response) => setNewFriend(response)).then(() => {
           
        })
        
    }
    useEffect(() => { 
        APIManager.GetAll("users").then((response) => setFriends(response))
        userFriends()
    }, [])

    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="new-friends">New Friends</h4>
        <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={handleSearchChange} onClick={userFriends} />
            
        </Form>
        <div className="new-friends">
        {filterFriends.map(friend => 
        <NewFriendCard friend={friend} newFriends={props.newFriends} setFriends={setFriends} friendUpdate={props.friendUpdate} clear={clearSearch} setFilterFriends={setFilterFriends} setNewFriends={setNewFriend} {...props} />
            )}
        
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  const NewFriend = props => {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="custom" onClick={() => setModalShow(true)}>
          Add new Friend
        </Button>
  
        <HandleFriendModal
          newFriends={props.newFriends} 
          show={modalShow}
          onHide={() => setModalShow(false)}
          friendUpdate={props.friendUpdate}
        />
      </>
    );
  }
  export {HandleFriendModal, NewFriend}