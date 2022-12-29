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
    // console.log("My " + ordinal_suffix_of(i) + "choice is " + colors[i]); // part 3 
};

                        // EXERCISE 3 //
// var n = prompt("Please enter your number."); 
// console.log(typeof n); // Part 1 answer: a string.
// while (n < 10) {
//     n++;
//     n = prompt("Not good enough");
// };

                        // EXERCISE 4 //
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
} // part 1 
console.log(building.numberOfFloors); // part 2 
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor); // part 3 
console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0]); // part 4 
console.log(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]); 
console.log(building.numberOfRoomsAndRent.dan[1] + 200); // part 5 

                        // EXERCISE 5 //
let family = {
    parents: ["Mom", "Dad"],
    kids: ["Samantha", "Sadie", "Samuella"]
}
for (let x in family) {
    console.log(x);
    console.log(family[x]);
};

                        // EXERCISE 6 //
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
for (let x in details) {
    console.log(x + " " + details[x]);
}

                        // EXERCISE 7 //
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
console.log(names);
const secretMessage = names.map((names) => names[0]).join(' ')
console.log(secretMessage);