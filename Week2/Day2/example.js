let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};
userCart["username"] = "Josh";
let numberPear = userCart["cart"]["pear"];
let pricePerPear = userCart["prices"]["pear"];
let totalPricePear = numberPear * pricePerPear;

//1
userCart["prices"]["pear"] *=1.17
console.log(userCart);

//2
//3
//let userChoice = prompt("What fruit").toLowerCase();
console.log(userChoice);

//4
let userFruitPrice = userCart["prices"][userChoice]
console.log(`A ${userChoice} cost ${userFruitPrice}`);


//Condition 1

let bankAmt = 20000;

//condition 2
if (bankAmt >= 20000) {
	//if the condition is true
	//statement
	console.log("I can buy a car")

} else if (bankAmt ==18000){
	//if the conditions 1 is false
	//and the condition 2 is true
}

} else {
	// if all the conditions above are false
	// add this statement and not the if statement
	console.log("I won't buy a car")
};




let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

	//1. If the user is SignedIn - show him his name and password
	//2. If not - alert the user "you need to sign in"

if (isUserSignedIn = true) {
	console.log(username,password);
} else {(alert`you need to sign in`)
};










