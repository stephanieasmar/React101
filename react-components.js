// React applications are made out of components.
// What's a component?
// A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.



// The below code creates and renders a new React Component:

// The below line of code creates a new variable. That variable's name is React, and its value is a particular, imported JavaScript object:
// This imported object contains methods that you need in order to use React. The object is called the React library.
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

// You've already seen one of the methods contained in the React library: React.createElement(). 
// Recall that when a JSX element is compiled, it transforms into a React.createElement() call.