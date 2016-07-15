# ==========================================================================
# Setup script for installing project dependencies.
# NOTE: Run this script while in the project root directory.
#       It will not run correctly when run from another directory.
# ==========================================================================

# Set script to exit on any errors.
set -e

# Initialize project dependency directories.
init(){
  NODE_DIR=node_modules

  echo 'npm components directory:' $NODE_DIR
}

# Clean project dependencies.
clean(){
  # If the node directory already exists,
  # clear it so we know we're working with a clean
  # slate of the dependencies listed in package.json.
  if [ -d $NODE_DIR ]; then
    echo 'Removing project dependency directories...'
    rm -rf $NODE_DIR
  fi
  echo 'Project dependencies have been removed.'
}

# Install project dependencies.
install(){
  echo 'Installing project dependencies...'
  bundle install
  npm install
}

# Run tasks to build the project for distribution.
build(){
  echo 'Building project...'
  grunt build
  echo 'Your project is ready.'
}

init
clean
install
build
