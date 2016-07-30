#!/bin/bash
# This script builds and starts up a test container named jarjs_test
source ${BASH_SOURCE%/*}/../bash_template.sh

# Build the test container from the Dockerfile
docker build -t jarjs:test .

# Set our container name 
export CONTAINER_NAME=jarjs_test

# Kill any existing background containers
# Useful for local dev
docker kill $CONTAINER_NAME 2> /dev/null
docker rm $CONTAINER_NAME 2> /dev/null

# Start a background container
docker run --tty --publish 9876 --detach --name $CONTAINER_NAME jarjs:test /bin/bash

function run_in_container() {
  docker exec --tty $CONTAINER_NAME $@  
}