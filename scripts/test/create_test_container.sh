#!/bin/bash
# This script builds a test container
source ${BASH_SOURCE%/*}//bash_template.sh

# Build the test container from the Dockerfile
docker build -t jarjs:test .
