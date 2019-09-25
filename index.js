// document.getElementById('mybutton').onclick = function() {
//     alert("You've been alerted.");
// };

// document.body.onclick = function() {
//     alert("You clicked the body.");
// };

// document.getElementById('mybutton').onclick = function(event) {
//     event.stopPropagation();
//     alert("You've been alerted again!.");
// };

// function listenerAlert() {
//     alert("You were clicked with the addEventListener method.");
// };


// document.getElementById("mybutton").addEventListener("click", listenerAlert);

console.log(document.querySelector("#mybutton"));
document.querySelector("form").onSubmit = function(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    document.querySelector("#user-name").innerHTML = usernameInput.value;
    document.querySelector("#user-password").innerHTML = passwordInput.value;
    usernameInput.value = "";
    passwordInput.value = "";
};

function makeSomething(){
    const newElement = document.createElement("a");
    const text = document.createTextNode("Let Me Google That For You");
    newElement.appendChild(text);
    newElement.setAttribute("href", "http://lmgtfy.com");
    newElement.setAttribute("class", "made-link");
    document.body.appendChild(newElement);
}

function removeMadeLink(){
    const elementToRemove = document.querySelector(".made-link");
    const parentNode = elementToRemove.parentNode;
    console.log(parentNode);
    parentNode.removeChild(elementToRemove);
}

document.querySelector(".add-link").onclick = makeSomething;
document.querySelector(".remove-link").onclick = removeMadeLink;
