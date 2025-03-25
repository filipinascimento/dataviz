// D3.js DOM Manipulation: Essential Guide

// (Assuming D3 is already loaded via CDN)
// Creating and Appending Elements
const newDiv = d3.select('body')
  .append('div')
  .text('Hello D3.js!')
  .attr('id', 'mainDiv')
  .attr('class', 'container')
  .style('background-color', '#e0f7fa')
  .style('padding', '10px')
  .style('border-radius', '8px');

// Updating Text Content
newDiv.text('Updated text using D3.js');

// Adding Nested Elements
const nestedP = newDiv.append('p')
  .text('Nested paragraph created with D3');

// Setting Attributes
nestedP.attr('class', 'nested-text');

// Styling Elements
nestedP.style('color', 'blue')
  .style('font-weight', 'bold');

// Querying Elements
// By Tag
const divs = d3.selectAll('div');
console.log('All div elements:', divs);

// By Class
const byClass = d3.select('.container'); // returns first match
console.log('Element with class container:', byClass);

// By ID
newDiv.attr('id', 'mainDiv');
const byId = d3.select('#mainDiv');
console.log('Element with id mainDiv:', byID);

// Manipulating Attributes
newDiv.attr('class', 'container highlight');

// Manipulating Styles
newDiv.style('background-color', '#cce5ff')
  .style('margin', '10px');

// Removing Elements
const removeBtn = d3.select('body').append('button')
  .text('Remove paragraph')
  .on('click', () => nestedP.remove());

// Element Properties (input value)
const inputEl = d3.select('body')
  .append('input')
  .attr('type', 'text')
  .attr('value', 'Initial value');

const showValueBtn = d3.select('body').append('button')
  .text('Show Input Value')
  .on('click', () => alert(inputEl.property('value')));

// Handling Events
newDiv.on('click', () => alert('Div clicked with D3.js'));
