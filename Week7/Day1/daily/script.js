// const {largeNumber} = require ("./main");
// // import { largeNumber } from "./main.js";

// const a = largeNumber;
// const b = 5;

// console.log(a + b);

const server = http.createServer( () => {
    console.log('I am listening....');
 });
 server.listen(3000);

 console.log(server);