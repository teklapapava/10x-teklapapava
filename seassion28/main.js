// // Case #1: The Hidden Message

function revealMessage(){

    const hiddenMessage = document.getElementById("hidden-message");
    const decodeMessage = document.getElementById("decoded-message");

    hiddenMessage.style.display = "block";

    const originalText = hiddenMessage.innerText;
    const reversedText = originalText.split("").reverse().join("");

    decodeMessage.innerText = reversedText;
}

//   Case #2: Classified Files

window.onload = function() {
    const elements = document.getElementsByClassName("classified")

for(let el of elements){
    const level = el.dataset.security;

    if(level === "high"){
        el.style.backgroundColor = "red";
    }else if(level == "medium"){
        el.style.backgroundColor = "yellow";
    }else if(level === "low"){
        el.style.backgroundColor = "green";
    }

    el.addEventListener("click", () => {
        alert("Document content: " + el.innerText);
    });
}
};

//    Case #3: Suspect Identification

const suspects = document.getElementsByTagName("div");

const evidence = "red-hat";

for (let suspect of suspects) {
  const clue = suspect.dataset.clue;

  if (evidence === clue) {
    suspect.classList.add("prime-suspect");

    const identified = document.createElement("div");
    identified.innerText = "IDENTIFIED";

    suspect.insertAdjacentElement("afterend", identified);
  }
}


//  Case #4: Digital Evidence Collection


const evidences = document.querySelectorAll('[data-evidence = "true"]');

const logList = document.getElementById("evidence-log");

const evidenceCount = document.getElementById("evidence-count");

evidenceCount.innerText = evidences.length;
for(let evidence of evidences){
    const listItem = document.createElement("li");
    listItem.innerText = evidence.innerText;

    listItem.addEventListener('click', () => {
        listItem.classList.add('collected');
        evidenceCount.innerText = parseInt(evidenceCount.innerText) - 1;
        listItem.style.textDecoration = "line-through";
    });

    logList.appendChild(listItem);
}


// Case #5: The Disappearing Records
const form = document.getElementById("data-form");
const input = document.getElementById("data-input");
const tableBody = document.getElementById("records");
const auditLog = document.getElementById("audit-log");
const recoverBtn = document.getElementById("recover-btn");

let deleteItems = [];

form.addEventListener("submit", ()=>{

})




// <!-- Case #6: The Code Breaker


const container =  document.getElementById("code-container");
const draggables = document.querySelectorAll(".draggable");
const decodedText = document.getElementById("decoded-text");

let draggedElement = null;

draggables.forEach(elem => {
    elem.addEventListener("dragstart", (e) =>{
        draggedElement = e.target;
    })

    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
        elem.classList.add("drag-over");
    })    

    elem.addEventListener("dragleave", (e) => {
        elem.classList.remove("drag-over");
    })

    elem.addEventListener("drop", (e)=>{
        e.preventDefault();
        elem.classList.remove("drag-over");
           
        if(draggedElement !== elem){
            const temp = elem.innerHTML;
            elem.innerHTML = draggedElement.innerHTML;
            draggedElement.innerHTML = temp;
        
            checkPattern();
        }
    })
})




function checkPattern(){
    const order = Array.from(container.children).map(el => el.innerHTML);
    if(order.join("") === "🔑🔒📜"){
        decodedText.textContent = "შეტყობინება გაშიფრულია!";
        decodedText.style.color = "green";
    }else{
        decodedText.textContent = "";
    }
}







// <!--  innerHTML გაცვლის პატარა მაგალითი-->

const a = document.getElementById("a");
const b = document.getElementById("b");

function swap(){
    const temp = a.innerHTML;
    a.innerHTML = b.innerHTML;
    b.innerHTML = temp;
}


const v = document.getElementById("v");
const y = document.getElementById("y");
const button = document.getElementById("button");


// ესე მხოლოდ ერთხელ იძახებს ბოთნს და მერე დარეფრეშეა ჭირდება
// button.addEventListener("click", () =>{
//     v.textContent = "🍌";
//     y.textContent = "🍎";
// })


// ესე რამდენჯერაც არ უნდა დავაჭიროთ button-ს დარეფრეშეის გარეშე შეცვლის ადგილეს
button.addEventListener("click", ()=>{
    const temmp = v.textContent;
    v.textContent = y.textContent;
    y.textContent = temmp;
})







// Array.from + map + join მაგალითი

  function combine() {
    const fruitEls = Array.from(document.getElementById("fruits").children);
    const fruitArray = fruitEls.map(el => el.innerHTML);
    document.getElementById("result").textContent = fruitArray.join("");
  }



//   Case #7: Security Lock Bypass

const lockPanel = document.getElementById("lock-panel");
const buttons = document.querySelectorAll(".lock-button");
const lockStatus = document.getElementById("lock-status");

const correctSequence = [1, 0, 2]
let userSequence = [];

buttons.forEach((button, index) =>{
    button.addEventListener("click", ()=>{
        userSequence.push(index);
        lockStatus.textContent = `Progress : ${userSequence.length}/3`;
        
        for(let i = 0; i < userSequence.length; i++){
            if(userSequence[i] !== correctSequence[i]){
                lockStatus.textContent = "Wrong! Try again.";
                lockPanel.classList.remove("shake");
    //void lockPanel.offsetWidth-ეს პატარა ხრიკია, რომ ბრაუზერი შეყოვნდეს ერთი წამის მეათასედით, დაფიქრდეს:


                void lockPanel.offsetWidth;
                lockPanel.classList.add("shake");
                setTimeout(() => {
                    lockPanel.classList.remove("shake");
                    lockStatus.textContent = "Enter Code";
                    userSequence = [];
                },500);
                return;
            }
        }
        
        if(userSequence.length === correctSequence.length){
            lockPanel.innerHTML = "<h2>Access Granted!</h2>";
            lockStatus.textContent = "";

        }

    })
})


// Case #8: The Shadow Network

// const node = document.querySelectorAll(".network-node");
// let message = [];
// node.forEach(node =>{
//     const thirdChild = node.children[2];
//     if(thirdChild && thirdChild.dataset.message){
//         message.push(thirdChild.dataset.message);
//     }
// })

// document.getElementById("decoded-transmission").textContent = message.join("");

// const observer = new MutationObserver(() =>{
//     alert("Warning: DOM tampering detected!")
// });

// observer.observe(document.body, {
//     childList:true,
//     subtree:true,
//     attributes:true
// })


// <!-- Case #9: The Hidden Data Vault
// function extractHiddenData() {
//     const allElements = document.querySelectorAll("[data-hidden]");
//     const list = document.getElementById("data-list");
//     list.innerHTML = ""; 

//     allElements.forEach(el => {
//         const li = document.createElement("li");
//         li.textContent = el.dataset.hidden;
//         list.appendChild(li);
//     });
// }

// document.getElementById("search-box").addEventListener("input", function() {
//     const query = this.value.toLowerCase();
//     const items = document.querySelectorAll("#data-list li");

//     items.forEach(item => {
//         if (item.textContent.toLowerCase().includes(query)) {
//             item.style.backgroundColor = "yellow";
//         } else {
//             item.style.backgroundColor = "transparent";
//         }
//     });
// });








































































