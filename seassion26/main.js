// ამოცანა 1:

const fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];

console.log(fruits.at(2));
console.log(fruits.at(0));
console.log(fruits.at(3));
console.log(fruits.at(1));

// ამოცანა 2:

const a = [1, 2, 3];
const b = "არ ვარ მასივი";
const c = { name: "თეკლა" };

console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));

// ამოცანა 3:

const myTasks = [];
myTasks.push("მეცადინეობა", "study", "Studie");

console.log(myTasks);

// ამოცანა 4:

let movies = ["Inception", "Matrix"];

movies.unshift("dead poets society");

console.log(movies);

// ამოცანა 5:

let guests = ["თეკლა", "გიო", "მარი", "დათო"];

const lastElement = guests.pop();
console.log(lastElement);
console.log(guests);

// ამოცანა 6:

let travelers = ["ლუკა", "თეკლა", "ნიკა", "საბა"];

const firstElement = travelers.shift();
console.log(`${firstElement} წავიდა პირველი`);
console.log(travelers);

// -----------------------------------

// ამოცანა 1:

const names = ["თეკლა", "ლუკა", "ნინო", "მარი", "გიორგი"];

console.log(names.at(0));
console.log(names.at(4));
console.log(names.at(2));

// ამოცანა 2:

// function checkType(value){
//     if(Array.isArray(value)){
//         return "ეს მასივია";
//     }else{
//         return "ეს არ არის მასივი";
//     }
// }

// console.log(checkType([[123], [ 2, 45]]));
// console.log(checkType("მე ვარ ბარნი"));

function checkType(value) {
  return Array.isArray(value) ? "ეს მასივია" : "ეს არ არის მასივი";
}

console.log(checkType([[123], [2, 45]]));
console.log(checkType("მე ვარ ბარნი"));

// ამოცანა 3:

let basket = [];
basket.push("bread", "milk", "cheese");
let lastElement2 = basket.pop();

console.log(basket);

// ამოცანა 4:

let line = ["მარი", "ნიკა"];
line.unshift("თეკლა", "გიო");
let firstElement2 = line.shift();
console.log(`არ ეცალა ${firstElement2} -ს`);
console.log(`რიგში დარჩა ${line}`);

// ამოცანა 5:

let nums = [10, 20];
nums.push(30, 40);
nums.unshift(0, 5);
let firstElement3 = nums.shift();
let lastElement3 = nums.pop();

console.log(nums);

// ---------------------------------------

const arr = [1, 2, 3];
arr[0] = arr[0] * 5;
arr[1] *= 5;
arr[2] *= 5;

console.log(arr);

const arr_1 = [1, 2, 3];
const arr_2 = [];
arr_2.push(arr_1[0] * 5, arr_1[1] * 5, arr_1[2] * 5);

console.log(arr_2);

const arr_3 = [1, 2, 3];

for (const element of arr_3) {
  console.log(element * 5);
}

const arr_4 = [1, 2, 3];
for (let i = 0; i < arr_4.length; i++) {
  console.log(arr_4[i] * 5);
}

const arr_5 = ["WORD", "WoRD", " Word"];

for (let i = 0; i < arr_5.length; i++) {
  console.log(arr_5[i].toLowerCase());
}

const arr_6 = ["BMW", "Mercedes", "Audi"];
arr_6.forEach((car, index) => {
  console.log(`${index + 1}. ${car}`);
});

const numbers = [2, 3, 4];
const numberSquares = [];

numbers.forEach((num) => {
  numberSquares.push(num ** 2);
});

console.log(numbers);
console.log(numberSquares);

const numbers_1 = [2, 4, 6];
const numberSquares_1 = numbers_1.map((num) => num ** 2);

// const numberSquares_1 = numbers_1.forEach((num) => num ** 2);  //undefined

console.log(numbers_1);
console.log(numberSquares_1);

const arr_7 = [5, 3, 15, 7, 200, 92];
const filteredArray = arr_7.filter((el) => el > 10);

console.log(arr_7);
console.log(filteredArray);

// -----------------------------------

// ამოცანა 1:
const fruits_1 = ["ვაშლი", "ბანანი", "მსხალი"];

fruits_1.forEach((fruits) => {
  console.log(fruits);
});

// ამოცანა 2:

const numbers_2 = [1, 2, 3, 4];

numbers_2.forEach((num_1) => {
  console.log(`ეს არის რიცხვი ${num_1}`);
});

// ამოცანა 3:

const nums_2 = [2, 4, 6];
const nums_2Squares = nums_2.map((elmnt) => elmnt ** 2);

console.log(nums_2);
console.log(nums_2Squares);

// ამოცანა 4:
const names_1 = ["tekla", "lika", "gio"];

const namesUpper = names_1.map((upper) => upper.toUpperCase());

console.log(namesUpper);

// ამოცანა 5:

const nums_3 = [10, 25, 8, 30, 5];
const forFilter = nums_3.filter((nmb) => nmb > 10);

console.log(nums_3);
console.log(forFilter);

// ამოცანა 6:

