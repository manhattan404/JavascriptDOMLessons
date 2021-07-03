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
