// // const cars = [`ferrri`, `porsche`, `Mercedes`, `BMW`,];

// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[3]);

// // // console.log(cars.length)  // 4 - ეს არის მასივის სიგრძე

// // for(let i = 0; i < cars.length; i++){
// //     // console.log(i);
// //     console.log(cars[i]);
// // }

// // const subjects = [`math`, `georgian`, `inglish`, `sport`, `music`]

// // for(let i = 0; i < subjects.length; i++){
// //     console.log(subjects[i]);
// //     console.log(i);
// // }

// // for(let i = 1; i <= 10; i++){
// //     console.log(i);
// // }

// // for(let i = 1; i <= 20; i+=2){
// //     console.log(i);
// // }

// // let sum = 0;
// // for(let i = 1; i <= 100; i++){
// //     // let sum = 0;
// //     sum += i;
// // }
// // console.log(sum);

// // let sum = 0;
// // for (let i = 1; i <= 10; i++){
// //     sum += i;
// //     console.log(sum);
// // }

// // let kenti = 0;
// // for(let i = 1; i < 20; i+=2){
// //     kenti += i;
// //     console.log(kenti);
// // }

// // let product = 1;
// // for(let i = 1; i <= 10; i++){
// //     product *= i;
// //     console.log(product);
// // }

// // let stars = "";
// // for (let i = 1; i <= 20; i++){
// //     stars += "*"
// //     console.log(stars);
// // }

// // let jami = 0;
// // for(let i =1; i <= 100; i++){
// //     jami += i;
// // }
// // console.log(jami);

// // for(let i = 1; i <= 50; i*=3){
// //     console.log(i);
// // }

// // let stars = "";
// // for (let i = 1; i <= 22; i++){
// //     stars += "*";
// //     console.log(stars);
// // }

// // for(let i = 1; i <= 3; i++){
// //     let line = "";
// //     for (let n = 1 ; n <= 3; n++){
// //         line += n + "";
// //     }
// //     console.log(line);

// // }

// // const car = {
// //     brand: `porsche`,
// //     model: `911`,
// //     color: `Red`,
// //     year: `2025`,
// //     price: `1000000`
// // }

// // for(const prop in car){
// //     console.log(`${prop}:  ${car[prop]}`);
// // }

// // let person = {
// //     name: "Nika",
// //     age: 25,
// //     job: "Developer"
// // };

// // // for(let prop in person){
// // //     // console.log(prop);
// // //     // console.log(person[prop]);
// // //     // console.log(`${prop}: ${person[prop]}`);
// // // }

// // let count = 0;
// // for(let prop in person){
// //     count +=1
// //     console.log("summary:", count);
// // }

// // let data = {
// //     id: 1,
// //     name: "Ana",
// //     active: true,
// //     email: "ana@mail.com"
// // }

// // for(let prop in data){
// //     if(typeof data[prop] === "string"){
// //         console.log(prop);
// //     }
// // }

// // let students = {
// //     tekla: [100, 90, 95],
// //     luka: [80, 70, 60],
// //     mari: [88, 92, 85]
// // };

// // for(let prop in students){
// //     let scores = students[prop];
// //     let sum = 0;

// //     for(let score of scores){
// //         sum += score;
// //     }

// //     let average = sum / scores.length;
// //     console.log(`${prop}: ${average}`)
// // }

// // let students = {
// //     tekla: 90,
// //     luka: 85,
// //     mari: 88
// // };

// // for(let prop in students){
// //     console.log(`${prop}: scored ${students[prop]} points`);
// // }

// // let products = {
// //     apple: 1.5,
// //     banana: 0.8,
// //     cherry: 2.0
// // }

// // for(let prop in products){
// //     console.log(`${prop} costs ${products[prop]}`);
// // }

// // const cars = [`ferrari`, `Porsche`, `subaru`, `opel`];

// // for (const car of cars){
// //     console.log(car);
// // }

// // const items = ["apple", "chair", "banana", "table", "orange", "pen"];

// // const fruits = ["apple", "banana", "orange"];

// // for(const fruit of items){
// //     if(fruits.includes(fruit)){
// //         console.log(fruit);

// //     }
// // }

// // const words = ["apple", "kiwi", "banana"];

// // for(const word of words){
// //     console.log(`${word} has ${word.length} letters`);
// // }

// // for(i=0; i < 10; i++){
// //     console.log(i)
// // }

// // let i = 5;
// // while(i< 4) {
// //     console.log(i)
// //     i++
// // }

// // const cars = [`ferrari`, `Porsche`, `subaru`, `opel`];

// // let i = 0;

// // while (i < cars.length) {
// //     console.log(cars[i]);
// //     i++
// // }

// // let i = 20;

// // do {
// //     console.log(`Hello`);
// // }
// // while( i < 10 );

