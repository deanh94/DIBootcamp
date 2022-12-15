            // SYNTAX //
// for (variable_initialize; condition; change_variable) {
    // code block to be executed
// }

            // ARGUEMENTS //
// Variable_initialize(OPTIONAL) - written one time before the execution of the for-loop code. 
// this is used to define the counter variable you might use to control the flow.

// Condition - this statement defines the condition on which the control flow (each iteration)
// of the loop depends on.

// Change_variable - this statement is executed after each iteration of the loop. can be used to change the variable
// variable_initialize is optional since you can use an already initialized variable instead. 
//Do not forget the ; following the variable_initialize even if you decide to skip it!

            // DONT USE CONST //

            // EXAMPLES //
// for (var temp = 0; temp < 5; temp++) {
//     // Runs code 5 times, with values of temp 0-4
//     console.log(temp + ':Institute');
// };

            // LOOPS //
// Statement 1: marks the start of a for loops
// Statement 2: defines the condition for executing the code block. Must return a boolean value.
// Statement 3: is executed (every time) after the code block has been executed.
// When the condition becomes false, the loop terminates, marking the end of its life cycle.

// for (let i = 0; i < 2; i++) {
//     // will log all #'s from 0-1(not 2)
//     console.log('the current number is ' + i);
// };

// for (let i = 0; i <= 10; i++) {
//     // will log all #'s from 0-10(including 10)
//     console.log(i);
// }

    // will iterate through array IMPORTANT//
// let arr = [1, 4, 7, 10];
// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
            // EXERCISE 1 //
for (let i = 0; i <= 15; i++) {
    if(i % 2 == 0) {
        console.log(i + ' is even.');
    } else {
        console.log(i + ' is odd.');
    }
};
            // FOR/IN LOOP //
//SYNTAX - For/In Loop (Object)
let person = {fname:"John", lname:"Doe", age:25};
for (let i in person) {
  console.log(i); //fname lname age
  console.log(person[i]); // John Doe 25
};
//SYNTAX - For/In Loop (Array)
let colors = ['blue', 'yellow', 'red'];
for (let i in colors) {
    console.log(i); //0 1 2
    console.log(colors[i]); //blue yellow red
};