//EX1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//OUTPUT `I am John Doe from Vancouver, Canada. 49.2827, -123.1207`


//EX2

// const displayStudentInfo =
//             {studentObject: 'pencil', 
//             studentDesk:'wooden',
//             first: 'Elie',
//             last:'Schoppik',
// }
// const {studentObject, studentDesk, first, last} = displayStudentInfo;
// console.log(`I am ${first} ${last}, and I write with my ${studentObject} on my ${studentDesk} desk.`)


//EX3
//   const users = { user1: 18273, user2: 92833, user3: 90315 }
//   //console.log(Object.entries(users)); // part 1 

//  for (let [key, value] of Object.entries(users)) {
//       console.log(`${key}: ${value*2} `);

//    }



//EX4
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member); 
// result : object

//EX5
//  class Dog {
//      constructor(name) {
//        this.name = name;
//      }
//    };
//RESULT 2

//EX6
// PART 1 [2] === [2] //true
// {} === {} //true 

//PART 2 
// const object1 = { number: 5 }; 
// const object2 = object1;  
// const object3 = object2; 
// const object4 = { number: 5}; 
// object1.number = 4;
// RESULT 5

//PART 3
class Animal{
    constructor(name,type,color){
    this.name = name;
    this.type = type;
    this.color = color;
}
}
class Mammal extends Animal{
    constructor(name,type,color){
    super(name,type,color)
    }
    sound(){
        console.log(`Moo! I'm ${this.name} and I'm a ${this.color}${this.type}`);
    }
}
const cow = new Mammal('Shelly','cow','brown ');
cow.sound();