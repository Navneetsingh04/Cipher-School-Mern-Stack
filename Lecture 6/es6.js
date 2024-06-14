// var x = 15;
// {
//     let x = 5;
//     // const x = 6;
//     // x=10;
//     console.log(x);
// }
// console.log(x);



// var x = function (x,y) {
//     return x + y;
// }
// console.log(x(5,6));



// const x = (x,y) => {
//     return x + y;
// }
// console.log(x(5,6));



// const x = (x,y) => x + y;
// console.log(x(5,6));



// const q1 = ["Jan","Feb","Mar"]
// const q2 = ["Apr","May","Jun"]
// const q3 = ["Jul","Aug","Sep"]
// const q4 = ["Oct","Nov","Dec"]

// // const year1 = [...q1]
// // console.log(year1);

// const year = [...q1, ...q2, ...q3, ...q4]
// console.log(year);



// const myNumbers = [10, 20, 30, 40, 50];
// let maxValue = Math.max(...myNumbers);
// console.log(maxValue);



// const myNumbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for(let num of myNumbers){
//     sum = sum +num;
// }
// console.log(sum);



// const str = "CipherSchools";
// let text = "";
// for(let ch of str){
//     text += ch + " ";
// }
// console.log(text);



// const fruits = new Map([["apples",100],["bananas",200],["oranges",300]]);
// console.log(fruits);
// console.log(fruits.get("bananas"));.



// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("a");

// console.log(letters);



// class Car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const car1 = new Car("Mercedes", 2020);
// const car2 = new Car("Porsche", 2024);
// console.log(car1);
// console.log(car2);



// const add = (a,b) => a + b;
// console.log(add(12,20));
// console.log(add(12));

// const add = (a,b = 20) => a + b;
// console.log(add(12));



// const myFunction = () => {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("This is inside promise.");
//             resolve();
//         }, 5000);
//     });
// };

// myFunction()
// .then(() => {
//     console.log("Resolved");
// })
// .catch(() => {
//     console.error("Rejected");
// });



// const person = {
//     first: "John",
//     last: "Doe",
//     age: 20,
//     eye: "blue"
// };

// let id = Symbol("id");
// person[id] = 140111;

// console.log(person);



// const add = (...args) => {
//     console.log(args);
// };
// console.log(add(10, 20, 30, 40, 50));



const add = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
};
console.log(add(10, 20, 30, 40, 50));