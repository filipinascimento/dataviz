import * as d3 from 'd3';
import random from 'random';

const names = [
    "Elijah", "Sofia", "Aaliyah", "Mateo", "Giovanni", "Aarav", "Priya", "Jasmine",
    "Carlos", "Amara", "Dante", "Anika", "Rohan", "Malik", "Alessia", "Jose",
    "Xavier", "Fatima", "Liam", "Noah", "Emma", "Olivia", "Mason", "Ava",
    "Isabella", "Jayden", "Gabriella", "Dominic", "Maya", "Lucas", "Leilani",
    "Diego", "Zoe", "Andre", "Neha", "Antonio", "Kiara", "Marco", "Layla",
    "Ravi", "Jalen", "Savannah", "DeAndre", "Camila", "Aiden", "Samira",
    "Julian", "Kiera", "Hector", "Imani", "Diana", "Ezra", "Ananya", "Serena"
];


const people = names.map(name => ({
    height: random.normal(1.6475, 0.05)(),
    name: name
}));

// Select 10 random people
const selectedPeople = d3.shuffle(people).slice(0, 10);

const width = 500;
const margin = 200;
const barHeight = 20;

// Calculate min and max height
const maxHeight = d3.max(selectedPeople, d => d.height);
const minHeight = d3.min(selectedPeople, d => d.height);

// Linear scale
const x = d3.scaleLinear()
    .domain([0, maxHeight])
    .range([0, width]);

// Create SVG container
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin)
    .attr("height", (barHeight + 3) * selectedPeople.length);

// Create bars for each selected person
const bar = svg.selectAll("g.bar")
    .data(selectedPeople)
    .enter()
    .append("g")
    .classed("bar", true)
    .attr("transform", (d, i) => `translate(0,${i * (barHeight + 3)})`);

// Append rectangles (bars)
bar.append("rect")
    .attr("width", d => x(d.height))
    .attr("height", barHeight - 1);

// Append person's name and height as text
bar.append("text")
    .attr("x", d => x(d.height) + 5)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => `${d.name} (${d.height.toFixed(2)} m)`);
