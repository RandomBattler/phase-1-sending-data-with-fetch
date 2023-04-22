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
      console.log(object.id);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
}
