//ex1
// function fruit("apple","banana"){

// }
// return sum;

//ex2
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3); // y=>x+y

//ex3
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) //(a) => (b) => a + b


//ex4
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

//dailychallenge
// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

