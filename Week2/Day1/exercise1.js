let addressNumber = 5;
let addressStreet = "Ben Yehuda";
let country = "Tel Aviv";

let global_address = "I live in" + addressStreet +" "+ addressNumber + country
console.log(global_address)

let by = 1994;

let fb = 2027;

let op = fb-by;

console.log(`I will be ${op} in ${fb}`);

// ARRAYS : COMPLEX DATA TYPE

let userCart = ["shampoo", "perfume", "toothpaste"];

// retrieve perfume

console.log(userCart[1]);

// retrieve last time from the array in 2 ways
console.log(userCart[2]);
console.log(userCart[userCart.length -1]);

//exactly the same as doing 
//console.log(userCart[3-1]);

userCart.push("medicine");


let userCart = ["shampoo", "perfume", "toothpaste"];
// SPLICE(at what index do I want to delete or add an item, how many times do i want to deleted)
// i want to delete perfume
userCart.splice(1,1);
// ^ this deletes perfume 

let pets =["cat", "dog", "duck", "rabbit"];
console.log(pets[1]);
pets.splice(3,1);
pets.push("horse");
console.log(pets.length);


