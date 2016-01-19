#!/usr/bin/env bash

HTTP_SERVER="node_modules/http-server/bin/http-server"

command_exists () {
    type "$1" &> /dev/null;
}

echo "Checking to see if you have the required tools"
if ! [ -x "$(command -v node)" ]; then
    echo "Node js is required. Please install node js and run this script again."
    exit 1;
fi

if ! [ -x "$(command -v npm)" ]; then
    echo "Npm is required. Please install npm and run this script again"
    exit 1;
fi

if ! [ -x "$(command -v bower)" ]; then
    echo "Bower is required. Will now attempt to install bower"
    npm install -g bower
fi

if ! [ -x "$(command -v bower-installer)" ]; then
    echo "Bower installer is required. Will now attempt to install bower"
    npm install -g bower-installer
fi

echo "Running npm install"
npm install
echo "Runnning bower installer"
bower-installer
echo "Starting up a simple http server at : ${HTTP_SERVER}"
node ${HTTP_SERVER}
