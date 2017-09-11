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



// RENDERING A COMPONENTS PROPS:

// Here's how to make a component display passed-in information:

// 1 - Find the component class that is going to receive that information.
// 2 - Include this.props.name-of-information in that component class's render method's return statement.
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Stephanie' />, 
  document.getElementById('app')
);


// PASSING PROPS FROM ONE COMPONENT TO ANOTHER:

// The most common use of props is to pass information to a component, 
// from a different component. You haven't done that yet, but it's very similar to what you've seen already.