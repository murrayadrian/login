async function getUser(username, password) {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password
        })
      });
    const data = response.json();
    return data;
}

async function fetchData(username,password) {
    const data = await getUser(username, password);
    if(data.firstName != undefined) {
        goToHome(data.firstName)
    }else{
        console.log("err");
    }
}

function handleSubmit(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    fetchData(username, password)
}

function goToHome(name){
    localStorage.setItem("name", name);
    window.location.assign(`index.html?name=${name}`);
}

window.onload = function() {
    const name = localStorage.getItem("name");
    if(name != null) {
        goToHome(name);
    }
}