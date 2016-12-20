#!/bin/bash

MACHINE='petfinder'

export PROJECT=$(basename ${PWD} | sed 's/[-_]//g')

# Setup some functions to output warnings.
notice() {
  printf "\e[32;01m$1\e[39;49;00m\n"
}

warning() {
  printf "\e[33;01m$1\e[39;49;00m\n"
}

error() {
  printf "\e[31;01m$1\e[39;49;00m\n"
}

if [ "$(uname)" == "Darwin" ]; then
  HOST_TYPE='mac'
else
  HOST_TYPE='linux'
fi

start() {
  notice "Building images ..."
  docker-compose build
  notice "Starting ..."
  docker-compose up -d
}

stop() {
  notice "Stopping ..."
  docker-compose down
}

purge() {
  notice "Removing ..."
  docker-compose rm -f
}

COMMAND=${1:-default}

case ${COMMAND} in
  p*)
    purge
    ;;
  sta*)
    start
    ;;
  sto*)
    stop
    ;;
  *)
    warning "Unknown command specified, defaulting to start command"
    start
    ;;
esac
