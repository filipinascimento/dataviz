/**
 * DOM Manipulation Examples
 * This file demonstrates DOM manipulation using vanilla JavaScript and D3.js
 */
import * as d3 from 'd3';
window.d3 = d3;
// ========================
// Vanilla JavaScript Examples
// ========================

/**
 * Select the container element where we'll add our vanilla JS examples
 * querySelector finds the first element matching the CSS selector
 */
const vanillaContainer = document.querySelector('#vanillaJS .example-container');

/**
 * Example 1: Selecting Elements
 * This function creates a complete example demonstrating different ways to select DOM elements
 */
function createSelectingElementsExample() {
  // Create the main container for this example
  const example = document.createElement('div');
  example.className = 'example-box';
  
  // Add a title to the example
  const title = document.createElement('h3');
  title.textContent = 'Selecting Elements';
  example.appendChild(title);
  
  // Create the demo list with items to select
  const list = createDemoList();
  example.appendChild(list);
  
  // Create buttons for different selection methods
  const buttonGroup = createSelectionButtons();
  example.appendChild(buttonGroup);
  
  return example;
}

/**
 * Creates a demo list with items for selection demonstration
 * @returns {HTMLElement} The created list element
 */
function createDemoList() {
  // Create an unordered list with a specific ID for easy selection
  const list = document.createElement('ul');
  list.id = 'demo-list';
  
  // Create several list items using array iteration
  ['Item 1', 'Item 2', 'Item 3'].forEach(text => {
    // Create a list item for each text in the array
    const item = document.createElement('li');
    // Add a class to all items for styling and to demonstrate class selection
    item.className = 'item';
    // Set the display text
    item.textContent = text;
    // Add the item to the list
    list.appendChild(item);
  });
  
  return list;
}

/**
 * Creates buttons to demonstrate different DOM selection methods
 * @returns {HTMLElement} A div containing all selection buttons
 */
function createSelectionButtons() {
  // Container for all buttons
  const buttonGroup = document.createElement('div');
  
  // Button 1: Select by ID demonstration
  const byIdButton = document.createElement('button');
  byIdButton.textContent = 'Select by ID';
  byIdButton.className = 'button';
  byIdButton.addEventListener('click', () => {
    resetSelections();
    // getElementById is the fastest way to select an element by its ID
    document.getElementById('demo-list').classList.add('selected');
  });
  
  // Button 2: Select by class name demonstration
  const byClassButton = document.createElement('button');
  byClassButton.textContent = 'Select by Class';
  byClassButton.className = 'button';
  byClassButton.addEventListener('click', () => {
    resetSelections();
    // getElementsByClassName returns a live HTMLCollection, not an array
    // Convert to array to use forEach
    Array.from(document.getElementsByClassName('item')).forEach(item => {
      item.classList.add('highlight');
    });
  });
  
  // Button 3: querySelector demonstration (selects first matching element)
  const byQueryButton = document.createElement('button');
  byQueryButton.textContent = 'Select First Item';
  byQueryButton.className = 'button';
  byQueryButton.addEventListener('click', () => {
    resetSelections();
    // querySelector returns the first element matching the CSS selector
    document.querySelector('#demo-list li').classList.add('selected');
  });
  
  // Button 4: querySelectorAll demonstration (selects all matching elements)
  const byQueryAllButton = document.createElement('button');
  byQueryAllButton.textContent = 'Select All Items';
  byQueryAllButton.className = 'button';
  byQueryAllButton.addEventListener('click', () => {
    resetSelections();
    // querySelectorAll returns a static NodeList of all matching elements
    document.querySelectorAll('#demo-list li').forEach(item => {
      item.classList.add('selected');
    });
  });
  
  // Add all buttons to the group
  buttonGroup.append(byIdButton, byClassButton, byQueryButton, byQueryAllButton);
  return buttonGroup;
}

/**
 * Helper function to reset all selections and highlights
 */
function resetSelections() {
  document.querySelectorAll('.selected, .highlight').forEach(el => {
    el.classList.remove('selected', 'highlight');
  });
}

