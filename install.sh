#!/usr/bin/env bash

command_exists () {
    type "$1" &> /dev/null;
}

echo "Checking to see if you have the required tools"
if command_exists node; then
    echo "Awesome node js is installed ..."
fi

if command_exists npm; then
    echo "Cool npm exists ... "
fi




exit 1;
