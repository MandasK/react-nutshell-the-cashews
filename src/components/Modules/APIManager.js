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

    Delete(str, id){
        return fetch(`${remoteURL}${str}/${id}`, {
            method: 'DELETE'
        })
    }

}