# Jupyter Lab

This guide walks you through using Jupyter Lab for your Data Viz projects. It is assumed that your environment is already set up with the necessary packages. If you are using conda and prepared the environment as described in [Setup Guide](w02-recap_setup/class.md), this is the `dataviz` conda environment.

---

## 1. Launching Jupyter Lab

### Using Conda Environment
If you're using the `dataviz` conda environment:
1. Open your terminal. Remember that if you installed MiniForge on Windows, you should use the Miniforge Prompt from the Start Menu.
2. Activate your environment:
    ```
    conda activate dataviz
    ```
3. Launch Jupyter Lab by running:
    ```
    jupyter lab
    ```

### Using Other Environments
If you have set up your environment with virtualenv or another tool:
1. Activate your virtual environment (e.g., for virtualenv):
    ```
    source path/to/your/virtualenv/bin/activate
    ```
2. Launch Jupyter Lab:
    ```
    jupyter lab
    ```

*Note:* The command is the same regardless of which environment management tool you use, as long as all required packages are installed.

### Accessing Jupyter Lab from a Browser
Jupyter Lab will open in your default web browser. If it doesn't, you can normally access it at `http://localhost:8888/lab`.

---

## 2. Navigating the Jupyter Lab Interface

When Jupyter Lab starts, you'll see:
- **File Browser:** Browse directories and open notebooks, scripts, and other files.
- **Launcher:** Easily open new notebooks, terminals, text files, and consoles.
- **Tabs and Panels:** Organize multiple documents side by side.

Spend time exploring the layout to customize your workflow.

---

## 3. Creating and Using Notebooks

### Creating a New Notebook
1. Click on the **Launcher** tab or choose **File > New > Notebook** from the top menu.
2. Select the desired kernel. By default, it may pick the Python version installed in your environment.

### Running Cells
- **Insert Code:** Click on a cell to insert code.
- **Run Cell:** Press `Shift + Enter` to execute a cell.
- **Insert Markdown:** Change cell type to Markdown to add headings, explanations, or notes.

### Useful Shortcuts
- **Run current cell:** Shift + Enter
- **Insert new cell below:** B
- **Insert new cell above:** A
- **Save Notebook:** Ctrl + S (Cmd + S on macOS)

---

## 4. Managing Kernels and Environments

### Switching Kernels
If the notebook isn’t using the desired kernel:
1. Click on **Kernel > Change Kernel...** in the menu.
2. Select the correct kernel corresponding to your environment.
3. Confirm if the kernel has the same name as your environment (e.g., `Python (dataviz)` if you are using our conda installation).

### Adding New Kernels (optional)
For custom environments, you might need to manually add a kernel using `ipykernel`:
1. Install `ipykernel` in your environment if it's not already installed.
    ```
    pip install ipykernel
    ```
2. Add the kernel:
    ```
    python -m ipykernel install --user --name my_env --display-name "Python (my_env)"
    ```
3. Restart Jupyter Lab and select the new kernel from **Kernel > Change Kernel...**

---

## 5. Executing code and interrupting the Kernel
You can execute code cells by pressing `Shift + Enter`. If you need to stop the execution of a cell or interrupt the kernel, you can use the following shortcuts:
- **Interrupt Kernel:** Press `I` twice. You can also click on the stop button in the toolbar. This will stop the execution of the current cell but keep the kernel running.
- **Restart Kernel:** Go to the **Kernel** menu and select **Restart Kernel**. Restarting the kernel will clear all variables and outputs.

---

## 6. Advanced Features

### Extensions and Plugins
Jupyter Lab supports a rich ecosystem of extensions:
- **Variable Inspector:** Monitor variables in your notebook.
- **Git Integration:** Track changes and version control your projects.
- **Code Formatter:** Automatically format your code with tools like Black.

You can explore available extensions at the [Jupyter Lab Extensions Repository](https://github.com/jupyterlab/jupyterlab).

### Terminal and Text Editor
- **Terminal:** Open an integrated terminal from **File > New > Terminal**.
- **Text Editor:** Edit plain text or configuration files directly within Jupyter Lab.

### Customizing Settings
Access the **Advanced Settings Editor** under the **Settings** menu to customize themes, shortcuts, and other configurations.

---

## 7. Tips for Effective Use

- **Regularly Save:** Use keyboard shortcuts to save frequently. (`Ctrl + S` or `Cmd + S on macOS`)
- **Organize Code into Functions:** Keep your notebook clean by modularizing your code.
- **Version Control Notebooks:** Back up your notebooks using Git.
- **Explore Commands:** Use the command palette (`Ctrl + Shift + C` or `Cmd + Shift + C on macOS`) to discover powerful quick commands.
- **Utilize Markdown Cells:** Enhance your notebooks by using Markdown cells for documentation and notes.
- **Keep Descriptive Titles:** Use clear and descriptive titles for your notebooks to make them easily identifiable.

---

## 7. Troubleshooting

### Common Issues
- **Kernel Not Found:** Check if the environment corresponding to the kernel is active and all dependencies are installed.
- **Slow Performance:** Close unnecessary tabs and clear outputs when working with large datasets.
- **Extension Issues:** Disable or update extensions if you experience unexpected behavior.

### Getting Help
- **Documentation:** Refer to the [Jupyter Lab Documentation](https://jupyterlab.readthedocs.io/) for more details.
- **Community Forums:** Engage in community discussions on forums like [Stack Overflow](https://stackoverflow.com/) for troubleshooting help.
- **Instructor and AIs:** Reach out to your instructor or AIs for assistance with specific issues.

---

## Conclusion

Jupyter Lab is a versatile tool that supports interactive coding, combining code execution, rich text elements, and visualizations in a unified interface. Whether using the `dataviz` conda environment or another setup, mastering Jupyter Lab will enhance your productivity in this course and beyond.

Happy coding!
