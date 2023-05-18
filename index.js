document.addEventListener("DOMContentLoaded", function(){
    let leftForm = document.getElementsByClassName("left")[0];
    let rightForm = document.getElementsByClassName("right")[0];
    let hideForm = leftForm.getElementsByClassName("center")[0];
    let gear = document.getElementsByClassName("bottom")[0];
    let links = document.getElementsByClassName("content");
    let saveBtn = document.getElementById("saveBtn");
    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", function(event) {
        isEmailValid(event);
    });

    hideForm.addEventListener("click", function() {
       leftForm.style.display = "none";
       rightForm.style.width = "100%";
    })
    gear.addEventListener("click", function() {
        leftForm.style.display = "block";
        rightForm.style.width = "80%";
     })

     for(let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            changeColor(event);
        })
     }
     saveBtn.addEventListener("click", submitForm);

     function changeColor(event) {
        setDefaultColor();
        event.currentTarget.getElementsByTagName("span")[0].style.color = "red";

     }
     function setDefaultColor() {
        for(let i = 0; i < links.length ; i++) {
            links[i].getElementsByTagName("span")[0].style.color = "black";
        }
     }

     function submitForm() {
        let inputs = document.querySelector("form").getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === "") {
                inputs[i].style.border = "1px solid red";
            }else{
                inputs[i].style.border = "1px solid black";
            }
        }
     }
    
     function isEmailValid(event) {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            event.currentTarget.style.border = "1px solid black";
            
        }else{
            event.currentTarget.style.border = "1px solid red";
            event.currentTarget.style.backgroundImage = "https://img.freepik.com/free-icon/x-button_318-391115.jpg";
        }
     }
     function getUserName() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get("name");
        document.getElementById("username").innerHTML = name;
    }
    getUserName();
})

