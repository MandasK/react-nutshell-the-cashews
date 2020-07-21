const remoteURL = 'http://localhost:8088/'

export default {
    GetAll(str){
        return fetch(`${remoteURL}${str}`)
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

  
  
  ////Events
  
  delete(id) {
    return fetch(`${remoteURL}events/${id}`, {
      method: "DELETE",
    })
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