/**
 * Example 2: Creating and Modifying Elements
 * Demonstrates how to create, modify and remove elements from the DOM
 */
function createModifyingElementsExample() {
  // Create the main container for this example
  const example = document.createElement('div');
  example.className = 'example-box';
  
  // Add a title to the example
  const title = document.createElement('h3');
  title.textContent = 'Creating & Modifying Elements';
  example.appendChild(title);
  
  // Create a container to hold the dynamic elements
  const container = document.createElement('div');
  container.id = 'modify-container';
  example.appendChild(container);
  
  // Add buttons for element manipulation
  const buttonGroup = createElementManipulationButtons(container);
  example.appendChild(buttonGroup);
  
  return example;
}

/**
 * Creates buttons for demonstrating element manipulation
 * @param {HTMLElement} container - The container where elements will be added/modified
 * @returns {HTMLElement} A div containing all manipulation buttons
 */
function createElementManipulationButtons(container) {
  const buttonGroup = document.createElement('div');
  
  // Button 1: Create a new element and add it to the DOM
  const createButton = document.createElement('button');
  createButton.textContent = 'Create Element';
  createButton.className = 'button';
  createButton.addEventListener('click', () => createNewElement(container));
  
  // Button 2: Modify an existing element in the DOM
  const modifyButton = document.createElement('button');
  modifyButton.textContent = 'Modify First Element';
  modifyButton.className = 'button';
  modifyButton.addEventListener('click', () => modifyFirstElement(container));
  
  // Button 3: Remove an element from the DOM
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove Last Element';
  removeButton.className = 'button';
  removeButton.addEventListener('click', () => removeLastElement(container));
  
  // Add all buttons to the group
  buttonGroup.append(createButton, modifyButton, removeButton);
  return buttonGroup;
}

/**
 * Creates a new paragraph element and adds it to the container
 * @param {HTMLElement} container - The container to add the element to
 */
function createNewElement(container) {
  // Create a new paragraph element
  const newElement = document.createElement('p');
  // Set its text content to show the current time
  newElement.textContent = 'New paragraph created at ' + new Date().toLocaleTimeString();
  // Add a class for styling and selection
  newElement.className = 'item';
  // Add the new element to the container
  container.appendChild(newElement);
}

/**
 * Modifies the first element in the container
 * @param {HTMLElement} container - The container with elements to modify
 */
function modifyFirstElement(container) {
  // Find the first element with class 'item'
  const firstElement = container.querySelector('.item');
  if (firstElement) {
    // Change its text content
    firstElement.textContent = 'Modified at ' + new Date().toLocaleTimeString();
    // Change its background color
    firstElement.style.backgroundColor = getRandomColor();
  }
}

/**
 * Removes the last element from the container
 * @param {HTMLElement} container - The container to remove elements from
 */
function removeLastElement(container) {
  // Get all elements with class 'item'
  const elements = container.querySelectorAll('.item');
  // If there are elements, remove the last one
  if (elements.length > 0) {
    container.removeChild(elements[elements.length - 1]);
  }
}

/**
 * Example 3: Attributes and Classes
 * Demonstrates how to work with element attributes and CSS classes
 */
function createAttributesClassesExample() {
  // Create the main container for this example
  const example = document.createElement('div');
  example.className = 'example-box';
  
  // Add a title to the example
  const title = document.createElement('h3');
  title.textContent = 'Attributes & Classes';
  example.appendChild(title);
  
  // Create a demo element to manipulate
  const demoElement = createDemoElement();
  example.appendChild(demoElement);
  
  // Add a display area for showing element information
  const infoDisplay = document.createElement('p');
  infoDisplay.id = 'info-display';
  example.appendChild(infoDisplay);
  
  // Add buttons for attribute and class manipulation
  const buttonGroup = createAttributeButtons(demoElement, infoDisplay);
  example.appendChild(buttonGroup);
  
  return example;
}

/**
 * Creates a demo element with attributes to manipulate
 * @returns {HTMLElement} The created demo element
 */
