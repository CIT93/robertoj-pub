const myName = "RJ";
const myAge = 23.243255;


const JsIsWeird = myName + myAge;
/* I belive it will concatenate into RJ23 since I have no space
after the J. THe data type will be a string becuase if you 
concatentate it outputs a string i think */

console.log(JsIsWeird);
console.log(typeof JsIsWeird);
console.log(typeof myAge);

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
const result = (3 + 4) * 2;
console.log(result);

// const amIhungry = false;
// console.log(typeof amIhungry);

let myVar;
console.log(typeof myVar);

const myHeading = document.querySelector("h1");
console.log(typeof myHeading);