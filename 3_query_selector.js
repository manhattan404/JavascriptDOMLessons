// QUERYSELECTOR 
// Only grabs one. Cannot grab a lot of things 

var header = document.querySelector('#main-header'); // You can select anything such as tags, class, list item // # = id
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';  // adds value to the input // As stated it will only grab the first one and ignore the submit button 

var submit = document.querySelector('input[type="submit"]'); // targets the 2nd button
submit.value="SEND" // change the text from 'Submit' to 'Send'

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; // it will only get the first one on the page

var lastItem = document.querySelector('.list-group-item:last-child'); // will select the last item on the list
lastItem.style.color = 'blue'; // will change the color of the last item into blue

var secondItem = document.querySelector('.list-group-item:nth-child(2)'); // if you want to select a specific list
secondItem.style.color = 'coral';

// QUERY SELECTORALL //

var title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent = 'Hello';

var odd = document.querySelector('li:nth-child(odd)'); // This is a css selector
for(var i = 0; i < odd.clientHeight; i++){
    odd[i].style.backgroundColor = '#f4f4f4'; // will make every other list turn to light grey
}

// You can do even numbers

var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.clientHeight; i++){
    odd[i].style.backgroundColor = '#f4f4f4'; // will make every other list turn to light grey
    even[i].style.backgroundColor = '#ccc'; // will change to dark grey
}