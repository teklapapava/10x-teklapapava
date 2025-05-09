// 1. Car Showroom Database 🚗
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  getInfo: function(){
    return `${this.brand} ${this.model} ${this.year}`;
  }  
};

console.log(car.getInfo());
console.log(car.brand);

car.year = 2023;

delete car.model;

console.log(car);

// 2. Virtual Assistant – Meet the User! 💬
const aboutMe = {
    name: "Tekla",
    age: 23,

    greet: function(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    }
}

console.log(aboutMe.greet());

// 3. Student Dashboard 🎓
const students = {
    name: "Tekla",
    age: 23,
    grades: [46, 30, 25, 27],
}

console.log(Object.keys(students));
console.log(Object.values(students));
console.log(Object.entries(students));


for(let [key, value] of Object.entries(students)){
    console.log(`${key}: ${value}`);
}

// 4. The Online Bookstore 📚
function Book (title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
};

const Book1 = new Book("Harry Potter", "J.K. Rowling", 1997);

const Book2 = new Book("The Knight in the Panther's Skin", "Shota Rustaveli", "XII")



console.log(Book1.title);
console.log(Book1.author);
console.log(Book1.year);


console.log(Book2.title);
console.log(Book2.author);
console.log(Book2.year);

// class and constructor() method

class Person{
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
}

const teklaInfo = new Person("Tekla", 23);
console.log(teklaInfo);

//5. Virtual Pet Adoption Center 🐶

class Animal  {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
   
    makeSound(){
        console.log("Animal Sound")
    }
}

const pet = new Animal("osti", "Dog");
pet.makeSound();

//  <!-- 6. Secure Banking System 🏦

class BankAccount  {
    #balance;
    constructor(){
         this.#balance = 0;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        this.#balance -= amount;
    }
    getBalance(){
        console.log(this.#balance)
    }
}

const BnkAcount = new BankAccount();
BnkAcount.deposit(100);
BnkAcount.withdraw(30);
BnkAcount.getBalance();



// <!-- 7. Employee Management System 👨‍💼

class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    
    getDetails(){
        console.log(`Name: ${this.name}, Salary: ${this.salary}`)
    }
}

class Manager extends Employee {
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Salary: ${this.salary}, department: ${this.department}`);
    }
}

const emp = new Employee("Tekla", 500);
emp.getDetails();

const mng = new Manager("Tekla", 300, "HR");
mng.getDetails();


// <!-- 8. Vintage Car Age Calculator 🚘

function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
   
Car.prototype.age = function(){
    const currentlyYear = new Date().getFullYear();
    return currentlyYear - this.year;
}


const cars = new Car("Mercedes", 1967);
console.log(cars.age());


// constructor function and prototype

function Animals (name, species){
    this.name = name;
    this.species = species
}

Animals.prototype.makeSound = function(){
    console.log(`I am a ${this.species}, named ${this.name}`)
}

const dog = new Animals("Osti", "Dog");
dog.makeSound();

const cat = new Animals("Hito", "Cat");
cat.makeSound();


// 9. Shape Calculator for Architects 🏗️

class Shape {
    getArea(){

    };
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this .radius * this.radius
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
}

const circle = new Circle(5);
console.log("Circle area:", circle.getArea());

const rectangle = new Rectangle( 4, 6);
console.log("Rectangle area:", rectangle.getArea());

// <!-- 10. E-Commerce Product Management System 🛒

class ECommerceProduct {
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
        applyDiscount(percent){
            this.price -= this.price * (percent / 100);
        }

        checkAvailability(stock){
            this.inStock = stock > 0;
        }
}

class ElectronicsProduct extends ECommerceProduct {
    constructor(name, price, category, warrantyPeriod){
        super(name, price, category);
        this.warrantyPeriod = warrantyPeriod;
    }
    applyDiscount(percent){
        if(percent > 30){
            percent = 30;
        }
        this.price -= this.price * (percent / 100);
    }
}

const book = new ECommerceProduct("Book", 50, "Books");
book.applyDiscount(10);
book.checkAvailability(5);

console.log(book);


const laptop = new ElectronicsProduct("Laptop", 1000, "Electronics", "2 years");
laptop.applyDiscount(50);
laptop.checkAvailability(3);
console.log(laptop);




// // more exercises for class and constructor 


// class Animal {
//     constructor(name, species){
//         this.name = name;
//         this.species = species
//     }

// }

// Animal.prototype.describe = function(){
//     console.log(`this is ${this.name}, which belongs to the species ${this.species}`)
// }


// const myDog = new Animal("BOB", "Dog")
// myDog.describe();



// class Car{
//     constructor(brand, model, year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
// }

// Car.prototype.getInfo = function(){
//     return`${this.brand} ${this.model} released ${this.year}`
// }

// const myCar = new Car("Toyota", "Corola", 2015);
// console.log(myCar.getInfo());
// // myCar.getInfo();


























