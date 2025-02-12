# Terminal Basics
Below is a concise, beginner-friendly guide to using the command line (often called the “terminal” in macOS and Linux). The guide covers the basics for Windows, macOS, and Linux side-by-side. Mastering the terminal is vital for our Data Viz course as it empowers you to efficiently manage files, automate workflows, and interact with various AI tools and scripts.

---

## 1. Opening the Command Line

### Windows
- **Command Prompt**: Press `Win + R`, type `cmd`, and hit Enter.  
- **PowerShell**: Press `Win + X` and select “Windows PowerShell” (or just search for PowerShell in the Start menu).

### macOS
- **Terminal**: Open “Applications” → “Utilities” → “Terminal”, or use Spotlight search (`Cmd + Space`) and type “Terminal”.

### Linux
- **Terminal**: Typically found in the application menu under “Accessories” or “System Tools”. You can also use a keyboard shortcut like `Ctrl + Alt + T` on many distributions.

---

## 2. Basic Navigation Commands

| Action                  | Windows              | macOS / Linux  |
|-------------------------|----------------------|----------------|
| **List files/folders** | `dir`               | `ls`           |
| **Change directory**   | `cd folder_name`    | `cd folder_name` |
| **Go up one directory**| `cd ..`             | `cd ..`        |
| **Clear screen**       | `cls`               | `clear`        |

### Examples
- **List Files**:  
    - Windows: `dir`  
    - macOS/Linux: `ls`  
- **Change Directory** (to `Documents` folder):  
  ```bash
  cd Documents
  ```
- **Go Up One Level**:  
  ```bash
  cd ..
  ```

---

## 3. Creating and Managing Folders/Files

| Action                         | Windows (Command Prompt/PowerShell) | macOS / Linux  |
|--------------------------------|-------------------------------------|----------------|
| **Create a folder**            | `mkdir folder_name`                 | `mkdir folder_name` |
| **Remove an empty folder**     | `rmdir folder_name`                 | `rmdir folder_name` |
| **Remove a folder + contents** | `rmdir /s folder_name` (CMD) <br> `Remove-Item folder_name -Recurse -Force` (PowerShell) | `rm -r folder_name` |

### Examples
- **Create Folder**:  
  ```bash
  mkdir MyProject
  ```
- **Remove Folder**:  
    - Windows Command Prompt:
      ```bash
      rmdir /s MyProject
      ```
    - PowerShell:
      ```powershell
      Remove-Item MyProject -Recurse -Force
      ```
    - macOS/Linux:
      ```bash
      rm -r MyProject
      ```

---

## 4. Viewing and Editing Files

| Action                           | Windows (Command Prompt/PowerShell) | macOS / Linux              |
|----------------------------------|-------------------------------------|----------------------------|
| **Show file contents**           | `type filename.txt`                 | `cat filename.txt`         |
| **Open file in text editor**     | Use Notepad or similar: <br> `notepad filename.txt` | Use Nano/Vim/gedit etc.: <br> `nano filename.txt` |

### Examples
- **Display Contents**:
    - Windows: `type README.txt`
    - macOS/Linux: `cat README.txt`
- **Edit File**:
    - Windows: `notepad README.txt`
    - macOS/Linux: `nano README.txt` (or `vim`, `gedit`, etc.)

---

## 5. Copying, Moving, and Deleting Files

| Action                       | Windows                  | macOS / Linux  |
|------------------------------|--------------------------|----------------|
| **Copy a file**             | `copy old.txt new.txt`   | `cp old.txt new.txt`   |
| **Move/rename a file**      | `move old.txt new.txt`   | `mv old.txt new.txt`   |
| **Delete a file**           | `del filename.txt`       | `rm filename.txt`      |

### Examples
- **Copy a File**:  
    - Windows: `copy report.txt backup_report.txt`
    - macOS/Linux: `cp report.txt backup_report.txt`
- **Move/Rename a File**:  
    - Windows: `move data.csv archived_data.csv`
    - macOS/Linux: `mv data.csv archived_data.csv`
- **Delete a File**:  
    - Windows: `del old_data.csv`
    - macOS/Linux: `rm old_data.csv`

---

## 6. Piping and Redirection

Often, you’ll want to chain commands together or redirect output to a file.

| Action                        | Windows (Command Prompt/PowerShell) | macOS / Linux    |
|-------------------------------|--------------------------------------|------------------|
| **Redirect output to a file** | `command > output.txt`              | `command > output.txt` |
| **Append output to a file**   | `command >> output.txt`             | `command >> output.txt` |
| **Pipe output** (send to another command) | `command1 | command2` | `command1 \| command2` |

### Examples
- **Redirect output**:  
    ```bash
    dir > files_list.txt    # Windows
    ls > files_list.txt     # macOS/Linux
    ```
    This saves the output to `files_list.txt` instead of displaying it on the screen.
  
- **Pipe output**:  
    - Windows: `dir | findstr ".py"`  
    - macOS/Linux: `ls | grep ".py"`  
    This finds all Python files in the current directory.

---

## 7. Additional Tips

- **Up/Down Arrow Keys**: Cycle through your command history to reuse or edit previous commands.  
- **Tab Completion**: Start typing a folder or file name and press `Tab` to auto-complete it (works in most shells).  
- **Help**: Use `--help` or `-h` after commands to see help information. Windows commands often use `/?` instead.
- **Case Sensitivity**: Windows commands can be case-insensitive, while macOS/Linux commands are case-sensitive.
- **Historical Commands**: Use `history` (Linux or macOS) or `doskey /history` (Windows) to view past commands.
- **Permissions**: Sometimes you may find permissions issues when running commands. In such cases, you may need to run the command with elevated permissions (e.g., `sudo` on Linux/macOS or as an administrator on Windows). This should be done with caution, especially when deleting files or changing system settings. You may also need to change the permissions of a file or folder; refer to the documentation of your operating system for more information.
    - **Additional Command**: Use `chmod` (Linux/macOS) to change file permissions as needed.
    - **File Ownership Command**: Use `chown` (Linux/macOS) to change file ownership if necessary.

---


## 8. More Resources
- [Windows Command Prompt Documentation](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
- [macOS Terminal Documentation](https://support.apple.com/guide/terminal/welcome/mac)
- [Linux Command Line Basics](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
- [Introduction to permissions in Linux](https://servicenow.iu.edu/kb?id=kb_article_view&sysparm_article=KB0023940)
  
