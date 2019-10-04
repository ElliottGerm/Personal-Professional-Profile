//Validates the email field
function validateForm() {
    var x = document.forms["myForm"]["email"].value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {

        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

//SENDING FORM DATA

// Create the iFrame used to send our data
var iframe = document.createElement("iframe");
iframe.name = "myTarget";

// Next, attach the iFrame to the main document
window.addEventListener("load", function() {
    iframe.style.display = "none";
    document.body.appendChild(iframe);
});

// This is the function used to actually send the data
// It takes one parameter, which is an object populated with key/value pairs.
function sendData(data) {
    var name,
        form = document.createElement("form"),
        node = document.createElement("input");

    // Define what happens when the response loads
    iframe.addEventListener("load", function() {
        alert("Yeah! Data sent.");
    });

    form.action = "http://www.cs.tut.fi/cgi-bin/run/~jkorpela/echo.cgi";
    form.target = iframe.name;

    for (name in data) {
        node.name = name;
        node.value = data[name].toString();
        form.appendChild(node.cloneNode());
    }

    // To be sent, the form needs to be attached to the main document.
    form.style.display = "none";
    document.body.appendChild(form);

    form.submit();

    // Once the form is sent, remove it.
    document.body.removeChild(form);
}

//CREATE CSS CLASS 
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cssClass { color: #008000; }';
document.getElementsByTagName('head')[0].appendChild(style);

//ADD CSS CLASS TO HTML ELEMENT
function addClass() {
    var v = document.getElementById("addClass");
    v.className += 'cssClass';
}

//REMOVES A CLASS
function removeClass() {
    var v = document.getElementById("remove");
    v.classList.remove("name-heading")
}

//TARGETS THE PROFILE PICTURE
//CHANGES DISPLAY TO NONE
function disappear() {
    var v = document.getElementById("formal-pic");
    console.log(v)
    v.style.display = "none";
}

//TARGETS THE PROFILE PICTURE
//CHANGES DISPLAY TO INLINE
function reappear() {
    var v = document.getElementById("formal-pic");
    console.log(v)
    v.style.display = "inline";
}

//Triggered when "Go Away" or "Come Back" button is clicked
//Changes the text of the button and calls disapear/reapear
function change() {
    'use strict';

    var el = document.querySelector('[class="change-text"]');
    if (el.innerHTML === "Come Back") {
        el.innerHTML = "Go Away";
        reapear();
    } else {
        el.innerHTML = "Come Back";
        disapear();
    }
}