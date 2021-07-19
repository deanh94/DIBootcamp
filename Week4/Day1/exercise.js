// #1
//a = 3 

// #2
// a = 5 

// #3
// a = "hello"

//#4
// a = "test"

//#5
// a = 2+5 


// exercise 2
// function winBattle(){
//     return true;
// }

// let experiencePoints = winBattle()== true ? 10 : 1;
// console.log(experiencePoints); 


// exercise 3 & 4
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, i, arrColors) => {  
//     arrColors[i] = `${element} ${i+1}# choice is`;
// })
// console.log(colors);

// exercise 5

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["st","nd","rd","th"];
let arrWords = []
ordinal.forEach((element, i) => {
    arrWords.push(`${i+1} ${element}`);
    console.log(arrWords);
})
let j = 0;
colors.forEach((element, i, arrColors) => {
        if (j > 3)  j = 3;
        arrColors[i] = `${element} is ${arrWords[j]} choice`;
        j++
        console.log(colors);
})
