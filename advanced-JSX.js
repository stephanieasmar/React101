// A multi-line JSX expression should always be wrapped in parentheses:

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
    	<blockquote>
  			<p>
    			What is important now is to recover our senses.
  			</p>
  			<cite>
    		<a target="_blank" href="http://bit.ly/1LvSLUA">
      	Susan Sontag
    		</a>
  			</cite>
			</blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);




// Using a Variable Attribute in a Component
// ******YOU CAN, AND OFTEN WILL, INJECT JAVASCRIPT INTO JSX INSIDE OF A RENDER FUNCTION********

import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: "Excellent Owl",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    );
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);