let questionMe = prompt("Hey, do you like pizza?");
console.log(questionMe);


let myArray = ["Hey", "do", "you", "like", "pizza?"];
let arrayLength = myArray.length;
let bigStar = ``
for (let i = 0; i < arrayLength; i++) {
	console.log(myArray[i]);
	console.log(bigStar);
	bigStar += `*`
	console.log(bigStar);
}

