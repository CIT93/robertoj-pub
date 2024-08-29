// const myName = "RJ";
// const myAge = 23.243255;


// const JsIsWeird = myName + myAge;
// /* I belive it will concatenate into RJ23 since I have no space
// after the J. THe data type will be a string becuase if you 
// concatentate it outputs a string i think */

// console.log(JsIsWeird);
// console.log(typeof JsIsWeird);
// console.log(typeof myAge);

/*Order of precedence determines the sequence in which operations are performed in an expression. 
Operators with higher precedence are evaluated before those with lower precedence. 
operator precedence from highest to lowest
1 Parentheses
2 Exponentiation
3 Multiplication, Division, and Remainder
4 Addition and Subtraction
5 Comparison Operators
6 Logical Operators
*/
// const result = (3 + 4) * 2;
// console.log(result);

// // const amIhungry = false;
// // console.log(typeof amIhungry);

// let myVar;
// console.log(typeof myVar);

// const myHeading = document.querySelector("h1");
// console.log(typeof myHeading);

// const myPet = "cat";
// const myPetName = "Monkey";
// const myPetAge = 2;

// console.log("I have a " + myPet + " her name is " + myPetName + " and she is " + myPetAge + " years old");
// const outputString = (`I have a ${myPet} her name is ${myPetName} and she is ${myPetAge} years old`);
// myHeading.textContent = outputString;

// // The error is that you do not have the added defer attribute in your script tag.


let cardonFootprintPoints = 0;
const numberInHousehold = 3;

if (numberInHousehold === 1) {
    cardonFootprintPoints = cardonFootprintPoints + 14;
} else if (numberInHousehold === 2) {
    cardonFootprintPoints = cardonFootprintPoints + 12;
} else if (numberInHousehold === 3) {
    cardonFootprintPoints = cardonFootprintPoints + 10;
} else if (numberInHousehold === 4) {
    cardonFootprintPoints = cardonFootprintPoints + 8;
} else if (numberInHousehold === 5) {
    cardonFootprintPoints = cardonFootprintPoints + 6;
} else if (numberInHousehold === 6) {
    cardonFootprintPoints = cardonFootprintPoints + 4;
} else if (numberInHousehold > 6) {
    cardonFootprintPoints = cardonFootprintPoints + 2;
}
console.log(`Based on the number of member in the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.`);
