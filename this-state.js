// ***** SETTING INITIAL STATE ****** //
// A React component can access dynamic information in two ways: props and state.
// Unlike props, a component's state is not passed in from the outside. A component decides its own state.
// To make a component have state, give the component a state property. 
// This property should be declared inside of a constructor method, like this:
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />


// this.state should be equal to an object, like in the example above. 
// This object represents the initial "state" of any component instances



// ****** READING A COMPONENT'S STATE ******* //
// To read a component's state, use the expression this.state.name-of-property:

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = { title: 'Best App' }
  }

  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



// ************* UPDATE STATE WITH 'THIS.SETSTATE' *************
// A component can do more than just read its own state. A component can also change its own state.

// A component changes its state by calling the function this.setState().

// this.setState() takes two arguments: an object that will update the component's state, and a callback. 
// You basically never need the callback....

// this.setState() takes an object, and merges that object with the component's current state. 
// If there are properties in the current state that aren't part of that object, then those properties remain how they were.


import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green }
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
);