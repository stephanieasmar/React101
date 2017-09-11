// Information that gets passed from one component to another is known as "props." 

// Every component has something called props.
// A component's props is an object. It holds information about that component.
// To see a component's props object, you use the expression 'this.props'
// Most of the information in this.props is pretty useless! But some of it is extremely important

// EXAMPLE OF this.props BEING USED INSIDE A RENDER FUNCTION:
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}

// *****************

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2> {stringProps} </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <PropsDisplayer />,
  document.getElementById('app')
)



// You can pass information to a React component.
// How? By giving that component an attribute.
// To pass information to a component, you need a name for the information that you want to pass.
// That name is called an 'attribute'

<MyComponent foo="bar" />

// If you want to pass information that isn't a string, then wrap that information in curly braces.
//  Here's how you would pass an array:

<Greeting myInfo={["top", "secret", "lol"]} />