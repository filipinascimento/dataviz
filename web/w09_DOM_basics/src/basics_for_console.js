// DOM Manipulation: Essential Guide

// 1. Creating and Appending Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, DOM!';
document.body.appendChild(newDiv);

// 2. Updating Element Content
newDiv.textContent = 'Updated content!';

// 3. Manipulating Attributes
newDiv.setAttribute('id', 'mainDiv');
newDiv.setAttribute('class', 'container');

// 4. Manipulating Element Styles
newDiv.style.backgroundColor = '#f0f0f0';
newDiv.style.padding = '10px';
newDiv.style.borderRadius = '8px';

// 5. Adding Nested Elements
const nestedP = document.createElement('p');
nestedP.textContent = 'Nested paragraph';
nestedP.style.color = 'blue';
newDiv.appendChild(nestedP);

// 6. Querying Elements

// by Tag Name
const divs = document.getElementsByTagName('div');
console.log('All divs:', divs);

// by Class Name
const containers = document.getElementsByClassName('container');
console.log('Containers:', containers);

// by ID
const mainDiv = document.getElementById('mainDiv');
console.log('Element with id mainDiv:', mainDiv);

// by Query Selector
const firstParagraph = document.querySelector('p');
console.log('First paragraph:', firstParagraph);

// 7. Removing Elements
const btnRemove = document.createElement('button');
btnRemove.textContent = 'Remove paragraph';
btnRemove.onclick = () => nestedP.remove();
document.body.appendChild(btnRemove);

// 8. Element Properties (e.g., input value)
const inputEl = document.createElement('input');
inputEl.type = 'text';
inputEl.value = 'Type here';
document.body.appendChild(inputEl);

const btnShowValue = document.createElement('button');
btnShowValue.textContent = 'Show Input Value';
btnShowValue.onclick = () => alert(inputEl.value);
document.body.appendChild(btnShowValue);

// 9. Handling Events
newDiv.onclick = () => alert('Div clicked!');
