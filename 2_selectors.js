// GETELEMENTBYID

console.log(document.getElementById('header-Title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// Change Text

headerTitle.textContent = 'Time for a change'; // will show even though display: none (123 example)
headerTitle.innerText = 'Another change';  // will not show 123 example

headerTitle.innerHTML = '<h3>Hello</h3>'; // Puts it inside an element

// STYLE CHANGES

headerTitle.style.borderBottom = 'solid 3px #000' // Will put a black border at the bottom of h1 

// GET ELEMENTS BY CLASS NAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(item[1]);
items[1].textContent = 'Hello 2' // change text
items[1].style.fontWeight = 'bold'; // bolds text
items[1].style.backgroundColor = 'yellow'; // change background color

// NOT GOING TO WORK! Because it's an html collection or it's an array. We have to actually loop through

items.style.backgroundColor = '#f4f4f4'; // NOT GOING TO WORK

// This will work instead. Itirate with a FOR LOOP

for(var i = 0; i < item.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

// GET ELEMENTS BY TAG NAME

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.background = 'yellow';

for(var i = 0; i < li.length; i ++){
    li[i].style.background = '#f4f4f4';
}
