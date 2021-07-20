//EX1

// ------1------
//  const fruits = ["apple", "orange"];
//  const vegetables = ["carrot", "potato"];

//  const result = ['bread', ...vegetables, 'chicken', ...fruits];
//  console.log(result); // --- bread, carrot, potato, chicken, apple, orange 

// ------2------
//  const country = "USA";
//  console.log([...country]); --- ["U","S","A"]

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);  --- ,,


//EX2


// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
//dUsing the filter() method, congratulate only the Full Stack Residents.
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


    
// let users2 = users.map((value, index, users) => "Hello " + value.firstName);
    // console.log(users2);       //PART 1

// let greet = users.filter(user => user.role ==="Full Stack Resident");
// console.log(greet);
// let howdy = greet.map((value, index, users) => "Congrats! " + value.firstName + " "+ value.lastName);
// console.log(howdy);           //PART 2


//EX3
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let nerdWord = epic.reduce((acc , val) => {
//     console.log(`acc + val: ${acc + val}`);
//     return acc + val;
// });



//EX4
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
let chooser = students.filter(student => student.isPassed ===true);
console.log(chooser);
let congrats = chooser.map((value, index, students) => "Congrats " + value.name + " on passing the" + value.course + " course!!");
console.log(congrats);

    

