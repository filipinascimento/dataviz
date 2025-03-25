#!/bin/bash

# Exit on any error
set -e

# Define functions for colored output
info() { echo -e "\033[1;34m[INFO]\033[0m $1"; }
success() { echo -e "\033[1;32m[SUCCESS]\033[0m $1"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $1"; }

# Ensure Python is installed
if ! command -v python3 &>/dev/null; then
    error "Python 3 is not installed. Please install it and try again."
    exit 1
fi

# Ensure pip is installed
if ! command -v pip &>/dev/null; then
    error "pip is not installed. Please install it and try again."
    exit 1
fi

# Ensure mkdocs is installed
if ! pip show mkdocs &>/dev/null; then
    info "MkDocs is not installed. Installing MkDocs and dependencies..."
    pip install mkdocs mkdocs-material mkdocs-jupyter
fi

# Create a cache directory if it doesn't exist
CACHE_DIR=".cache"
if [ ! -d "$CACHE_DIR" ]; then
    info "Creating cache directory..."
    mkdir -p "$CACHE_DIR"
else
    info "Using existing cache directory..."
fi

# Copy README.md to docs/index.md if it exists
if [ -f "README.md" ]; then
    info "Preparing documentation index..."
    mkdir -p docs
    echo "---\nlayout: default\n---\n$(cat README.md)" > docs/index.md
else
    error "README.md not found. Please ensure it exists in the root directory."
    exit 1
fi

# Cleaning...
# mkdocs build --clean
# Serve the MkDocs site locally
info "Building and serving MkDocs site..."
mkdocs serve --clean

# Output instructions for accessing the site
success "MkDocs site is live at http://127.0.0.1:8000"