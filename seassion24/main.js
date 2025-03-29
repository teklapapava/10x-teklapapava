// // 1. Batman’s Night Patrol (If Statements & Boolean Conditions)

// function batmanPatrol(signalOn){
//     if(signalOn){
//         console.log("Batman is on patrol!");
//     }else{
//         console.log("Gotham is quiet tonight." );
//     }
// }
// batmanPatrol(true);  
// batmanPatrol(false); 


// // 2. Sorting Avengers (Truthy & Falsy Values)

// function availableAvengers(avengers){
//     return avengers.filter(Boolean);
// }

// console.log(availableAvengers(["Iron Man", "", null, 
// "Thor", undefined]));


// // 3. Spider-Man’s Mask Check (Negation !)

// function canRemoveMask(peopleAround){
//     if(peopleAround){
//         console.log("Keep the mask on!");
//     }else{
//         console.log("Safe to remove mask!")
//     }
// }

// canRemoveMask(0); 
// canRemoveMask(3); 

// // 4. Naruto’s Chakra Levels (Ternary Operator)


// // function checkChakra(level){
// //     if(level > 80){
// //         return "Full Power";
// //     }else if(level >= 50){
// //         return "Still Fighting";
// //     }else{
// //         return "Need Ramen Recharge";
// //     }
// // }


// function checkChakra(level){
//     return level > 80
//     ? "Full Power"
//     : level >= 50
//     ? "Still Fighting"
//     : "Need Ramen Recharge";
// }

// console.log(checkChakra(90)); 
// console.log(checkChakra(60));
// console.log(checkChakra(30)); 


// // 5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)

// // function isJediMaster(angerLevel, wisdomLevel){
// //     if(angerLevel < 30 && wisdomLevel >70){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }
// function isJediMaster(angerLevel, wisdomLevel){
//     return angerLevel < 30 && wisdomLevel > 70;
// }

// console.log(isJediMaster(20, 80)); 
// console.log(isJediMaster(50, 90));


// // 6. One Piece Treasure Hunt (Boolean Coercion & Conditionals)

// function isTreasureSpot(content){
//     if(content){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isTreasureSpot("gold")); 
// console.log(isTreasureSpot(0)); 


// // 7. Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)

// // function strangePasscode(code1, code2){
// //     if(code1 === code2){
// //         return false
// //     }else{
// //         return true
// //     }
// // }

// function strangePasscode(code1, code2){
//     return code1 !== code2;
// }



// console.log(strangePasscode(null, undefined)); // true
// console.log(strangePasscode("0", 0)); // true
// console.log(strangePasscode(0, false)); // true
// console.log(strangePasscode(0, 0)); // false -->


// // // 8. Loki’s Illusions (Object Comparison & Identity)

// let lokiA = { name: "Loki" };
// let lokiB = { name: "Loki" };
// let lokiC = lokiA;

// // function isSameLoki(lokiA, lokiB){
// //     if(lokiA === lokiB){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }


// function isSameLoki(lokiA, lokiB){
//     return lokiA === lokiB;
// }


// console.log(isSameLoki(lokiA, lokiB)); 
// console.log(isSameLoki(lokiA, lokiC));


// // // 9. Schrödinger’s Cat (Advanced Boolean Logic & Edge Cases)


// // function schrodingerCat(state1, state2){
// //     if(state1 = state2){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }

// function schrodingerCat(state1, state2){
//     return !!state1 === !!state2; 
// }


// console.log(schrodingerCat("alive", "dead")); 
// console.log(schrodingerCat(10, undefined)); 
// console.log(schrodingerCat(1, "yes")); 
// console.log(schrodingerCat("cat", 0)); 















// // // Coding Challenge #1 

// let markWeight = 78;
// let markheight = 1.69;

// let johnWeight = 92;
// let johnheight = 1.95;

// // BMI = mass / height ** 2 = mass / (height * height);

