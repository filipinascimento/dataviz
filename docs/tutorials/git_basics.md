# GIT Basics
Git is a distributed version control system that allows you to track changes in your code, collaborate with others, and revert to previous versions if needed. This tutorial covers the basics of Git, including installation, configuration, creating a local repository, working with remotes, branching, merging, and more.

In this tutorial, you will learn how to:
- Install and set up Git on your computer.
- Create a local repository and make your first commit.
- Create a remote repository on GitHub and connect it to your local repo.
- Clone an existing repository to your local machine.
- Work with branches, merging, and rebasing.
- Fork a repository on GitHub and keep your fork in sync with the original project.


## 1. Installing and Setting Up Git

### Install Git
- **Windows**: [Download Git for Windows](https://git-scm.com/download/win) and install. You can use Git Bash or Command Prompt after installation.
- **macOS**: Git often comes pre-installed. If not, install Xcode Command Line Tools (`xcode-select --install`) or get the [official installer](https://git-scm.com/download/mac).
- **Linux**: Install via your package manager, e.g. `sudo apt-get install git` (Debian/Ubuntu) or `sudo dnf install git` (Fedora).

### Configure Git (All Platforms)
After installation, set your name and email for commits:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
You can check your configuration with:
```bash
git config --list
```

---

## 2. Starting a Local Repository

You can create a new folder on your computer and turn it into a Git repository:
```bash
mkdir my-new-project
cd my-new-project
git init
```
- `git init` creates a hidden `.git` folder that tracks your code changes.

### First Commit
1. Create a file, e.g. `README.md`.
2. Add content to the file (e.g., “This is my new project”).
3. Stage and commit it:
   ```bash
   git add README.md
   git commit -m "Initial commit"
   ```

- `git add` tells Git which files you want to include in the next commit.  
- `git commit -m "message"` creates a snapshot of the staged changes with a brief message.

---

## 3. Creating a Remote Repository on GitHub

You can do this in two main ways:

### Method A: Creating on GitHub’s Website
1. Go to [github.com](https://github.com) and log in.  
2. Click the “New” button or “+” → “New repository.”  
3. Name your repository (e.g., `my-new-project`) and optionally add a description.  
4. Leave it public or private, depending on your needs.  
5. **Do not** initialize with a README if you already have one locally.  
6. Click “Create repository.”  
7. GitHub will display instructions with a remote URL (something like `https://github.com/YourUsername/my-new-project.git`).

Connect your local repo to this remote:
```bash
git remote add origin https://github.com/YourUsername/my-new-project.git
git branch -M main
git push -u origin main
```
- `git remote add origin ...` links your local repo to the remote.  
- `git push -u origin main` uploads (pushes) your local main branch to GitHub and sets `origin/main` as the default remote branch to track.

### Method B: Creating a Repo from the Command Line (GitHub CLI)
If you have the [GitHub CLI](https://cli.github.com/) installed:
```bash
gh repo create my-new-project --public --source=. --remote=origin --push
```
- This automates the repo creation on GitHub and sets up the remote connection.

---

## 4. Cloning an Existing Repository

If you want to get a copy of an existing repo from GitHub (or another service):
```bash
git clone https://github.com/SomeoneElse/some-repo.git
cd some-repo
```
- This downloads the repository to your local machine.  
- You’ll have a `.git` folder ready, so you can start making commits right away.

---

## 5. Basic Git Workflow

Once your local repository is set up and connected to a remote, the daily workflow typically looks like this:

1. **Pull** the latest changes to ensure your local copy is up to date:
   ```bash
   git pull origin main
   ```
   (Substitute `main` with the branch you’re working on if needed.)

2. **Make changes** (edit files, add new files, etc.).

3. **Stage changes**:
   ```bash
   git add .
   ```
   or specify file names individually:  
   ```bash
   git add my_file.py
   ```

4. **Commit** with a descriptive message:
   ```bash
   git commit -m "Add new feature X"
   ```

5. **Push** your local commits to GitHub:
   ```bash
   git push origin main
   ```

---

## 6. Branching and Merging

### Creating and Switching to a Branch
A branch is a separate line of development to safely work on new features or experiments.

```bash
git checkout -b my-feature
# or:
# git switch -c my-feature
```
- `checkout -b` creates and switches you to the new branch.  
- Make your changes, then commit them as usual (`git add`, `git commit -m "..."`).

### Merging a Branch into `main`
After you finish the feature and it’s tested, you merge it back into `main`:
1. Switch back to `main`:
   ```bash
   git checkout main
   # or git switch main
   ```
2. Merge the feature branch:
   ```bash
   git merge my-feature
   ```
3. Push the updated `main` to the remote:
   ```bash
   git push origin main
   ```

If you run into **merge conflicts**, Git will tell you which files have conflicting changes. Resolve them manually in your text editor by keeping or adjusting the lines you need, then stage and commit again.

---

## 7. Forking a Repository

Forking is a common way to contribute to someone else’s project:

1. On GitHub, go to the repository you want to fork.  
2. Click the **Fork** button in the top-right corner.  
3. GitHub creates a copy under your account, e.g., `github.com/YourUsername/some-repo`.  
4. **Clone** your fork to your local machine:
   ```bash
   git clone https://github.com/YourUsername/some-repo.git
   ```
5. Make changes, commit, and push to your fork:
   ```bash
   git add .
   git commit -m "Fix typo / Add feature"
   git push origin main
   ```
6. Open a **Pull Request** on the original repository to propose your changes.

---

## 8. Getting Updates from “Upstream” (Keeping Your Fork in Sync)

Often, you’ll want to keep your local fork up to date with the original project (“upstream”):

1. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/OriginalAuthor/some-repo.git
   ```
2. Fetch updates from upstream:
   ```bash
   git fetch upstream
   ```
3. Merge changes into your local `main` branch:
   ```bash
   git checkout main
   git merge upstream/main
   ```
4. Push those changes back to your fork on GitHub:
   ```bash
   git push origin main
   ```

---

## 9. Rebase (Optional Advanced Topic)

**Rebasing** is an alternative to merging that applies your commits on top of the latest changes from another branch, resulting in a cleaner, more linear history. It’s optional but can be very helpful in maintaining a tidy commit log.

- Example (rebasing your feature branch onto the updated `main`):
  ```bash
  # Make sure your main is up to date:
  git checkout main
  git pull origin main

  # Switch to your feature branch:
  git checkout my-feature

  # Rebase feature branch on top of the new main:
  git rebase main
  ```
- If there are conflicts, resolve them and then continue the rebase:
  ```bash
  git add .
  git rebase --continue
  ```
- Finally, push your rebased branch. You may need `--force` if you’ve rewritten commit history:
  ```bash
  git push origin my-feature --force
  ```
For beginners, merges are typically enough. Rebasing is optional and recommended once you’re comfortable with Git basics, especially if the project enforces a rebased (linear) history.

---

## 10. Summary of Common Commands

- **Initialization**: `git init`
- **Clone a repo**: `git clone <repo_url>`
- **View status**: `git status`
- **Stage changes**: `git add .` (or file names)
- **Commit**: `git commit -m "Message"`
- **Push**: `git push origin <branch>`
- **Pull**: `git pull origin <branch>`
- **Check branches**: `git branch`
- **Create/switch branch**: `git checkout -b my-branch` or `git switch -c my-branch`
- **Merge**: `git merge <branch>`
- **Rebase** (advanced): `git rebase main`
- **Fork** (on GitHub) → `git remote add upstream <original_repo>` → `git fetch upstream` → `git merge upstream/main`

