document.addEventListener("DOMContentLoaded", function () {
	console.log("DOM loaded");
    // Find all code blocks with the .javascript-exec class
    const codeBlocks = document.querySelectorAll(".javascript-exec");
	console.log("Got code blocks: ", codeBlocks);
    codeBlocks.forEach((block, index) => {
        // Wrap the code block in a playground container
        const container = document.createElement("div");
        container.className = "playground-container";

        // Create a CodeMirror editor
        const editor = document.createElement("textarea");
        editor.value = block.textContent.trim();
        container.appendChild(editor);

        // Create an output area
        const output = document.createElement("div");
        output.className = "playground-output";
        container.appendChild(output);

        // Add a run button
        const runButton = document.createElement("button");
        runButton.textContent = "Run";
        runButton.addEventListener("click", () => {
            try {
                // Execute the code in the editor
                const result = eval(editor.value);
                output.textContent = result !== undefined ? result : "";
                output.style.color = "black";
            } catch (err) {
                output.textContent = err;
                output.style.color = "red";
            }
        });
        container.appendChild(runButton);

        // Replace the original block with the playground
        block.replaceWith(container);

        // Initialize CodeMirror on the editor
        CodeMirror.fromTextArea(editor, {
            mode: "javascript",
            theme: "material",
            lineNumbers: true,
            autoCloseBrackets: true,
        });
    });
});