// 1. Event Listeners
// JavaScript offers three ways to add an Event Listener to a DOM element.
// i. Inline event listeners
// ii. onevent listeners
//iii. addEventListener()
function greeting(){
    console.log("Inline event listener")
};

let greetBtnEl = document.getElementById("greetBtn");
greetBtnEl.onclick = function(){
    console.log("onevent listeners");
};

let greetButtonEl = document.getElementById("greetButton");
greetButtonEl.addEventListener("click", function(){
    console.log("addEventListener")
});



// 2. Keyboard Events
// Keyboard Event is the user interaction with the keyboard.
// The keyboard events are
// 1. keydown event
// The keydown event occurs when a key on the keyboard is pressed.
// Syntax: element.addEventListener("keydown", function);
let inputEl1 = document.createElement("input");
function keydownPressed(){
    console.log("Key Pressed");
}
inputEl1.addEventListener("keydown", keydownPressed);
document.body.appendChild(inputEl1);

// 2. keyup event 
// The keyup event occurs when a key on the keyboard is released.
// Syntax: element.addEventListener("keyup", function);
let inputEl2 = document.createElement("input");
function keyupPressed(){
    console.log("Key released");
}
inputEl2.addEventListener("keyup", keyupPressed);
document.body.appendChild(inputEl2);



// 3 Event Object
// Whenever an event happens, the browser creates an event object.
// It consists of information about the event that has happened.
// It consists of many properties and methods.
// 1. type
// 2. target
// 3. key
// 4. timeStamp
// 5. stopPropagation, and many more.
let inputEl = document.createElement("input");

function printKeydown(event) {
  console.log(event.type);  // keydown
  console.log(event.target);  // <input></input>
  console.log(event.key); // value of the key pressed by the user.
  console.log(event.timeStamp); // 4992.899999976158
}
inputEl.addEventListener("keydown", printKeydown);
document.body.appendChild(inputEl);
