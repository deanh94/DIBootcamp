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
const age = prompt("Please enter your age.");
if (age > 18) {
    alert("enjoy your ride")
} else if (age == 18) {
    alert("congrats on first year of driving")
} else if (age < 18) {
    alert("sorry you're too young")
};