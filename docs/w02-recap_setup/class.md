# Lecture 2: Recap and Setup
In this lecture, we will recap the key technologies needed for the Data Visualization course and set up the development environment.

We will cover the setup of two essential tools: **Python** and **javascript** (Web Development). We will also discuss the basic usage of **GitHub**.

If you are new to these tools, follow the instructions below to set up your environment.

If you are unfamiliar with Python, the terminal, web development, or Git, or if you would like to refresh your knowledge, we recommend visiting the tutorials section of this course.

For this course we will also be using numpy and pandas extensively, so make sure you are familiar with these libraries too.


## Tutorials:

- [Terminal Basics](tutorials/terminal_basics.md)
- [Git Basics](tutorials/git_basics.md)
- [Python Basics](tutorials/python_basics.md)
- [NumPy Basics](tutorials/numpy_basics.md)
- [Pandas Basics](tutorials/pandas_basics.md)
- [Web Development Basics](tutorials/web_basics.md)


## Cloning the repository
Github is a platform where you can store your code and collaborate with others. Git is a version control system that allows you to track changes in your code. If something goes wrong, you can always revert to a previous version.

To get started, you need to clone the repository to your local machine. This will create a copy of the repository on your computer.

1. **Installing GIT**:
- **Windows**: [Download Git for Windows](https://git-scm.com/download/win) and install. You can use Git Bash or Command Prompt after installation.
- **macOS**: Git often comes pre-installed. If not, install Xcode Command Line Tools (`xcode-select --install`) or get the [official installer](https://git-scm.com/download/mac).
- **Linux**: Install via your package manager, e.g. `sudo apt-get install git` (Debian/Ubuntu) or `sudo dnf install git` (Fedora).



2. **Configure Git (All Platforms)**:
After installation, open a terminal and set your name and email for commits:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
You can check your configuration with:
```bash
git config --list
```

3. **Navigate to the Repository**:
   - Go to the [github.com/filipinascimento/dataviz](https://github.com/filipinascimento/dataviz) repository on GitHub.

4. **Clone the Repository**:
   - Click on the "Code" button at the top right corner of the page.
   - Copy the URL under "Clone with HTTPS".
   - Open a terminal on your computer and run `git clone [URL]` (replace `[URL]` with the copied URL).

   > **Note**: You can also use the download ZIP option if you don't want to use Git.
   > **Note**: If you are using SSH, you can use the SSH URL instead of HTTPS.

5. **Navigate to the Repository**:
   - Go to the cloned repository on your local machine.

The files in the repository are now available on your local machine. You now have access to the course materials in your local environment.

## Updating the Repository
In case there are updates to the repository, you can pull the changes to your local machine. This will ensure that you have the latest version of the course materials.

1. **Navigate to the Repository**:
   - Open a terminal and navigate to the cloned repository on your local machine.

2. **Pull the Changes**:
   - Run `git pull origin main` to pull the changes from the main branch of the repository.

The changes from the main branch will be merged into your local repository. You now have the latest version of the course materials on your local machine.

## Setting up the Python Environment
We suggest using [Miniforge](https://conda-forge.org/download/) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html) to install python packages and setup your environment. You can also use Anaconda, but it is a larger package and may take longer to install. Alternatively, you can also setup your own python environment using pip and virtualenv (this approach will not be covered in this document).

### Step 1: Install Miniforge
Miniforge is a minimal installer for Conda, a package manager and an environment manager. Here's how to install it:

1. **Download MiniForge**:
   - Visit the [Miniconda download page](https://conda-forge.org/download/).
   - Choose the version suitable for your operating system (Windows, macOS, or Linux).
   - Download the appropriate installer.

2. **Install Miniconda**:
   - **Windows**: Run the downloaded `.exe` file and follow the on-screen instructions.
   - **macOS/Linux**: Open a terminal, navigate to the folder containing the downloaded file, and run `bash Miniforge3-MacOSX-arm64.sh` (adjust the filename as needed).

3. **Verify the Installation**:
   - Open a new terminal window.
      - On Windows, you can look for the Miniforge Prompt.
   - Type `conda list`. If Miniconda is installed correctly, you'll see a list of installed packages.

### Step 2: Create a Conda Environment
Creating a separate environment for your Data Science projects is good practice:

1. **Create a New Environment for this course**:
    - Run the command: `conda env create -f environment.yml`. This will create a new environment called datascience with all the necessary packages installed.

2. **Activate the Environment**:
   - Run: `conda activate dataviz`.

3. **Launch Jupyter Lab**:
   - Run: `jupyter lab`.
   - This will open Jupyter Lab in your default web browser.


### Step 4: Verify Installation

Make sure everything is installed correctly:

1. **Open a New Notebook in Jupyter Lab**:
   - In Jupyter Lab, create a new notebook.

2. **Test the Packages**:
   - Try importing the packages: `import numpy as np`, `import pandas as pd`, `import matplotlib.pyplot as plt`.
   - If there are no errors, the packages are installed correctly.

### Additional Tips

- **Updating Conda**: Keep Conda and your packages updated with `conda update conda` and `conda update --all`.
- **Managing Environments**: View your environments with `conda env list` and switch between them using `conda activate <env_name>`.
- **Finding Packages**: To find available packages, use `conda search <package_name>`.
- **Conda Cheat Sheet**: For more commands, see the [Conda Cheat Sheet](https://docs.conda.io/projects/conda/en/latest/user-guide/cheatsheet.html).


---

## Setup Web Development Environment
For this course, we will be using JavaScript and web development tools to create interactive visualizations. For now we will onlt try a few experiments with Canvas so you can get a feel of how it works and revisit 2D graphics.


## 1. Install Node.js and npm
1. Go to [https://nodejs.org](https://nodejs.org) and download the **LTS** (Long-Term Support) version for your operating system.
2. Run the installer. This will also install **npm** (Node Package Manager), which comes bundled with Node.js.
3. Verify the installation by opening a terminal (or command prompt) and typing:
   ```bash
   node -v
   npm -v
   ```
   You should see version numbers for both.

## 2. Go to the Web folder
1. Navigate to the `web` folder in the repository.

2. Open a terminal in the `web/w2_canvas_example` folder and run:
   ```bash
   npm install
   ```
   This will install the necessary packages for the web development environment.

3. Start the development server by running:
   ```bash
   npm dev run
   ```
   This will start a development server and open a browser window with the web page.

4. You can now experiment with the code in `src/main.js`. The changes you make will be reflected in the browser window.

## 3. Copy the file `Datasets/sol_data.json` to the `web/w2_canvas_example/public` folder
This file contains the data we will use in the canvas example. All acessible files should be in the `public` folder.

## 4. Experiment with the code
Open the `src/main.js` file and experiment with the code. You can change the draw functions, shapes, and other properties to see how they affect the canvas.

## 5. Additional Resources
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools](https://www.w3schools.com/js/default.asp)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
