// Creating DOM Elements

var newDiv = document.createElement('div');

console.log(newDiv); // this will log a single <div>

// You can add a class to this <div>
newDiv.className = 'hello'; // This will create a class name for the <div>
// <div class='Hello'></div>

// to add an ID
newDiv.id = 'Hello 1'; // this will add an ID to the <div>
// <div class='Hello' id='hello 1'></div>

// Adding attribute
newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv); // <div class='Hello' id='Hello 1' title='Hello div'></div>

// Create a text node

var newDivText = document.createTextNode('Hello World');
// now you have this text node, you want to append it to the div 
newDiv.appendChild(newDivText); 
console.log(newDiv);
// <div class='Hello' id='Hello 1' title='Hello div'>Hello World</div>

// But how do you insert it to the DOM (this only exist in JS so far...)
// figure out where to put it

var container = document.querySelector('header .container'); // grabing container
var h1 = document.querySelector('header .h1'); // grabbing h1 
// grab the container
container.insertBefore(newDiv, h1); // This will take in two parameters; what we're inserting(newDiv), what we're inserting before(h1)
// 'Hello World' will appear before 'Item Lister' (h1)

// Change the font size...
newDiv.style.fontSize = '30px'; 

