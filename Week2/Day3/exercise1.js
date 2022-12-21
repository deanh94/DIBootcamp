                        // EXERCISE 1 PART 1 //
const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); // 1. Write code to remove “Greg” from the people array.
    console.log(people); 

people[2] = "Jason"; // 2. Write code to replace “James” to “Jason”.
    console.log(people);

people.push("Dean"); // 3. Write code to add your name to the end of the people array.
    console.log(people);
let finder = people.indexOf("Mary"); // 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google. 
console.log(finder);
let copy = people.slice(1,3); // 5.
console.log(copy);
let confusion = people.indexOf("Foo"); // 6. the "-1" result means "no match found".
console.log(confusion); // new array will look like - ['Mary', 'Devon', 'Jason', 'Dean']

let last = people[3]; // 7. Create a variable called last which value is the last element of the array.
console.log(last);
                        // EXERCISE 1 PART 2 //
for (let i of people) { // 1. Iterate through the array - can do For/Of or For/In loop.
    console.log(i);
};

for (let i = 0; i < 5; i++) { // 2. Iterate through the array and stop at Jason. 
    if (i === 2) {
        break;
    };
    console.log(people[i]);
};
                        // EXERCISE 2 //
let colors = ["red","blue","green","yellow","orange"];
// for (let i in colors) {
//     console.log("My # " + (i) + " choice is " + colors[i]);  // part 2 
// };
for (var i = 0; i < colors.length; i++){
    (function ordinal_suffix_of(i) {
        var j = i % 10,
        k = i % 100;
            if (j == 1) {
                return i + "st"
            }
            if (j == 2) {
                return i + "nd"
            }
            if (j == 2) {
                return i + "rd"
            } else
            return i + "th"
    })
    console.log("My " + ordinal_suffix_of(i) + "choice is " + colors[i]); // part 3 
}
// let thingy = prompt("Please enter your number."); // EX 3 
