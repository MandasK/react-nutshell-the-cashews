const remoteURL = 'http://localhost:8088/'

let friendQuery = ``

export default {
    GetAll(str){
       
        return fetch(`${remoteURL}${str}`)
        .then(res=>res.json())
    },
    GetAllSort(str){
       console.log(friendQuery)
        return fetch(`${remoteURL}${str}${friendQuery}`)
        .then(res=>res.json())
    },
    Get(str, id){
        return fetch(`${remoteURL}${str}/${id}`)
        .then(res=>res.json())
    },

    GetUsersFriends(str){
        return fetch(`${remoteURL}${str}?activeUserId=${sessionStorage.activeUserID}&_expand=user`)
        .then(res=>res.json())
    },
    GetAllFriends(str){
        return fetch(`${remoteURL}${str}?_expand=user`)
        .then(res=>res.json())
    },

    Get(str,id) {
        return fetch(`${remoteURL}${str}/${id}`)
        .then(res => res.json())
    },

    Push(str, obj){
        return fetch(`${remoteURL}${str}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    Update(str, id, data){
        return fetch(`${remoteURL}${str}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    Delete(str, id){
        return fetch(`${remoteURL}${str}/${id}`, {
            method: 'DELETE'
        })
    },

    SortingbyFriend(friendArray){

         
        console.log(friendArray)
        
        let sortString = ""
        sortString += `?`
       
        for(let friend of friendArray){
            sortString += `userId=${friend.userId}&`
        }
        sortString += `userId=${sessionStorage.activeUserID}`
        console.log(sortString)
        friendQuery = sortString
    },
  
  ////Events

  delete(id) {
    return fetch(`${remoteURL}events/${id}`, {
      method: "DELETE",
    });
  },
  edit(id) {
    return fetch(`${remoteURL}events/${id}`, {
      method: "EDIT",
    });
  },
  PostTasks(obj) {
      return fetch(`http://localhost:8088/tasks/`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })

  }
};
