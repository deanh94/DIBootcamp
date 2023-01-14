                        // EXERCISE 1 //
let numbers = [123, 8409, 100053, 333333333, 7];
// // 1. Loop through the array above and determine whether or not each number is divisible by three.
// // 2. Each time you loop console.log true or false.

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

                        // EXERCISE 2 //
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
 }
// 1. Prompt the student for their name.
let name = prompt("What is your name?");
// 2. If the name is in the object, console.log the name of the student and the country they come from.
if(name in guestList) {
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
    console.log("Hi, I'm just a guest.");
}


                        // EXERCISE 3 //
let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.
// 1. Console.log the sum of all the numbers in the age array.
let life = 0;
for(let i = 0; i < age.length; i++) {
    life += age[i];
}
console.log(life);
// 2. Console.log the highest age in the array.
let oldest = age[0];
for(let i = 0 ; i < age.length; i++) {
    if(age[i] > oldest) {  //if the current index is larger than the current value of oldest
        oldest = age[i];  // then reset the value of oldest to the new larger value in age[i]
    }
}
console.log(oldest);
