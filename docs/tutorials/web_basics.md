# Web setup
This guide will help you set up a simple web development environment using **Vite** (a modern build tool) and **HTML Canvas** (for drawing graphics). We’ll cover the basics of creating a project, writing HTML/CSS/JavaScript, and drawing on the canvas.

### Important Links:
- [Vite Documentation](https://vitejs.dev/)
- [HTML Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

If you don't know what *HTML* is, check out these resources:
- [MDN Web Docs: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools: HTML Tutorial](https://www.w3schools.com/html/)

If you don't know what *CSS* is, check out these resources:
- [MDN Web Docs: CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [W3Schools: CSS Tutorial](https://www.w3schools.com/css/)

If you don't know what *JavaScript* is, check out our review or these resources:
- [MDN Web Docs: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [W3Schools: JavaScript Tutorial](https://www.w3schools.com/js/)




## 1. Install Node.js and npm

1. Go to [https://nodejs.org](https://nodejs.org) and download the **LTS** (Long-Term Support) version for your operating system.
2. Run the installer. This will also install **npm** (Node Package Manager), which comes bundled with Node.js.
3. Verify the installation by opening a terminal (or command prompt) and typing:
   ```bash
   node -v
   npm -v
   ```
   You should see version numbers for both.

---

## 2. Create a Simple Vite Project

### Step A: Initialize the Project
1. **Open a terminal** in the folder where you want your project to live.
2. Run:
   ```bash
   npm create vite@latest
   ```
   - Enter a name for your project folder (e.g., `my-dataviz-project`).
   - Choose `vanilla` when prompted.
   
*(Alternatively, you can specify everything in one go: `npm create vite@latest my-dataviz-project -- --template vanilla`.)*

3. Navigate into your new project folder:
   ```bash
   cd my-dataviz-project
   ```

### Step B: Install Dependencies
Inside the project folder, run:
```bash
npm install
```
This will download everything needed for your Vite setup.

### Step C: Run the Development Server
```bash
npm run dev
```
You should see something like:
```
  VITE vX.0.0  ready in X ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Open the provided local URL in your web browser to see a basic starter page.

---

## 3. Project Structure Overview

A **typical** Vite vanilla project looks like this:
```
my-dataviz-project/
  ├─ index.html
  ├─ main.js     # Your main JavaScript entry point
  ├─ style.css   # (optional) separate CSS file
  ├─ package.json
  ├─ vite.config.js
  └─ ...
```

- **index.html**: The main HTML file Vite will serve.  
- **main.js**: Your core JavaScript logic (you can rename it if you like).  
- **style.css**: A CSS file for styling (or inline CSS in `index.html`).  
- **package.json**: Keeps track of dependencies and scripts.  
- **vite.config.js**: Vite’s configuration file (often not needed for simple projects).

---

## 4. Basic HTML + CSS Setup

Let’s create or update `index.html` so it has a container that centers the canvas. Here’s a minimal example:

**`index.html`**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Basic Vite + JS Project</title>
    <!-- Link to our CSS (optional, you can inline) -->
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="canvas-container">
      <canvas id="myCanvas" width="400" height="300"></canvas>
    </div>

    <!-- Main JS entry point -->
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

**`style.css`** (in the same directory or a dedicated CSS folder):
```css
/* Make the body fill the screen and remove default margins */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f0f0f0;
  font-family: sans-serif;
}

/* A container that uses flexbox to center its contents */
.canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

/* Optional: add a simple border around the canvas */
#myCanvas {
  border: 2px solid #333;
}
```

Now, our canvas will be centered on the screen and have a simple border.

---

## 5. Basic JavaScript Fundamentals

Below are some essential concepts you’ll use in most JavaScript projects:

1. **Variables**:  
   ```js
   let userName = "Alice";
   const MAX_SCORE = 100;
   ```
2. **Functions & Arrow Functions**:  
   ```js
   // Traditional function:
   function greet(name) {
     console.log(`Hello, ${name}!`);
   }

   // Arrow function:
   const greetArrow = (name) => {
     console.log(`Hello from arrow func, ${name}!`);
   };

   greet("Alice");
   greetArrow("Bob");
   ```
3. **Event Listeners**:  
   ```js
   document.addEventListener("click", function () {
     console.log("Page clicked!");
   });
   // Or as an arrow function:
   document.addEventListener("click", () => {
     console.log("Page clicked (arrow)!");
   });
   ```
4. **DOM Manipulation**:  
   ```js
   const myCanvas = document.getElementById("myCanvas");
   console.log(myCanvas.width, myCanvas.height);
   ```
5. **Conditionals and Loops**:  
   ```js
   if (userName === "Alice") {
     // do something
   }
   
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

---

## 6. Drawing on the Canvas

We’ll show a simple example that draws a rectangle and some text on the canvas using `main.js`.

**`main.js`**
```js
// 1. Get the canvas element
const canvas = document.getElementById("myCanvas");

// 2. Get the 2D context
const ctx = canvas.getContext("2d");

// 3. Fill the background
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 4. Draw a rectangle
ctx.fillStyle = "#ff0000"; // red
ctx.fillRect(50, 50, 100, 60);

// 5. Draw some text
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
```

### Explanation
- **`ctx.fillStyle`** sets the fill color or pattern.  
- **`ctx.fillRect(x, y, width, height)`** draws a filled rectangle at `(x,y)` with the given dimensions.  
- **`ctx.font`** and **`ctx.fillText(text, x, y)`** let you draw text on the canvas.  
- **`ctx.beginPath()`** starts a new path for shapes like circles, and **`ctx.arc()`** draws a circular arc.  
- We wrapped the circle logic in an **arrow function** (`drawCircle`) to demonstrate how you might package drawing logic in reusable functions.

---

## 7. Running the Application

1. Ensure you’ve **saved** all files: `index.html`, `style.css`, and `main.js`.  
2. In your project folder, run:
   ```bash
   npm run dev
   ```
3. Open your browser at the URL shown (e.g., `http://localhost:5173`).
4. You should see a centered canvas with a red rectangle, the text “Hello Canvas!”, and a green circle.

---

## 8. Summary of the Steps

1. **Install Node.js** (which includes npm).  
2. **Initialize** a new Vite project via `npm create vite@latest`.  
3. **Install** dependencies with `npm install`.  
4. **Run** the development server using `npm run dev`.  
5. **Set up** a minimal HTML and CSS to display a centered canvas.  
6. **Use** JavaScript in `main.js` to draw on the canvas.


Enjoy coding with JavaScript and creating interactive visuals using the HTML5 Canvas!

