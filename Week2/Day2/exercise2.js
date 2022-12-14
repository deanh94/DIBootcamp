                       // EXERCISE 1 //
const language = prompt("What language do you speak?");

switch (language) {
    case "English":
    case "english": 
        console.log("Hello");
        break;
    case "French":
    case "french": 
        console.log("Bonjour");
        break;
    case "Hebrew":
    case "hebrew":
        console.log("Shalom");
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
};

                        // EXERCISE 2 // 
const grade = prompt("What is your grade?");

if (grade > 90) {
    console.log("A");
} if (grade >= 80 || grade == 90) {
    console.log("B");
} if (grade >= 70 || grade == 80) {
    console.log("C");
} else if (grade < 70) {
    console.log("D");
};

                        // EXERCISE 3 //
const words = prompt("Enter your hobby!");
if (words > 3 || !words.includes('ing')) {
    console.log('swimming');
} if (words > 3 || words.includes('ing')) {
    console.log('swimmingly');
} else if (words < 3) {
    console.log('swim');
}
