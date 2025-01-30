#!/bin/bash
# This script is used to update the front end of the website

# Delete the old static files
if [ -d "back/src/sonari/statics" ]; then
	rm -rf back/src/sonari/statics
fi

# Go to the root directory of the frontend
cd front

# Install the dependencies
npm install

# Run the build script
npm run build

# Make sure the statics folder exists
if [ ! -d "../back/src/sonari/statics" ]; then
	mkdir ../back/src/sonari/statics
fi

# Move the static files to the backend
mv out/* ../back/src/sonari/statics/
