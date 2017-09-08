// .map in JSX

// The array method .map() comes up often in React. It's good to get in the habit of using it alongside JSX.
// If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first:

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>


// In the above example, we start out with an array of strings. 
// We call .map() on this array of strings, and the .map() call returns a new array of <li>s.
// On the last line of the example, note that {listItems} will evaluate to an array, 
// because it's the returned value of .map()! JSX <li>s don't have to be in an array like this, but they can be.



// FULL EXAMPLE HERE:

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{people}</li>);                   

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