// let markBMI = markWeight / (markheight * markheight);
// let johnBMI = johnWeight / (johnheight * johnheight);

// let markheightBMI = markBMI > johnBMI;

// console.log("Mark's BMI:", markBMI);
// console.log("John's BMI:", johnBMI);

// console.log(markheightBMI);

// function BMI(markBMI, johnBMI) {
//   if (markBMI > johnBMI) console.log("Mark's BMI is higher than John's!");
//   else {
//     console.log("John's BMI is higher than Mark's!");
//   }
// }

// BMI(markBMI, johnBMI);



//  markWeight = 95;
//  markheight = 1.88;

//  johnWeight = 85;
//  johnheight = 1.76;


//  markBMI = markWeight / (markheight * markheight);
//  johnBMI = johnWeight / (johnheight * johnheight);

//  markheightBMI = markBMI > johnBMI;

// console.log("Mark's BMI:", markBMI);
// console.log("John's BMI:", johnBMI);

// console.log(markheightBMI);


// function BMI(markBMI, johnBMI) {
//   if (markBMI > johnBMI) console.log("Mark's BMI is higher than John's!");
//   else {
//     console.log("John's BMI is higher than Mark's!");
//   }
// }

// BMI(markBMI, johnBMI);


// // <!-- Coding Challenge #2

// markBMI = 28.3;
// johnBMI = 23.9;

// function BMI(markBMI, johnBMI) {
//   if (markBMI > johnBMI) {
//     console.log("Mark's BMI is higher than John's!");
//   } else {
//     console.log("John's BMI is higher than Mark's!");
//   }
// }

// BMI(markBMI, johnBMI);


// // Coding Challenge #3 

// let dolphinesScore = 0;
// let koalasScore = 0 ;

// winner(96, 88)

// winner(108, 91)

// winner(89, 110)

// function winner (dolphines, koalas){
//     console.log(dolphines, koalas)
//     if(dolphines < 100 && koalas < 100){
//         console.log("draw")
//         return;
//     }
//     if(dolphines === koalas){
//         console.log("draw")
//         return;
//     }
//     if(dolphines > koalas){
//         console.log("winner is Dolphines")
//         dolphinesScore++;
//         return;
//     }

//     console.log("Winner is Koalas")
//     koalasScore++;
// }

// console.log(`result: ${dolphinesScore}-${koalasScore}`)



// dolphinesScore = 0;
// koalasScore = 0 ;

// winner(97, 109)

// winner(112, 95)

// winner(101, 123)

// function winner (dolphines, koalas){
//     console.log(dolphines, koalas)
//     if(dolphines < 100 && koalas < 100){
//         console.log("draw")
//         return;
//     }
//     if(dolphines === koalas){
//         console.log("draw")
//         return;
//     }
//     if(dolphines > koalas){
//         console.log("winner is Dolphines")
//         dolphinesScore++;
//         return;
//     }

//     console.log("Winner is Koalas")
//     koalasScore++;
// }

// console.log(`result: ${dolphinesScore}-${koalasScore}`)


// dolphinesScore = 0;
// koalasScore = 0 ;

// winner(97, 109)

// winner(112, 95)

// winner(101, 106)

// function winner (dolphines, koalas){
//     console.log(dolphines, koalas)
//     if(dolphines < 100 && koalas < 100){
//         console.log("draw")
//         return;
//     }
//     if(dolphines === koalas){
//         console.log("draw")
//         return;
//     }
//     if(dolphines > koalas){
//         console.log("winner is Dolphines")
//         dolphinesScore++;
//         return;
//     }

//     console.log("Winner is Koalas")
//     koalasScore++;
// }

// console.log(`result: ${dolphinesScore}-${koalasScore}`)


// // Coding Challenge #4 

// let bill = 275.4;

// function checktip (bill){
//     let tip = bill * .15;
//     let totalValue = bill + tip;
//     if(bill >= 50 && bill <= 300){
//          console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`)
//     }else{
//         tip = bill * .2;
//         totalValue = bill + tip;

