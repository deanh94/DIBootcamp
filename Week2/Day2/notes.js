// example 1
// let age = 10;

// if (age > 8) {
//     console.log("big boy");
// }

// example 2 
// const age = 20; 
// if (age > 18) {
//     console.log("im old enough");
// } else {
//     console.log("im a minor");
// }

//example 3
// const age = 30;
// if (age === 28) {
//     console.log("happy bday!")
// } else if (age > 28) {
//     console.log("lets drink")
// } else {
//     console.log("ur too young")
// };

//exercise 1 - make a keyless car
// car will let you drive only if over 18
// make it use prompt() and alert() and ask user for age. 
// if below 18, respond "sorry too young"
// if 18, "congrats on first year of driving"
// if over 18, "enjoy your ride"
// const age = prompt("Please enter your age.");
// if (age > 18) {
//     alert("enjoy your ride")
// } else if (age == 18) {
//     alert("congrats on first year of driving")
// } else if (age < 18) {
//     alert("sorry you're too young")
// };

// let fruit = 'Papayas';

// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
// }


// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     // wont be executed
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     // will be executed
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }


// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!');
//     // will be executed 
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// INTRODUCTION ON OBJECTS // 
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// person.weight = "150 lbs."
// person.name = "Mike";
// // console.log(person);
// // console.log(person.weight);
// // console.log(person.name);
// delete person.firstName;
// console.log(person);

//Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// const users = {
//     username : "admin",
//     password : "admin"
// };

// const database = [users];
// const newsfeed = [
//     website = {
//         username : "admin",
//         timeline : "007"
//     },
//     site = {
//         username : "admin1",
//         timeline : "1" 
//     },
//     login = {
//         username : "admin2",
//         timeline : "2"
//     }
// ];
// console.log(newsfeed);

// Regular expressions advanced next