const words = ["კატა", "ძაღლი", "ა", "თევზი", "ხე", "ზღვა"];

const forWords = words.filter((word) => word.length > 2);

console.log(words);
console.log(forWords);

// --------------------------------------

const Arr = [5, 25, 10, 25, 9];
const indexOfElement = Arr.indexOf(25);
console.log(indexOfElement);

const Arr_1 = [5, 25, 10, 25, 9];
const indexOfElement_1 = Arr_1.lastIndexOf(25);
console.log(indexOfElement_1);

const Arr_2 = [5, 25, 10, 25, 9];
const indexOfElement3 = Arr_2.indexOf(1000);
const lastIndexOfElement = Arr_2.lastIndexOf(100);
console.log(indexOfElement3); //-1
console.log(lastIndexOfElement); //-1

const Arr_3 = [5, 25, 10, 25, 9];
console.log(Arr_3.includes(25)); //true
console.log(Arr_3.includes(100)); //false

// --------------------------------------

// ამოცანა 1:

const colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი"];
const colorIndex = colors.indexOf("ლურჯი");
console.log(colorIndex);

// ამოცანა 2:

const letters = ["ა", "ბ", "გ", "ბ", "დ"];
const lettersIndex = letters.lastIndexOf("ბ");
console.log(lettersIndex);

// ამოცანა 3:

const pets = ["ძაღლი", "კატა", "თევზი"];
const petsIncludes = pets.includes("კატა");
console.log(petsIncludes);

// ამოცანა 4:
const numbers_0 = [3, 7, 12, 5, 18];
const findNumber = numbers_0.find((nm) => nm > 10);
console.log(findNumber);

// ამოცანა 5:
const names_2 = ["ანა", "ლიკა", "მარი", "გიო"];

const findNames = names_2.findIndex((lngth) => lngth === 4);
console.log(findNames);

// ------------------------------------

const Arr_4 = [1, 2, 3, 4];
const Arr_5 = Arr_4.slice();

Arr_4.push(5);
console.log(Arr_4, Arr_5);


const array = [1, 2, 3, 4, 5];
const newarray = array.slice(2);
console.log(array);
console.log(newarray);


const array_1 = [1, 2, 3, 4, 5];
const newarray_1 = array_1.slice(2, 4);
console.log(array_1);
console.log(newarray_1);

const array_2 = [1, 2, 3, 4, 5];
const newarray_2 = array_2.slice(2, 2);
const otherArry = array_2.slice(3, 1);
console.log(array_2);
console.log(newarray_2);
console.log(otherArry);



const array_3 = [1, 2, 3, 4, 5];
const newarray_3 = array_3.slice("a");
console.log(array_3);
console.log(newarray_3);


const array_4 = [1, 2, 3, 4, 5];
const newarray_4 = array_4.slice("a", 3);
console.log(array_4);
console.log(newarray_4);


const array_5 = [1, 2, 3, 4, 5];
const newarray_5 = array_5.slice(-4, -2);
console.log(array_5);
console.log(newarray_5);

const array_6 = [1, 2, 3, 4, 5];
const newarray_6 = array_6.splice(2, 2);
console.log(array_6);
console.log(newarray_6);


const array_7 = [1, 2, 3, 4, 5];
const newarray_7 = array_7.splice(2, -2);
console.log(array_7);
console.log(newarray_7);


//ეს ისე რატო არ მუშაობს როგორც ხსნის ლაშა იკითხე
const aRRy = [1, 2, 3, 4, 5];
const newaRRy = aRRy.splice("a", 2);
console.log(aRRy);
console.log(newaRRy);


const aRRy1 = [1, 2, 3, 4, 5];
const newaRRy1 = aRRy1.splice(2, 2, "a", "b", 10);
console.log(aRRy1);
console.log(newaRRy1);

const sum = [1, 2, 3];
const reduceSum = sum.reduce((accumulator, element) => accumulator + element, 0);
console.log(reduceSum);


const sum1 = [3, 85, 5, 30];
const maxValue = sum1.reduce((acc, elem) => (acc > elem ? acc : elem), sum1[0]);
const minValue = sum1.reduce((acc, elem) => (elem < acc ? elem : acc), arr[0]);

console.log(maxValue);
console.log(minValue);


const sum2 = [1, 2, 3];
const average = sum2.reduce((acc, elem) => acc + elem, 0) / sum2.length;
console.log(average);


const sum3 = [3, 5, 2, 7, 1];
const newSum = sum3.reverse();
console.log(newSum);
console.log(sum3);


const Alphabet = ["g", "l", "a", "c", "b"];
const newAlphabet = Alphabet.sort();
console.log(newAlphabet);
console.log(Alphabet);

const digit = [ 5, 8, -3, 1, 10, 23];
const newDigit = digit.sort();
console.log(newDigit);
console.log(digit); 


const digit1 = [ 5, 8, -3, 1, 10, 23];
const newDigit1 = digit1.sort((a, b) => {
    if(a > b) return 1;
    else if (a === b) return 0;
    else return -1;
});
console.log(newDigit1);
console.log(digit1);

 
const digit2 = [ 5, 8, -3, 1, 10, 23];
const newDigit2 = digit2.sort((a, b) => {
     return  a - b;
});
console.log(newDigit2);
console.log(digit2);

