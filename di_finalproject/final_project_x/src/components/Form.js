import React, {useState} from 'react';

function  Form() {
const [person, setPerson] = useState({username: '', age: null,weight: null})
 const myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    const newPerson = {...person, [nam]: val};

    setPerson(newPerson)
  }

  const handleClick =() => {
      console.log(person)
  }
    return (
      <form>
      <h2>Hello {person.username}</h2>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={myChangeHandler}
      />
            <p>Enter your weight:</p>
      <input
        type='text'
        name='weight'
        onChange={myChangeHandler}
      />
      <button onClick={handleClick}>Send</button>
      </form>
    );
}
export default Form