#!/usr/bin/env bash
# Install and update Node.js and npm
sudo apt update && sudo apt install nodejs npm

# Install pm2 - production process manager for Node.js
sudo npm install -g pm2

# stop any instance of our app running currently
pm2 stop example_app

# Change directory to into folder where pp is downloaded
cd ConverterApp2/

# Install all dependencies
npm install

echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt

# Start the app using pm2
pm2 start ./bin/www --name example_app