const digit3 = [ 5, 8, -3, 1, 10, 23];
const newDigit3 = digit3.sort((a, b) => a - b);
console.log(newDigit3);
console.log(digit3);

const digit4 = [ 5, 8, -3, 1, 10, 23];
const newDigit4 = digit4.sort((a, b) => b - a);
console.log(newDigit4);
console.log(digit4);

// ----------------------------------------

// ამოცანა 1

const colors_arr = ["Blue", "red", "Yellow", "Green", "Black"];
const newColors_arr = colors_arr.slice(1, 4);
console.log(colors_arr);
console.log(newColors_arr);


// ამოცანა 2

const num_arr = [10, 20, 30, 40, 50];
const newNum_arr = num_arr.splice(2, 2);
console.log(num_arr);
console.log(newNum_arr); 

// ამოცანა 3

const sum_arr = [5, 10, 15];
const arrSum = sum_arr.reduce((acc, elm) => acc + elm, 0);

console.log(arrSum);

// ამოცანა 4

const arr_Num = [45, 3, 22, 100, 8];
const arr_Zrd = arr_Num.sort((a, b) => a - b);
// const arr_klebadoba = arr_Num.sort((a, b) => b - a);
// console.log(arr_Num);
console.log(arr_Zrd);
// console.log(arr_klebadoba);


// ---------------------------------------

// 1. The Sorting Hat (Harry Potter)

const students_names = ["Harry", "Hermione", "Ron", "Draco"];
const students_house = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];


const sortedStudents = students_names.map(student => {
  const randomIndex = Math.floor(Math.random() * students_house.length); 
  const randomHouse = students_house[randomIndex]; 
  return `${student} - ${randomHouse}`;
});
console.log(sortedStudents);

// 2. The Pokémon Filter

const pokemon = [ 
    {name: "Pikachu", CP: 320},
    {name: "Charizard", CP: 900} 
];
const pokemon_filter = pokemon.filter((el) => el.CP > 500);

console.log(pokemon_filter);

// 3. Avengers Assemble (Reduce)

const avergers = [
  {hero: "Iron man", budget: 5000},
  {hero: "Hulk", budget: 2000}
];

const totalBudget = avergers.reduce((acc, elmnt) => {
  return acc + elmnt.budget;
}, 0);
console.log("Total budget:", totalBudget);

// 4. The Lost Treasure Map

const direction = [`left`, `right`, `forward`];
const directionMap = direction.map((direction) => " Move " + direction);

console.log(directionMap);

// 5. The Jedi Archives

const JediNames = ["Luke", "Obi-Wan", "Yoda", "Anakin"];
const findYoda = JediNames.find((master) =>
master === "Yoda");
  if(findYoda){
  console.log("Master found!");
  }else{
    console.log("Could not find the master.");
  }

console.log(findYoda);

// 6. The One Ring Inventory

const Inventory = [];
const pushInventory = Inventory.push("Lembas Bread", "Ring");
const popInventory = Inventory.pop();

console.log(Inventory);

// 7. Spider-Man’s Web of Crime

 const crimeLocation = ["Times Square", "Central Park", "Brooklyn"];

//  ესე დაწერილი საწყის მასივსაც ცვლის
// const crimeLocation_Alph = crimeLocation.sort();

//ესე დაწერილით საწყისი მასივი უცვლლეი რჩება
const crimeLocation_Alph = [...crimeLocation].sort();

console.log(crimeLocation);
console.log(crimeLocation_Alph);

// 8. The Time Stone (Array Slicing)

const arr_mysticalOccurrences = [ "Dormammu Attack", "Multiverse Glitch", "Ancient One's Warning", "Time Loop", "Portal Opening"];

const mysticalOccurrences = arr_mysticalOccurrences.slice(2, 5);

console.log(mysticalOccurrences);

// 9. Matrix Reloaded: Data Processing

const matrix = [3, 7, 15, 22];
const matrixBinary = matrix.map((toStr) => toStr.toString(2));
//  ჯავასკრიპტში რიცხვი ორობითში გადასაყვანად გამოიყენება .toString(2)

const forReduce = matrix.reduce((a, b) => (a > b ? a : b), matrix[0]);

console.log(matrixBinary);
console.log(forReduce);


// 10. Cyberpunk City Data Processing

const ArraY = [99, 135, 76, 200, 150, 89];

const array_hexadecimal = ArraY.map((Hex) => Hex.toString(16));

console.log(array_hexadecimal);

const forArraYFilter = ArraY.filter((max) => max > 100);

console.log(forArraYFilter);


const forArraYReduce = ArraY.reduce((acc, current) => acc + current);

console.log(forArraYReduce);


const forArraYFind = ArraY.find((abv) => abv > 150 );

console.log(forArraYFind);


const cleanData = ArraY.filter(num => num >= 80);

console.log(cleanData);












































































































































































































































