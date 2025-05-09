// -------1----
    const greeting = document.getElementById("greeting");
    greeting.textContent = "Bye";
// ------2----
    const message = document.getElementById("message");
    const button = document.getElementById("clickMe");
    button.addEventListener("click", ()=> {
        message.textContent = "რა გაცინებს შე გაჭირვებულო"
    });

// -----3-----

const input = document.getElementById("nameInput");
const button1 = document.getElementById("showName");
const outPut = document.getElementById("outPut");

button1.addEventListener("click", ()=> {
    const name = input.value;
    outPut.textContent = `Hi, ${name}!`;
})

// -----4----
const p = document.createElement("p");
p.textContent = "Lorem ipsum";
document.body.appendChild(p);

//----5----

const button2 = document.getElementById("toggleColor");
const box = document.getElementById("box");

button2.addEventListener("click", ()=> {
    box.classList.toggle("active");
})






















