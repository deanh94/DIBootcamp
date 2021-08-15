import logo from './logo.svg';
import './App.css';
import React from 'react';
// const myelement = React.createElement('h1', {}, 'I do not use JSX!'); EX2

// const myelement = <h1>I Love JSX!</h1>; EX3
// const sum = 5 + 5; EX3
// const myelement = ( EX4
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// )
// const listItems = ( EX4
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// )
//  const object = {    EX6
//    first_name: 'Bob',
//    last_name: 'Dylan'
//  };
const animals = ['Horse','Turtle','Elephant','Monkey'];

animals.map()


function App(getAnimals) {
 return ( 
   <div>
     <ul id="animals">
       <li>{animals}.join</li>
     </ul>
   </div>
  //  <div>   ////////////////EX 6
  //  <h1>My name is {object.first_name}</h1>
  //  <h2>My lastname is {object.last_name}</h2>
  //  </div>  
  //  <form> EX5
  //    <input type="text"></input>
  //  </form>
/* <span>{listItems}</span> EX4*/
  //  <span>{myelement}</span> EX4
  //  <h1>React is {sum} times better with JSX</h1> EX3
/* <span>{myelement}</span> EX3*/
//  <span>{myelement}</span> EX2
/* <h1>Hello World!</h1> EX1 */ 
  );
}



export default App;
