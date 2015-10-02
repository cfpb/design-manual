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
  BOWER_DIR=bower_components

  if [ -f .bowerrc ]; then
    # Get the "directory" line from .bowerrc
    BOWER_DIR=$(grep "directory" .bowerrc | cut -d '"' -f 4)
  fi

  echo 'npm components directory:' $NODE_DIR
  echo 'Bower components directory:' $BOWER_DIR
}

# Clean project dependencies.
clean(){
  # If the node and bower directories already exist,
  # clear them so we know we're working with a clean
  # slate of the dependencies listed in package.json
  # and bower.json.
  if [ -d $NODE_DIR ] || [ -d $BOWER_DIR ]; then
    echo 'Removing project dependency directories...'
    rm -rf $NODE_DIR
    rm -rf $BOWER_DIR
  fi
  echo 'Project dependencies have been removed.'
}

# Install project dependencies.
install(){
  echo 'Installing project dependencies...'
  bundle install
  npm install
  bower install --config.interactive=false
}

# Run tasks to build the project for distribution.
build(){
  echo 'Building project...'
  grunt build
  echo 'Your project is ready.' 
  echo 'To serve, run `bundle exec jekyll serve --watch --baseurl ''`'
}

init
clean
install
build
