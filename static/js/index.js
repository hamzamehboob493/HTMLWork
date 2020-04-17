// Add your code to this file

function resetForm(){
    document.getElementById("login-form").reset();
}

var Users = [
    {
        user: "Hamza",
        password: "123"
    },
    {
        user: "Samad",
        password: "hello"
    },
    {
        user: "usman",
        password: "oye"
    }
];

var users;
var pass;

function validateUser(){
    users = document.getElementById("user").value;
    pass = document.getElementById("password").value;

    for(var i = 0; i < Users.length; i++){
        if(users == Users[i].user && pass == Users[i].password){
            alert("Welcome");
            var node = document.createElement("h1");
            var text = document.createTextNode("Welcome to my site " + users);
            node.appendChild(text);
            document.getElementById("welcome-msg").appendChild(node);
            $("#login-modal").hide();
            return;
        }
    }
    alert("User is invalid");
    return;
}


// 1. On scroll, change the class of top navbar from "bg-transparent" to "bg-dark".

var navbar = document.getElementById("navigation");
window.onscroll = function changeClass(){
    navbar.className = "navbar navbar-expand-sm bg-dark";
}

// 2. On SignIn, change the button text from "SignIn" to the <username> added to the modal.