function createDemoElement() {
  // Create a div element with several attributes
  const demoElement = document.createElement('div');
  // Set its ID
  demoElement.id = 'attr-demo';
  // Set its class
  demoElement.className = 'item';
  // Set its display text
  demoElement.textContent = 'Demo Element';
  // Set a custom data attribute
  demoElement.setAttribute('data-info', 'Original Value');
  return demoElement;
}

/**
 * Creates buttons for attribute and class manipulation
 * @param {HTMLElement} demoElement - The element to manipulate
 * @param {HTMLElement} infoDisplay - The element to display information
 * @returns {HTMLElement} A div containing all attribute manipulation buttons
 */
function createAttributeButtons(demoElement, infoDisplay) {
  const buttonGroup = document.createElement('div');
  
  // Button 1: Display information about the element's attributes
  const displayInfoButton = document.createElement('button');
  displayInfoButton.textContent = 'Display Attributes';
  displayInfoButton.className = 'button';
  displayInfoButton.addEventListener('click', () => {
    // Show the element's attributes in the info display
    displayElementInfo(demoElement, infoDisplay);
  });
  
  // Button 2: Toggle a CSS class on the element
  const addClassButton = document.createElement('button');
  addClassButton.textContent = 'Toggle Highlight Class';
  addClassButton.className = 'button';
  addClassButton.addEventListener('click', () => {
    // Toggle the 'highlight' class on the element
    demoElement.classList.toggle('highlight');
    // Update the display to show the change
    displayElementInfo(demoElement, infoDisplay);
  });
  
  // Button 3: Change a data attribute
  const changeAttrButton = document.createElement('button');
  changeAttrButton.textContent = 'Change data-info Attribute';
  changeAttrButton.className = 'button';
  changeAttrButton.addEventListener('click', () => {
    // Set the data-info attribute to a new value with the current time
    demoElement.setAttribute('data-info', 'Value changed at ' + new Date().toLocaleTimeString());
    // Update the display to show the change
    displayElementInfo(demoElement, infoDisplay);
  });
  
  // Add all buttons to the group
  buttonGroup.append(displayInfoButton, addClassButton, changeAttrButton);
  return buttonGroup;
}

/**
 * Displays information about an element's attributes and classes
 * @param {HTMLElement} element - The element to display information about
 * @param {HTMLElement} display - The element to display information in
 */
function displayElementInfo(element, display) {
  display.textContent = `ID: ${element.id}, Classes: ${element.className}, Data Info: ${element.getAttribute('data-info')}`;
}

// Add all vanilla JavaScript examples to the container
vanillaContainer.appendChild(createSelectingElementsExample());
vanillaContainer.appendChild(createModifyingElementsExample());
vanillaContainer.appendChild(createAttributesClassesExample());

// ========================
// D3.js Examples
// ========================

/**
 * Select the container element where we'll add our D3.js examples
 * D3 uses its own selection methods that return D3 selection objects
 */
const d3Container = d3.select('#d3js .example-container');

/**
 * Example 1: D3 Selection
 * Demonstrates how to select elements using D3's selection methods
 */
function createD3SelectionExample() {
  // Create the main container for this example using D3
  // d3.create creates a detached element with a D3 selection wrapper
  const example = d3.create('div')
    .attr('class', 'example-box');
  
  // Add a title using D3's chaining syntax
  example.append('h3')
    .text('D3 Selection');
  
  // Create a demo list using D3 methods
  createD3DemoList(example);
  
  // Create buttons for D3 selection methods
  createD3SelectionButtons(example);
  
  // Return the actual DOM node from the D3 selection
  return example.node();
}

/**
 * Creates a demo list with D3 for selection demonstrations
 * @param {d3.Selection} parent - The parent D3 selection to append to
 */
function createD3DemoList(parent) {
  // Create a list element
  const list = parent.append('ul')
    .attr('id', 'd3-demo-list');
  
  // Use D3's data binding to create list items
  list.selectAll('li')
    .data(['Item 1', 'Item 2', 'Item 3'])
    .enter()  // Enter selection for new data points
    .append('li')  // Append an li for each data point
    .attr('class', 'item')  // Set class for each item
    .text(d => d);  // Use the data value as the text content
}