//         console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`)    }
// }

// checktip(275.4);


// function checktip(bill){
//     let tip = bill * .15
//     let totalValue = bill + tip
//     return bill >= 50 && bill <= 300
//     ? `The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`
//     : `The bill was ${bill}, the tip was ${bill * .2} and total value ${totalValue}`
// }

// console.log(checktip(30));


// function checktip (bill){
//     let tip = bill * .15;
//     let totalValue = bill + tip;
//     if(bill >= 50 && bill <= 300){
//          console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`)
//     }else{
//         tip = bill * .2;
//         totalValue = bill + tip;

//         console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`)    }
// }

// checktip(430);



// // Coding Challenge #5 Dynamic Calculator


// function calculate(a, b, operator){
//     switch(operator){
//         case  "+":
//             return a + b;
//                 case "/":
//                     return a / b;
//                         case "/":
//                         return a / b;
//                             default:
//                                 return "Invalid operator";
//                      }
// }



// console.log(calculate(5, 3, "+"));
// console.log(calculate(10, 2, '/'));
// console.log(calculate(4, 0, '/'));
// console.log(calculate(2, 3, '^'));



// // Coding Challenge #5 Rock, Paper, Scissors

// function playGame(player1, player2){
//     if(player1 === "rock" && player2 === "scissors"){
//         return "Player 1 wins!";
//     }else if(player1 === "scissors" && player2 === "paper"){
//         return "Player 1 wins!";
//     }else if(player1 === "paper" && player2 === "rock"){
//         return "Player 1 wins!";
//     }else if(player1 === player2){
//          return "It's a tie!.";
//     }else{
//         return  "Invalid move";
//     }
// }

// console.log(playGame("rock", "scissors"));
// console.log(playGame("paper", "rock"));
// console.log(playGame("scissors", "scissors"));
// console.log(playGame("fire", "rock" ))


// // Coding Challenge #6 Triangle Type Detector

// function triangleType(a, b, c){
//     if(a === b && a === c && b ===c){
//         return "Equilateral";
//     }else if(a === b || a === c || b === c ){
//         return "Isosceles";
//     }else if (a + b <= c || a + c <= b || b + c <= a){
//         return "Not a triangle";
//     }else {
//         return "Scalene";
//     }
// }

// console.log(triangleType(3, 3, 3));
// console.log(triangleType(3, 3, 5));
// console.log(triangleType(3, 4, 5));
// console.log(triangleType(1, 2, 3));



// // Coding Challenge #7 Bank Transaction System

// function processTransaction(balance, amount, transactionType){
//     if(transactionType === "withdraw" && amount <= balance){
//         balance -= amount;
//         return balance;
//     }
//     if(transactionType === "withdraw" && amount > balance){
//         return "Insufficient funds"
//     }
//     if(transactionType === "deposit"){
//         balance += amount;
//         return balance;
//     }
//       return "Invalid transaction type"
// }       


// console.log(processTransaction(500, 200, "withdraw"));
// console.log(processTransaction(500, 600, "withdraw"));
// console.log(processTransaction(500, 100, "deposit"));
// console.log(processTransaction(500, 50, "transfer"));


// // Coding Challenge #7 Hotel Room Pricing System

// function getRoomPrice(type, isWeekend, hasDiscount){
//     let cost;
    
//     if(type === "Standard"){
//         cost = isWeekend ? 120 : 100;
//     }else if(type === "Deluxe"){
//         cost = isWeekend ? 180 : 150;
//     }else if(type === "Suite"){
//         cost = isWeekend ? 250 : 200
//     }

//     if (hasDiscount){
//         cost = cost * .9;
//     } 
//     return cost;    
// }

// console.log(getRoomPrice("Standard", false, false));
// console.log(getRoomPrice("Deluxe", true, false));console.log(getRoomPrice("Suite", false, true));




// // თეკლა პაპავა -- Salary & Tips Calculator


