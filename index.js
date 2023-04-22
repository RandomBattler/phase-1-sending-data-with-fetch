function submitData(name_, email_){
    const configObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify({
        name: name_,
        email: email_,
        })
    }
    return fetch("http://localhost:3000/users", configObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        const d = document.createElement('div');
        document.querySelector('body').appendChild(d);
        d.innerHTML = object.id;
    })
    .catch(function (error) {
      alert("Catch this error!"); 
      const d = document.createElement('div');
      document.querySelector('body').appendChild(d);
      d.innerHTML = error.message;
    });
}
