function countBottles() {
	let totalBottles = prompt("How many bottles do we have on the wall?");
	while (isNaN(totalBottles)) {
		totalBottles = prompt("How many bottles do we have on the wall? Please enter a number");

	}
	totalBottles = Number(totalBottles);
	let fallenBottles = 1;
	for (let 1 = totalBottles; 1 >= 0 && fallenBottles <= totalBottles; ++1){
		printLyrics(totalBottles, fallenBottles);
		totalBottles -= fallenBottles
		++fallenBottles;
		if (fallenBottles > totalBottles) {
			console.log(`Now we have ${totalBottles} bottles of beer on the wall`);
		}
		else {
			console.log(`${totalBottles} bottles of beer on the wall`);
		}
	}
}
function printLyrics(totalBottles, fallenBottles) {
	console.log(`${totalBottles} bottles of beer on the wall\n${totalBottles} bottles of beer`);
	if (fallenBottles < 2) {
		console.log(`Take ${fallenBottles} down, pass it around`);
	}
	else {
		console.log(`Take ${fallenBottles} down, pass it around`);
	}
}
countBottles();