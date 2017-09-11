// ****USING EVENT LISTENERS IN A COMPONENT****
// Render functions often contain event listeners. Here's an example of an event listener in a render function:

import React from 'react';
import ReactDOM from 'react-dom';


class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}