/**
 * Creates buttons for demonstrating D3 selection methods
 * @param {d3.Selection} parent - The parent D3 selection to append to
 */
function createD3SelectionButtons(parent) {
  // Create a container for buttons
  const buttonGroup = parent.append('div');
  
  // Button 1: Demonstrate D3 selection by ID
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Select by ID')
    .on('click', () => {
      resetD3Selections();
      // d3.select works like querySelector but returns a D3 selection
      d3.select('#d3-demo-list').classed('selected', true);
    });
  
  // Button 2: Demonstrate D3 selection by class
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Select by Class')
    .on('click', () => {
      resetD3Selections();
      // d3.selectAll works like querySelectorAll but returns a D3 selection
      d3.selectAll('#d3-demo-list .item').classed('highlight', true);
    });
  
  // Button 3: Demonstrate D3 selection of first matching element
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Select First Item')
    .on('click', () => {
      resetD3Selections();
      // CSS-style selectors can be used with D3 selections
      d3.select('#d3-demo-list li:first-child').classed('selected', true);
    });
  
  // Button 4: Demonstrate D3 selection of all matching elements
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Select All Items')
    .on('click', () => {
      resetD3Selections();
      // Select all list items and add a class to them
      d3.selectAll('#d3-demo-list li').classed('selected', true);
    });
}

/**
 * Helper function to reset all D3 selections and highlights
 */
function resetD3Selections() {
  d3.selectAll('.selected, .highlight')
    .classed('selected', false)
    .classed('highlight', false);
}

/**
 * Example 2: D3 Data Binding and DOM Manipulation
 * Demonstrates D3's data binding capabilities for dynamic content
 */
function createD3DataBindingExample() {
  // Create the main container for this example
  const example = d3.create('div')
    .attr('class', 'example-box');
  
  // Add a title
  example.append('h3')
    .text('D3 Data Binding & DOM Manipulation');
  
  // Container for dynamically created elements
  const container = example.append('div')
    .attr('id', 'd3-modify-container');
  
  // Initial data array with objects
  let data = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' }
  ];
  
  // Create buttons for data manipulation
  createD3DataBindingButtons(example, data, container);
  
  // Initial render of the data
  updateD3Elements(container, data);
  
  // Return the actual DOM node from the D3 selection
  return example.node();
}

/**
 * Creates buttons for demonstrating D3 data binding
 * @param {d3.Selection} parent - The parent D3 selection to append to
 * @param {Array} data - The data array to manipulate
 * @param {d3.Selection} container - The container to update when data changes
 */
function createD3DataBindingButtons(parent, data, container) {
  // Create a container for buttons
  const buttonGroup = parent.append('div');
  
  // Button 1: Add a new data item and update the DOM
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Add Element')
    .on('click', () => {
      // Create a new data object with unique ID
      const newId = data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
      data.push({ id: newId, text: `Item ${newId} added at ${new Date().toLocaleTimeString()}` });
      // Update the DOM with the new data
      updateD3Elements(container, data);
    });
  
  // Button 2: Update an existing data item and reflect the change in the DOM
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Update First Element')
    .on('click', () => {
      if (data.length > 0) {
        // Modify the first data object
        data[0].text = `Updated at ${new Date().toLocaleTimeString()}`;
        // Update the DOM to reflect the data change
        updateD3Elements(container, data);
      }
    });
  
  // Button 3: Remove a data item and its corresponding DOM element
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Remove Last Element')
    .on('click', () => {
      if (data.length > 0) {
        // Remove the last data object
        data.pop();
        // Update the DOM to reflect the removed data
        updateD3Elements(container, data);
      }
    });
}

/**
 * Updates DOM elements based on data using D3's data binding
 * @param {d3.Selection} container - The container with elements to update
 * @param {Array} data - The data array to bind to elements
 */
