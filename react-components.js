// React applications are made out of components.
// What's a component?
// A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.



// The below code creates and renders a new React Component:

// The below line of code creates a new variable. That variable's name is React, and its value is a particular, imported JavaScript object:
// This imported object contains methods that you need in order to use React. The object is called the React library.
import React from 'react';
// The methods imported from 'react-dom' are meant for interacting with the DOM...ex: ReactDOM.render().
// The DOM is used in React applications, but it isn't part of React. After all, the DOM is also used in countless non-React applications. 
// Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.
import ReactDOM from 'react-dom';
// every component must come from a component class. A component class is like a factory that creates components. 
// If you have a component class, then you can use that class to produce as many components as you want.
// To make a component class, you use a base class from the React library: React.Component.
// What is React.Component, and how do you use it to make a component class?
// React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. 
// You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}
class MyComponentClass extends React.Component {
// A component class is like a factory that builds components. It builds these components by consulting a set of instructions, 
// which you must provide. These instructions should take the form of a class declaration body. 
  render() {
// A render method must contain a return statement. Usually, this return statement returns a JSX expression
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
// You've already seen one of the methods contained in the React library: React.createElement(). 
// Recall that when a JSX element is compiled, it transforms into a React.createElement() call.




// REACT COMPONENT CLASS INSTANCES:
<MyComponentClass />
// To make a React component, you write a JSX element. 
// Instead of naming your JSX element something like h1 or div like you've done before, give it the same name as a component class. 
// Voilà, there's your component instance!
// JSX elements can be either HTML-like, or component instances. 
// JSX uses capitalization to distinguish between the two! 
// That is the React-specific reason why component class names must begin with capital letters. 
// In a JSX element, that capitalized first letter says, "I will be a component instance and not an HTML tag."
