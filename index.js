document.addEventListener("DOMContentLoaded", function(){
    let leftForm = document.getElementsByClassName("left")[0];
    let rightForm = document.getElementsByClassName("right")[0];
    let hideForm = leftForm.getElementsByClassName("center")[0];
    let gear = document.getElementsByClassName("bottom")[0];
    let links = document.getElementsByClassName("content");
    let emailInput = document.getElementById("email");
    let avatar = document.getElementsByClassName("img-wrapper")[0].querySelector("img");

    emailInput.addEventListener("change", function(event) {
        isEmailValid(event);
    });

    hideForm.addEventListener("click", function() {
       leftForm.style.display = "none";
       rightForm.style.width = "100%";
    })
    avatar.addEventListener("click", showLogout);

    gear.addEventListener("click", function() {
        leftForm.style.display = "block";
        rightForm.style.width = "80%";
     })

     for(let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            changeColor(event);
        })
     }
    
    getUserName();
})

function isEmailValid(event) {
    let validIcon = document.getElementById("valid-icon");
    let inValidIcon = document.getElementById("invalid-icon");
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
        event.target.style.border = "1px solid black";
        validIcon.style.display = "block";
        inValidIcon.style.display = "none";
        
    }else{
        event.target.style.border = "1px solid red";
        event.target.style.backgroundImage = "https://img.freepik.com/free-icon/x-button_318-391115.jpg";
        validIcon.style.display = "none";
        inValidIcon.style.display = "block";
    }
 }

 function getUserName() {
    const name = localStorage.getItem("name");
    document.getElementById("username").innerHTML = name;
}

function handleSubmit(e) {
    e.preventDefault();
    let inputs = document.querySelector("form").getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === "") {
            inputs[i].style.border = "1px solid red";
        }else{
            inputs[i].style.border = "1px solid black";
        }
    }
 }

 function changeColor(event) {
    setDefaultColor();
    event.currentTarget.getElementsByTagName("span")[0].style.color = "red";

 }

 function setDefaultColor() {
    for(let i = 0; i < links.length ; i++) {
        links[i].getElementsByTagName("span")[0].style.color = "black";
    }
 }

 function showLogout(e) {
    const show = e.target.parentElement.getElementsByClassName("logout")[0];
    show.addEventListener("click", goToHome);
    let isShow = show.style.display;
    if(isShow === "none") {
        show.style.display = "block"
    }else{
        show.style.display = "none";
    }
 }
 function goToHome() {
    localStorage.removeItem("name");
    window.location.assign("login.html");
 }