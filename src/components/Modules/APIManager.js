const remoteURL = 'http://localhost:8088/'

export default {
  GetAll(str) {
    return fetch(`${remoteURL}${str}`).then((res) => res.json());
  },

  Push(str, obj) {
    return fetch(`${remoteURL}${str}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    },
  
  
  ////Events
  
  delete(id) {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
};