// function calculateSalary(baseSalary, tips, position){
//     if(position === "waiter" && tips >= 500){
//          return baseSalary + (baseSalary * 0.1);
//     }
//     if(position === "chef" && tips >= 300){
//         return baseSalary + (baseSalary * 0.05);
//     }
//     if(position === "manager"){
//         return baseSalary + (baseSalary * 0.15);
//     }
//     if (position === "waiter" || position === "chef") {
//         return baseSalary;
//     }
//     return "Invalid position"
// }


// console.log(calculateSalary(2000, 600, "waiter"));  
// console.log(calculateSalary(2500, 100, "waiter"));  
// console.log(calculateSalary(3000, 400, "chef"));   
// console.log(calculateSalary(4000, 500, "manager")); 
// console.log(calculateSalary(3500, 200, "manager")); 
// console.log(calculateSalary(1800, 700, "barista")); 


// // <!-- გიორგი ხილაძე -->

// // <!-- exercise 1. Doom’s pyramid == red flag



function deepClosure(){
    let value = 0;

    function level1(){
        value += 1;
        function level2(){
            value +=2;
            function level3(){
                value +=3;
                function level4(){
                    value +=4;
                    function level5(){
                        value +=5;
                        return value;
                    }
                    return level5();
                }
                return level4();                
            }
            return level3();
        }
        return level2();
    }
    return level1();
}

console.log(deepClosure());



// Ternary operators

function AQI(aqi){
    if(aqi >= 0 && aqi <= 50){
        return "Good";
    }else if(aqi >= 51 && aqi <= 100){
        return "Moderate";
    }else if(aqi >= 101 && aqi <= 150){
        return "Unhealthy (Sensitive Groups)";
    }else if (aqi >= 151 && aqi <= 200){
        return "Unhealthy";
    }else if (aqi >= 201 && aqi <= 300){
        return "Very Unhealthy";
    }else{
        return "Hazardous";
    }

}

console.log(AQI(455));


// KetKat - switch statement

function categorizeAge(year){
    let currentYear = 2025;
    let age =  currentYear - year;
    if(age >= 1 && age <= 18){
        return `Age: ${age}, Child/Teenager`;
    }else if(age >= 19 && age <= 59){
        return `Age: ${age}, Adult`;
    }else if(age >= 60 && age <= 100){
        return `Age: ${age}, Senior`
    }else{
        return "Invalid Age."
    }
}

console.log(categorizeAge(1997));  
console.log(categorizeAge(2015));
console.log(categorizeAge(2025));





// The Flea and the Ant
let acorn = true;
let bristle = true;
let chick = true;
let millet = true;
let grass = false;
let milk = true;
let mouse = true;

// function Flea(){
//     if(acorn && bristle && chick && millet && grass && milk && mouse){
//         return "Ant is free!"
//     }else{
//         return "Ant isn't free!"
//     }
// }

// console.log(Flea());

function deepFlea() {
    if (grass) {
        console.log("cow - milk");
    } else {
        console.log("grass is missing");
        console.log(" Ant isn't free!");
        return;
    }

    if (milk) {
        console.log("milk - cat");
    } else {
        console.log("milk is missing");
        console.log(" Ant isn't free!");
        return;
    }

    if (mouse) {
        console.log("mouse - pit");
    } else {
        console.log("mouse is missing");
        console.log(" Ant isn't free!");
        return;
    }

    console.log("Ant is free!");
}

deepFlea();

// ცოტნე
//  Task: Matrix (2D Array) Multiplication Check


function canMultiplyMatrices(matrixA, matrixB){
    return matrixA.length === matrixB[0].length    
}
const A = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  
  const B = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  const C = [
    [1, 2],
    [3, 4]
  ];
  
  
  const D = [
    [5, 6, 7],
    [8, 9, 10]
  ];

console.log(canMultiplyMatrices(C, D));
console.log(canMultiplyMatrices(A, B));





















































































































































































































































































































































































































































































