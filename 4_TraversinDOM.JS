// Traversing DOM

// Parent Nodes

var itemList = document.querySelector('#items');

//parentNode property
console.log(itemList.parentNode); // This will give id="main" beacuse it is the parent. h2 and li are siblings

// We can use itemList.parentNode as a selector...
itemList.parentNode.style.backgroundColor = '#f4f4f4'; //this will change the 'container' because it is the div='main'

// we can chain this...
console.log(itemList.parentNode.parentNode); // This will give the div class='container' because it is the parent of 'main'
// we can further chain this 
console.log(itemList.parentNode.parentNode.parentNode); // This will give <body> because it is the parent of container

// PARENT ELEMENTS (almost the same as ParentNode)

console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentNode.parentElement);

// CHILDREN/ childNodes

console.log(itemList.childNodes); // You will get a Node list or an array 
// 0 index will be 'text'. It represents empty space aka line breaks
// Using child nodes is not suggested beacuse it will also log line breaks = 'text'

// Use CHILDREN instead

console.log(itemList.children); // Now this is only going to print list items. I will not log the 'text'
// This will now be an HTML Collectio, not a Node list

// Logging a specific list
console.log(itemList.children[1]); // This will print 2nd item

// If you want to do something with that...
itemList.children[1].style.backgroundColor = 'yellow'; // will change background of Item 2 to yellow

// FirstChild (property)
console.log(itemList.firstChild); // This will log the 'text' node just like childNodes

// firstElementChild (You can use this instead)
console.log(itemList.firstElementChild); // This will give  the actual li

//You can take it and do something with it
itemList.firstElementChild.textContent = 'Hello 1'; // This will change the first item in list to 'Hello 1'

// If you want to take the last one
console.log(itemList.lastChild); // This will log a 'text' node

// Use this instead
console.log(itemList.lastElementChild); // this will log the last li

// Do something with it
itemList.lastElementChild.textContent = 'Hello 4' // This will change last item text to 'Hello 4'

// SIBLINGS

//nextSibling

console.log(itemList.nextSibling); // this will log 'text node'

//nextElementSibling
console.log(itemList.nextElementSibling); // This will log null because itemList doesn't have an actual sibling lol

// previousSibling
console.log(itemList.previousSibling); // will log 'text'
console.log(itemList.previousElementSibling); // will log h2

itemList.previousElementSibling.style.color = 'green'; //will change 



