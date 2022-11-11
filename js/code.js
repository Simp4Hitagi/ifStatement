// 1st approach

// let num1 = 12;
// if (num1 > 13) {
//     document.write("Greater than 13");
// }
// else {
//     document.write("Less than 13");
// }

// using a function
// function isNumber(onlyNumber) {
//     if(Number.isFinite(onlyNumber)) {
//         document.write(`${onlyNumber} is a number`);
//     }else {
//         document.write(`${onlyNumber} is not a number`);
//     }
// }
// let myNumber = "23";
// isNumber(myNumber);


// isFinite for decimal integer
// Number is a class 


// Challenge
// function numCheck(justNum, _justNumTwo) {
    // logical and operator, argument values are taken by future variables, use brackets
//     if ((Number.isFinite(justNum)) && (Number.isFinite(_justNumTwo))) {
//         document.write(`${justNum} and ${_justNumTwo} are numbers and their sum is `, eval(`${justNum} + ${_justNumTwo}`) ) 
//     } else {
//         document.write(`${justNum} and ${_justNumTwo} are not numbers`)
//     }
// }

// let num = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));

// numCheck(num, num2);


// nested if statements
// let age = 17;
// let salary = 2500;
// if (age > 17) {
//     if (salary >= 5000) {
//         document.write("You qualify");
//     }
//     else {
//         document.write("You don't qualify")
//     }
// }
// shorthand if statement
// if((age > 17) && (salary >= 5000)) {
//     document.write("Your are qualified");
// }else {
//     document.write("You are not qualified");
// }

// switch statement

// let marks = 60;

// switch (true) {
//     case marks <= 49:
//         document.write("You failed");
//     break;
//     case (marks >= 50) && (marks <= 69):
//         document.write("You Passed");
//     break;
//     case (marks >= 70) && (marks <= 90):
//         document.write("Distinction");
//     break;
//     case (marks >= 91) && (marks <= 100):
//         document.write("You're awesome");
    
// }


// loops
// for loop

                        // i+=2
// for(let i = 0; i<10; i++) {
    // console.log(i);
    // if ((i % 2) === 0) {
        // }
        // break and continue
        // console.log(i);
        // if (i == 5) break;
        // if(i == 4) continue;
        // console.log(i);

// }


// for in
// let person = {
//     name: 'David',
//     surname: 'John',
//     subject: ['HTML 5', 'CSS3'],
//     address: {
//         streetName: 'pretoria rd',
//         country: 'South Africa',
//         complexName: 'PTA'
//     }
// }

// for (let data in person) {
//     if (data != 'address')
//     console.log(`${data}: ${person[data]}`);
    
// }
// or
// console.log(person.address)
// console.log(person);

// console.log(
//     `   
//     Name: ${person.name}
//     Surname: ${person.surname}
//     Street name: ${person.address.streetName}
//     `
// );

// console.log(person.contactDetails.cellphoneNumber)

// for of
// let numbers = [9, 8, 7, 6, 5, 34];

// for(let number of numbers) {
//     console.log(number);
// }
// for(let i =0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }

let count = 0;
let numbers = [9, 8, 7, 6, 5, 34];
while(true) {
    if(count < numbers.length){
        console.log(numbers[count]);
    }else {
        break;
    }
    count++;
}