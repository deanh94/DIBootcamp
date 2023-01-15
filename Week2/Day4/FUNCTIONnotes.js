                        // JAVASCRIPT FUNCTIONS //
// function addTwoNumbers(parameterOne, parameterTwo) {
//     var result = parameterOne + parameterTwo;
//     return result;
// }
// The code inside the function will be executed when you call the function.
// **When you call a function, you can pass along some values to it, these values are called arguments or parameters.

// *The first parameter we are passing is named parameterOne.

// *The second parameter we are passing is named parameterTwo.

// *These arguments can then be used inside off of the function.

// *You can send as many arguments as you like, separated by commas (,)

// **To use the arguments inside of the function, you must declare the arguments as variables when defining the function.

// *The variables and arguments must be in expected order. That is, the first argument gets assigned to the first variable.

addTwoNumbers(100, 200);

// The number 100 would be assigned to the variable parameterOne.
// The number 200 would be assigned to the variable parameterTwo.

function addTwoNumberFunctions(functionOne, functionTwo) {
    var functionAdditionResult = functionOne() + functionTwo();
    return functionAdditionResult;
}

function functionOneHundred() { return 100; }

function functionTwoHundred() { return 200; }

addTwoNumberFunctions(functionOneHundred, functionTwoHundred);

// A function definition consists of the function keyword, followed by:
// - The name of the function.
// - Optional: A list of parameters or arguments inside the parenthesis.

// SYNTAX 
function fntName() {
	//statements
}

// EXAMPLE
function drinkCoffee() {
	console.log("The user drinks coffee in the morning.");
}

// With Parameters
// Parameters(arguements) are used when defining a function. Use commas to separate params/arguments.
function myFunc(param1, param2, param3) {
    //statements
}
// Parameters are only recognized inside the function ! The parameters behave as local variables.
// EXAMPLE
function add(a, b) {
    return a + b;
  }
  
  let x = 5;
  let y = 7;
  
  console.log(add(x, y));

// CALLING/INVOKING A FUNCTION
// A function executes when  its called.
// EXAMPLE
function calculus () {
    console.log(1+2);
}

calculus();

// If the function has parameters, you invoke it with the function name, followed by the number of arguments corresponding to the number of parameters (inside the parentheses)
// Arguments are the values passed to the parameters, when the function is executed.

function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is "  + userAge);
}

userInfo("Sarah", 22); //My name is Sarah, my age is 22
userInfo("Ben", 40); //My name is Ben, my age is 40

function calculusSecond (a,b,c) {
    console.log(a+b+c);
}
calculusSecond(3,2,1);

// If a parameter is not provided, then its value becomes 'undefined'.
// A variable declared inside a function is only visible inside that function.
// LOCAL VARIABLE EXAMPLE
function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes

// undefined in the global scope
console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined

// GLOBAL VARIABLE EXAMPLE (VISIBLE IN ANY FUNCTION)
let ayColor = "blue"; // global variable
function userMoreInfo (userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge + ", I have " + ayColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes
console.log(ayColor); // blue

function favoriteColor () {
    console.log("My favorite color is " + ayColor);
}

favoriteColor(); //My favorite color is blue
// EXERCISE 1 
function parents(myAge, momAge, dadAge) {
	return parents;
}

parents(18, 36, 43.2);

// UP NEXT: 5. RETURN STATEMENTS (COURSE NOTES[FUNCTIONS])