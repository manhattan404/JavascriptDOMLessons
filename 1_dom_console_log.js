// Shows properties in the document object
// console.dir(document);

// EXAMINE THE DOCUMENT OBJECT

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

// If you want to change something

document.title = 123; // Put inside quotes in browser console

console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.all); //Gives in array of everything that's in the DOM

console.log(document.all[10]); // Grabing the index of 10 if array returns indeces 

document.all[10].textContent = 'Hello'; // changing the text content of 10th index 

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);