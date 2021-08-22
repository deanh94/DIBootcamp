uncontrolled inputs

class Box extends React.Component (
    render() {
        return (
            <label>
                <input type="text" /> I love html 
                </label>
        );
    }
)

introducing Refs
<!-- refs help us acess DOM elements -->
class Box extends React.Component {
    fluffy = React.createRef()

    letsChange = () => {
        console.log(this.fluffy.current.value) 
    }

    render() {
        return(
            <label>
            <input type="text" ref={this.fluffy} onChange={this.letsChange} />
            i love html
            </label>
        )
    }


<!-- in the console log above, input value gets logged -->

import React from 'react';

import ReactDOM from 'react-dom';
import Box from './app.js';

ReactDOM.render(
    <Box />
    document.GetElementByID('root')
);
<!-- app.js -->


import React from 'react';

export default class Box extends React.Component {
  fluffy = React.createRef()

  letsChange = () => {
    console.log(this.fluffy.current.value)
  }

  render() {
    return (
      <label>
        <input type="text" ref={this.fluffy} onChange={this.letsChange} />
        i love html
      </label>
    )
  }
}