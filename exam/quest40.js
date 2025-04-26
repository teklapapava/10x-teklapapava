const buttons = document.querySelectorAll("alert-btn");

function handleAlert(){
    console.log("Alert triggered");
}

for(btt of buttons){
    btt.addEventListener("Click", handleAlert);
}

