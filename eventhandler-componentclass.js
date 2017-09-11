// ********** EVENT HANDLERS ON COPONENT CLASSES *********

// You can, and often will, pass functions as props. It is especially common to pass event handler functions.

// In the next lesson, you will pass an event handler function as a prop. 
// However, you have to define an event handler before you can pass one anywhere. 
// In this lesson, you will define an event handler function.

// How do you define an event handler in React?

// You define an event handler as a method on the component class, just like the render method. 
// Almost all functions that you define in React will be defined in this way, as methods in a class.

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);



// Button.JS:
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}

