							//exercise 1 

//function infoAboutMe(myName, myAge, myHobbies){
//	return `My name is ${myName}, I am ${myAge}. I enjoy ${myHobbies}`
//}

//let result = infoAboutMe("Dean", 27, "skating and gaming")
//console.log(result)


							//exercise 2

function checkDriverAge(checkAge){
	if (checkAge < 18) {
		console.log("Sorry, you are too young to drive this car. Powering off")
	}
	if (checkAge == 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!")
	}
	if (checkAge > 18) {
		console.log("You are old enough to drive, Powering On. Enjoy the ride!9")
	}	
	return `I am ${checkAge} years old`
}

console.log(checkDriverAge(18));

							//exercise 3

function checkNumber(){
	for (let i = 0; i > 100; i++) {
		if (i % 2 == 0){
			console.log("the number is even");
		}
		else {
			console.log("the number is odd");
		}
	}

	console.log(checkNumber(i));