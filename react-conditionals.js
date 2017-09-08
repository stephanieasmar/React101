// BELOW IS A BASIC EXAMPLE OF A REACT-STYLE CONDITIONAL STATEMENT:

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
    <img src={pics.kitty} />
  );
} else {
  img = (
  	<img src={pics.doggy} />
  );
}

ReactDOM.render(img, document.getElementById('app'))



// USING && CONDITIONALS:
// Like the ternary operator, && is not React-specific, but it shows up in React surprisingly often.
// In the last two lessons, you wrote statements that would sometimes render a kitty and other times render a doggy. 
// && would not have been the best choice for those lessons.
// && works best in conditionals that will sometimes do an action, but other times do nothing at all.


import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);