function updateD3Elements(container, data) {
  // The D3 data join pattern:
  // 1. Select all elements that should match our data
  // 2. Bind data to those elements, with a key function to maintain identity
  const elements = container.selectAll('.item')
    .data(data, d => d.id);
  
  // Enter selection - create new elements for new data items
  elements.enter()
    .append('p')
    .attr('class', 'item')
    .text(d => d.text)
    .style('opacity', 0)  // Start invisible for animation
    .transition()
    .duration(500)
    .style('opacity', 1);  // Fade in
  
  // Update selection - update existing elements with new data
  elements.text(d => d.text);
  
  // Exit selection - remove elements for removed data
  elements.exit()
    .transition()
    .duration(500)
    .style('opacity', 0)  // Fade out
    .remove();  // Then remove from DOM
}

/**
 * Example 3: D3 Attributes, Classes and Styles
 * Demonstrates how to manipulate attributes, classes and styles with D3
 */
function createD3AttributesExample() {
  // Create the main container for this example
  const example = d3.create('div')
    .attr('class', 'example-box');
  
  // Add a title
  example.append('h3')
    .text('D3 Attributes, Classes & Styles');
  
  // Create a demo element with several attributes
  const demoElement = createD3DemoElement(example);
  
  // Add a display area for showing element information
  const infoDisplay = example.append('p')
    .attr('id', 'd3-info-display');
  
  // Create buttons for attribute and style manipulation
  createD3AttributeButtons(example, demoElement, infoDisplay);
  
  // Return the actual DOM node from the D3 selection
  return example.node();
}

/**
 * Creates a demo element using D3
 * @param {d3.Selection} parent - The parent D3 selection to append to
 * @returns {d3.Selection} The created demo element as a D3 selection
 */
function createD3DemoElement(parent) {
  // Create and return a div element with several attributes
  return parent.append('div')
    .attr('id', 'd3-attr-demo')
    .attr('class', 'item')
    .attr('data-info', 'Original Value')
    .text('D3 Demo Element');
}

/**
 * Creates buttons for D3 attribute and style manipulation
 * @param {d3.Selection} parent - The parent D3 selection to append to
 * @param {d3.Selection} demoElement - The element to manipulate
 * @param {d3.Selection} infoDisplay - The element to display information
 */
function createD3AttributeButtons(parent, demoElement, infoDisplay) {
  // Create a container for buttons
  const buttonGroup = parent.append('div');
  
  // Button 1: Display the element's attributes
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Display Attributes')
    .on('click', () => displayD3ElementInfo(demoElement, infoDisplay));
  
  // Button 2: Toggle a CSS class using D3's classed method
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Toggle Highlight Class')
    .on('click', () => {
      // Check if the element currently has the class
      const isHighlighted = demoElement.classed('highlight');
      // Toggle the class by setting it to the opposite
      demoElement.classed('highlight', !isHighlighted);
      // Update the information display
      displayD3ElementInfo(demoElement, infoDisplay);
    });
  
  // Button 3: Change multiple styles and attributes with D3's chaining
  buttonGroup.append('button')
    .attr('class', 'button')
    .text('Change Styles')
    .on('click', () => {
      demoElement
        .style('color', getRandomColor())  // Change text color
        .style('font-weight', 'bold')      // Make text bold
        .attr('data-info', 'Styled at ' + new Date().toLocaleTimeString());  // Update attribute
      // Update the information display
      displayD3ElementInfo(demoElement, infoDisplay);
    });
}

/**
 * Displays information about a D3 selection's attributes and classes
 * @param {d3.Selection} element - The D3 selection to display information about
 * @param {d3.Selection} display - The D3 selection to display information in
 */
function displayD3ElementInfo(element, display) {
  // Select the element to ensure we're working with a D3 selection
  const demo = d3.select('#d3-attr-demo');
  // Set the text content of the display element
  display.text(
    `ID: ${demo.attr('id')}, Classes: ${demo.attr('class')}, Data Info: ${demo.attr('data-info')}`
  );
}

// Add all D3 examples to the container
d3Container.node().appendChild(createD3SelectionExample());
d3Container.node().appendChild(createD3DataBindingExample());
d3Container.node().appendChild(createD3AttributesExample());

/**
 * Helper function for generating random colors
 * @returns {string} A random hex color code
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
