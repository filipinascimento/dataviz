import * as d3 from 'd3';

window.d3 = d3;

// Define an array of objects representing people with their height, font, and name.
const people = [
    { height: 1.65, font: 'Arial', name: 'Ana' },
    { height: 1.71, font: 'Courier', name: 'Andrew' },
    { height: 1.75, font: 'Helvetica', name: 'Vijay' },
    { height: 1.79, font: 'Times', name: 'Diogo' },
    { height: 1.69, font: 'Tahoma', name: 'Jin' },
    { height: 1.62, font: 'Verdana', name: 'Alice' },
    { height: 1.81, font: 'Futura', name: 'Raphael' },
];

// ----------------------------------------------------------------------
// Creating paragraph elements based on the data:
// 1. Select the <body> element.
// 2. Select all <p> elements within the body (initially, there are none).
// 3. Bind the 'people' data to these selections.
// 4. Use the enter() selection to append a new <p> for each data item that doesn't have a corresponding element.
// ----------------------------------------------------------------------
d3.select('body')
  .selectAll('p')
  .data(people)
  .enter()
  .append('p');

// // ----------------------------------------------------------------------
// // Updating the paragraph elements with text and style based on data:
// // Here we modify each <p> element to display a personalized message and dynamic styling.
// // ----------------------------------------------------------------------
d3.select('body')
  .selectAll('p')
  .text(d => {
    // Set the text content using a template literal.
    // For example: "The height of Ana is 1.65m."
    return `The height of ${d.name} is ${d.height}m.`;
  })
  .style('font-size', d => {
    // Dynamically calculate the font size based on the height value.
    // The formula: ((height - 1.5) * 50) + 10, gives a size in pixels.
    return ((d.height - 1.5) * 50 + 10) + 'px';
  })
  .style('font-family', d => {
    // Set the font family as specified in the data object.
    return d.font;
  });
