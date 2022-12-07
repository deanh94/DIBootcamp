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
