import React from React;
import './App.css';

function App() {
  return (
    function BuggyCounter(props) {
      return <h1>{props.number}</h1>;
    }
  );
}

const element = parseInt(document.getElementById('number').element, 5)
element = isNaN(element) ? 0 : element;
element++;
document.getElementById('number').element = element;

console.log(App);
export default App;
