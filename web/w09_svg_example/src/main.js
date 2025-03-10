
// Import the D3 library using npm
import * as d3 from 'd3';


// Select the SVG element
const svg = d3.select("#mySvg");

// Clear any previous content
svg.selectAll("*").remove();

const exampleName = "transformations";  // change this value to "lines", "circles", "styles", "transformations", "states", or "all"

switch(exampleName) {
  case "simple":
    // Fill the background
    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", svg.attr("width"))
      .attr("height", svg.attr("height"))
      .attr("fill", "#fff");

    // Draw a red rectangle
    svg.append("rect")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 100)
      .attr("height", 60)
      .attr("fill", "#ff0000");

    // Draw some text
    svg.append("text")
      .attr("x", 50)
      .attr("y", 40)
      .attr("fill", "#000")
      .attr("font-family", "Arial")
      .attr("font-size", "20px")
      .text("Hello Canvas!");

    // Arrow function to draw a circle
    const drawCircle = (x, y, radius, color) => {
      svg.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", radius)
        .attr("fill", color);
    };

    // Use the function to draw a circle
    drawCircle(200, 150, 30, "#00ff00");
    break;

  case "lines":
    // Draw a polyline connecting points (50,150), (150,200), (250,150)
    svg.append("polyline")
      .attr("points", "50,150 150,200 250,150")
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2);
    break;

  case "circles":
    // Draw a circle centered at (100,100) with radius 40
    svg.append("circle")
      .attr("cx", 100)
      .attr("cy", 100)
      .attr("r", 40)
      .attr("fill", "#FFA500");
    break;

  case "styles":
    // Draw a purple rectangle
    svg.append("rect")
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", 80)
      .attr("height", 60)
      .attr("fill", "purple");

    // Draw a rectangle with a semi-transparent red stroke
    svg.append("rect")
      .attr("x", 100)
      .attr("y", 10)
      .attr("width", 80)
      .attr("height", 60)
      .attr("fill", "none")
      .attr("stroke", "rgba(255, 0, 0, 0.5)")
      .attr("stroke-width", 5);
    break;

  case "transformations":
    // Draw a rectangle with translation and rotation
    svg.append("rect")
      .attr("x", -25)
      .attr("y", -25)
      .attr("width", 50)
      .attr("height", 50)
      .attr("fill", "blue")
      // Translate to (200,200) then rotate 45° (SVG expects degrees)
      .attr("transform", "translate(200,200) rotate(45)");
    break;

  case "states":
    // Simulate state saving by grouping elements with a transform
    svg.append("g")
      .attr("transform", "translate(200,200)")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 50)
      .attr("height", 50)
      .attr("fill", "black");
    break;

  case "all":
    // Draw a filled rectangle
    svg.append("rect")
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 50)
      .attr("fill", "#3498db");

    // Draw a stroked rectangle
    svg.append("rect")
      .attr("x", 150)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 50)
      .attr("fill", "none")
      .attr("stroke", "#e74c3c")
      .attr("stroke-width", 3);

    // Draw a line from (20,100) to (120,150)
    svg.append("line")
      .attr("x1", 20)
      .attr("y1", 100)
      .attr("x2", 120)
      .attr("y2", 150)
      .attr("stroke", "green")
      .attr("stroke-width", 2);

    // Draw a circle centered at (220,120) with radius 30
    svg.append("circle")
      .attr("cx", 220)
      .attr("cy", 120)
      .attr("r", 30)
      .attr("fill", "orange");

    // Draw a rotated rectangle using a group for transformation:
    svg.append("g")
      .attr("transform", "translate(300,60) rotate(30)")
      .append("rect")
      .attr("x", -20)
      .attr("y", -20)
      .attr("width", 40)
      .attr("height", 40)
      .attr("fill", "purple");
    break;
}