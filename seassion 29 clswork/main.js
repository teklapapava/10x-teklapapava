
// const button = document.getElementById("override");

// button.addEventListener("click", ()=> {
//     console.log("Emergency override engaged");
// });


function deployHandler(){
    console.log("Deploying units..");
};


const armBtn = document.getElementById("arm");
const disarmBtn = document.getElementById("disarm");

armBtn.addEventListener("click", ()=> {
    deployHandler;
});

disarmBtn.addEventListener("click", ()=>{
    disarmBtn.removeEventListener("click", deployHandler);
});