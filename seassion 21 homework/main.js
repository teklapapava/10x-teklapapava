// Exercise 1: The Power of Variables and Operators


let gandalPower = 150;
let dumledorePower = 170; 


let power = dumledorePower > gandalPower


gandalPower =  400;
dumledorePower  = 300;


function Comparison(){
    if(dumledorePower > gandalPower){
    console.log(`dumledore Power is: ${dumledorePower}, gandal Power is: ${gandalPower}, dumledore is stronger than gandal`)
}else{
    console.log(`dumledore Power is: ${dumledorePower}, gandal Power is: ${gandalPower}, gandal is stronger than dumledor`)
}
}


Comparison();



// Exercise 2: The Treasure Chest of Data Types

let gold = 300;
let treasureMap = "Follow the road";
let  cursedAmulet = 300 > 299;



console.log(typeof(gold), typeof(treasureMap), typeof(cursedAmulet));
// console.log(typeof(treasureMap));
// console.log(typeof(cursedAmulet));

treasureMap = 444;

console.log(typeof(gold), typeof(treasureMap), typeof(cursedAmulet));


// Exercise 3: The Potion Shop’s Price Calculator

let  healthPotions = 10;
let  manaPotions = 20;

let healthPotionsQuantity = 3;
let  manaPotionsQuantity = 2;

let total = (healthPotions * healthPotionsQuantity) + (manaPotions * manaPotionsQuantity);


function cost(){
    if(total > 50){
        
        console.log(`your first paymant was: ${total}`);

    total -= (total * 10) / 100;

    console.log(`you have 10% discount and now your paymant is:  ${total}`);
    }  else{
        console.log(`You have to pay: ${total}`);
    }
}
cost();


// Exercise 4: The Brave Knight’s Inventory

let sword = 300;
let armor = "celestialAegis";

let shield = 3 < 5;

function forShield (){
    if(shield){
        console.log(
        `Sir Debugalot ready for battle he has:
        sword: ${sword},
        armor: ${armor},
        shield: yes`
    )
    }else{
        console.log(`Sir Debugalot is not ready for battle he has:
        sword: ${sword},
        armor: ${armor},
        shield: no`)
    }
}

forShield();


// Exercise 5: The Bakery's Daily Earnings
let breadPrice = 1;
let cakePrice = 2;

let breadQuantity = 53;
let cakeQuantity = 90;


let  dailySales = (breadPrice * breadQuantity) + (cakePrice * cakeQuantity);

console.log(dailySales);



// Exercise 6: The Space Mission’s Fuel Check

let spaceshipsFuel = 300;
let currentFuel = 250;

let capacityForLaunch  = (spaceshipsFuel * 80) /100 ;

 

function launch(){
    if (currentFuel > capacityForLaunch) {
        console.log("it's ready to take off.")
    }else{
        console.log("it isnot ready to take off.")
    }
}

launch();



// Exercise 7: The Time Traveler’s Stopwatch (Updated)


let currentYear = 2025; 

let timeJump=  -60;

newDate = currentYear + timeJump;

console.log(newDate);



// Exercise 8: The Wizard’s Spell Strength Test

let tekla = 150;
let mariam = 150;
let keti = 300;

if (tekla > mariam && tekla > keti){
    console.log("Tekla is a stronger")
}else if(mariam > tekla && mariam > keti){
    console.log("Mariam is a stronger")
}else if (keti > tekla && keti > mariam){
    console.log("keti is a stronger")
}else if (tekla === mariam){
    console.log("Tekla and MAriam have equal power")
}
else if(tekla === keti){
    console.log("Tekla and keti have equal power")
}
else if(keti === mariam){
    console.log("Keti and MAriam have equal power")
}   

// Exercise 9: The Haunted House Mystery

let kitchenHasGhost = false;
let livingRoomHasGhost = true;


function isHouseSafe(){
    if( !kitchenHasGhost && !livingRoomHasGhost ){
        console.log("The house is safe! No ghosts in the Kitchen or Living Room.")
    }else{
        console.log("Danger! The house is NOT safe. Ghosts detected!.")
    }
}


isHouseSafe();


// Exercise 10: The Robot’s Battery Check



let batterLevel = 30;
let currentlyBattery = 45;


function Bolt(){
    if(currentlyBattery >= batterLevel ){
        console.log("Charged")
    }else{
        console.log("Low battery")
    }
}

Bolt();



// Exercise 11: The Dragon’s Health Meter

let dragonHealth = 100;
let knightAttackDamage = 25;

dragonHealth -= knightAttackDamage;

console.log(`Dragon's Health After Attack: ${dragonHealth}`);


dragonHealth -= knightAttackDamage;

console.log(`Dragon's Health After Attack: ${dragonHealth}`);




// Exercise 12: The Speeding Race Car



let speedLimit = 50;
let carSpeed = 30;

carSpeed += 25;


function car(){
    if(carSpeed > speedLimit){
        console.log("Speed Warning: You are going too fast!");
    }else {
        console.log("Speed is okay.");
    }
    // console.log(`Current speed: ${carSpeed}`);
}
console.log(`Current speed: ${carSpeed}`);

car();



// Exercise 13: The Superhero Strength Test

let heroStrength = 130;   //valianti
let villainStrength = 140;  //malakori

function battle(){
    if(heroStrength > villainStrength + 10){
        console.log("Valiant's power is overwhelming! Malakor's is soundly defeated!")
    }else if(villainStrength > heroStrength + 10){
        console.log("Malakor's power is overwhelming! Valiant's is soundly defeated!")
    }else if (heroStrength === villainStrength){
        console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.")
    }else{
        if(heroStrength > villainStrength){
            console.log("Valiant barely edges out! A close call victory against Malakor!")
        }else {
            console.log("Malakor narrowly prevails! A hard-fought win over Valiant!")
        }
    }
}

battle();   





//  Exercise 14: The Tricky Treasure Hunt

let hasTreasureMap = true;
let solvedRiddleScroll = true;
let hasCompass = true;
let isFullMoon = false;
let foundAncientKey = true;


let canFindTreasure = hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));


function Treasure(){
    if(canFindTreasure && isFullMoon){
        console.log( "Success! Alex can find the legendary treasure!")
    }else {
        console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.")
    }
}


Treasure();





// Exercise 15: The Ice Cream Shop’s Daily Sales with Volume Discount


let iceCreamCone = 4;
let iceCreamSundae = 8;


let coneSoldToday = 50;
let sundaeSoldToday = 100;

let ScoopsAndSmilesDailySales = (iceCreamCone * coneSoldToday) +
(iceCreamSundae * sundaeSoldToday);

let dailyincomewithdiscount = ScoopsAndSmilesDailySales * 0.95


console.log(`Total earnings before discount is ${ScoopsAndSmilesDailySales}`);


function discount(){
    if(ScoopsAndSmilesDailySales >= 1000){
        console.log(`Volume Discount Applied: Yes and 
        Daily Sales is ${dailyincomewithdiscount}`)
    }else{
        console.log(`Volume Discount Applied: No and 
        Daily Sales is ${ScoopsAndSmilesDailySales}`)
    }
}

discount();



// Exercise 16: Music Band Concert Profit Check 


let ticketPreice = 20;
let ticketSold = 200;

let concertCosts = 8000;


let totalEarnings = ticketPreice * ticketSold;

let profit = totalEarnings - concertCosts;
// console.log(profit);

function profitCalculation(){
    if(profit > 0){
        console.log("Concert Profit: $2000. Great success!")
    }else{
        console.log("Concert did not cover costs. Earnings: $8000, Costs: $8000." )
    }
}

profitCalculation();


























