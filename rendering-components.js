// APPLYING A COMPONENT IN A RENDER FUNCTION
// When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component:

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}


// NAVBAR COMPONENT (assumed to be in a separate file = './NavBar,js')
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}


// *****EXPORTING COMPONENTS:***** //
// When you import a variable from a file that is not the current file, then an import statement isn't quite enough. 
// You also need an export statement, written in the other file, exporting the variable that you hope to grab.

// export comes from ES6's module system, just like import does. 
// export and import are meant to be used together, and you rarely see one without the other.

// There are a few different ways to use export. In this course, 
// we will be using a style called "named exports." Here's how named exports works:

// In one file, place the keyword export immediately before something that you want to export. 
// That something can be any top-level var, let, const, function, or class:



// EXPORTING
// Manifestos.js:

export const faveManifestos = {
  futurist: 'http://bit.ly/1lKuB2I',
  SCUM:     'http://bit.ly/1xWjvYc',
  cyborg:   'http://bit.ly/16sbeoI'
};

export const alsoRan = 'TimeCube';


// IMPORTING
// App.js:

// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);