// // let i = 1;

// // do{
// //     console.log(i);
// //     i++;
// // }while( i <= 5);

// // let i = 5;
// // do{
// //     console.log(i);
// //     i--;
// // }while( i >= 1);

// // let i = Math.floor(Math.random() * 5) + 1
// // while(i <= 5){
// //     console.log(`rooled: ${i}`)
// //     i++;
// //     break;
// // }

// // let number;

// // do{
// //     number = Math.floor(Math.random() * 5) + 1
// //     console.log(`rolled: ${number}`);
// // }while (number !== 3);

// // const cars = [`ferrri`, `porsche`, `Mercedes`, `BMW`,];

// // arrow function-ით

// // cars.forEach((car, index, array) =>{
// //     // console.log(car);
// //     // console.log(`Car name is - ${car}, index is - ${index}`);
// //     console.log(array);
// // })

// // cars.forEach(function (car, index, array){
// //     console.log(`Car name is - ${car}, index is - ${index}`);
// // })

// //  1-დან 10-ის ჩათლით რიცხვები
// function print_numbers(){
//     for(let i =1; i <= 10; i++){
//         console.log(i);
//     }
// }

// print_numbers();

// // სიტყვის 5-ჯერ დაწერა
// let i = 0;

// while(i < 5){
//     i++
//     console.log(`${i}: გახსენი პალიტრა!`)
// }

// // გამოიძახე key და value-ე მნიშვნელობები ორივე
// let person = {
//     name: "თეკლა",
//     age: 24,
//     city: "ბათუმი"
// }

// for(let prop in person){
//     console.log(`${prop}: ${person[prop]}`)
// }

// // დაეჭდე მასივის თითოეული წევრი
// const numbers = [5, 10, 15, 20, 25];

// for (let num of numbers) {
//   console.log(num);
// }

// // გააორმაგე 1-დან 20-მდე რიცხვეი მასივში
// let number = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// number.forEach((num) => {
//   console.log(num * 2);
// });

// Task 1: Basic Counting Loop (For Loop)

function countdownFrom(n) {
  for (let i = n; n > 0; n--) {
    console.log(n);
  }
}
countdownFrom(5);

// Task 2: Iterate Over an Array (For...of Loop)

const fruits = ["Apple", "Banana", "Cherry"];

function printArrayElements(arr) {
  for (let arr of fruits) {
    console.log(arr);
  }
}

printArrayElements();

// Task 3: Sum of Numbers (While Loop)

function sumNumbersUp(n) {
  let i = 0;
  let sum = 0;
  while (n >= i) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumNumbersUp(5));

// Task 4: Repeat a String (Do...While Loop)

function repeatString(str, n) {
  let i = 1;
  do {
    console.log(str);
    i++;
  } while (n >= i);
}

repeatString("Hello", 3);

// Task 5: Iterate Over Object Properties (For...in Loop)

function printObjectKeys(obj) {
  for (let items in obj) {
    console.log(items);
  }
}
printObjectKeys({ name: "Alice", age: 25 });

// Task 1: Filter Odd Numbers (For Loop)

function filterOdds(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(filterOdds([1, 2, 3, 4, 5]));

// Task 2: Find Maximum Value (For...of Loop)

function findMaxValue(numbers) {
  let max = numbers[0];
  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
console.log(findMaxValue([10, 20, 5, 30]));

// Task 3: Reverse a String (While Loop)

function reverseString(str) {
  let reverse = "";
  let i = str.length - 1;
  while (i >= 0) {
    reverse = reverse + str[i];
    i--;
  }
  return reverse;
}

console.log(reverseString("Hello"));

// Task 4: Validate User Input (Do...While Loop)

function getValidInput() {
  let input;
  do {
    input = Number(prompt("Please enter a numer between 1 to 10:"));
    //     // console.log(input);
  } while (input < 1 || input > 10);
  return input;
}

// // console.log(getValidInput());
let validNumber = getValidInput();
console.log(validNumber);

// Task 1: FizzBuzz with a Twist

function fizzBuzzTwist() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (String(i).includes("3")) {
      console.log("Almost Fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzzTwist();

// Task 2: Nested Loops: Multiplication Table

function printMultiplicationTable(n){
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++)
    // console.log(i * j);
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

printMultiplicationTable(5);

// Task 3: Modify Array While Looping

function removeDuplicates(arr){
  let newArry = [];

  for(let i = 0; i < arr.length; i++){
    let isDuplicate = false;

    for(let j = 0; j < newArry.length; j++){
      if(arr[i] === newArry[j]){
        isDuplicate = true;
        break;
      }
    }
    if(!isDuplicate){
      newArry[newArry.length] = arr[i];
    }
  }
  return newArry;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));












