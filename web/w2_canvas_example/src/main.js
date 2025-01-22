// 1. Get the canvas element
const canvas = document.getElementById("myCanvas");
// 2. Get the 2D context
const ctx = canvas.getContext("2d");

// 3. Clear the entire canvas first
ctx.clearRect(0, 0, canvas.width, canvas.height);

const exampleName = "simple"

switch (exampleName) {
    case "simple":

    // Fill the background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a rectangle
    ctx.fillStyle = "#ff0000"; // red
    ctx.fillRect(50, 50, 100, 60);

    // Draw some text
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Hello Canvas!", 50, 40);

    // Example: arrow function to draw a circle
    const drawCircle = (x, y, radius, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    // Use our arrow function
    drawCircle(200, 150, 30, "#00ff00");

    break;
    case "lines":
      ctx.beginPath();
      ctx.moveTo(50, 150);  // Start at (50, 150)
      ctx.lineTo(150, 200); // Draw line to (150, 200)
      ctx.lineTo(250, 150); // Another line to (250, 150)
      ctx.closePath();      // Optional: closes the shape by drawing a line to the start
      ctx.strokeStyle = "green";
      ctx.lineWidth = 2;
      ctx.stroke();
      break;

    case "circles":
      ctx.beginPath();
      // A circle centered at (100, 100), radius = 40
      ctx.arc(100, 100, 40, 0, 2 * Math.PI, false);
      ctx.fillStyle = "#FFA500";
      ctx.fill();           // Fill the circle with orange
      break;

    case "styles":
    // Purple rectangle
    ctx.fillStyle = "purple";
    ctx.fillRect(10, 10, 80, 60);

    // Semi-transparent red stroke
    ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
    ctx.lineWidth = 5;
    ctx.strokeRect(100, 10, 80, 60);
    break;

    case "transformations":
    // Move the origin to (200, 200)
    ctx.translate(200, 200);

    // Rotate 45 degrees (pi/4 radians)
    ctx.rotate(Math.PI / 4);

    // Draw a rectangle, which will appear rotated around (200, 200)
    ctx.fillStyle = "blue";
    ctx.fillRect(-25, -25, 50, 50);  // Centered on the new origin
    break;


    case "states":
      ctx.save();                   // Save default state
      ctx.translate(200, 200);
      ctx.fillRect(0, 0, 50, 50);   // Moved rectangle
      ctx.restore();                // Revert to original translation
    break;

    case "all":


      // Draw a filled rectangle
      ctx.fillStyle = "#3498db";
      ctx.fillRect(20, 20, 100, 50);

      // Draw a stroked rectangle
      ctx.strokeStyle = "#e74c3c";
      ctx.lineWidth = 3;
      ctx.strokeRect(150, 20, 100, 50);

      // Draw a line
      ctx.beginPath();
      ctx.moveTo(20, 100);
      ctx.lineTo(120, 150);
      ctx.strokeStyle = "green";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw a circle
      ctx.beginPath();
      ctx.arc(220, 120, 30, 0, 2 * Math.PI);
      ctx.fillStyle = "orange";
      ctx.fill();

      // Transformation example: rotate a rectangle
      ctx.save(); // save state
      ctx.translate(300, 60);
      ctx.rotate(Math.PI / 6); // rotate 30 degrees
      ctx.fillStyle = "purple";
      ctx.fillRect(-20, -20, 40, 40);
      ctx.restore(); // restore un-rotated state

      

  }
