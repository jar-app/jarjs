#!/bin/bash
# This script takes in a TEST_TYPE and runs
# the specified test commands
source ${BASH_SOURCE%/*}//bash_template.sh

# Start a background container
export CONTAINER_NAME=jarjs_test
docker run --tty --detach --name $CONTAINER_NAME jarjs:test /bin/bash

# Compile ALL typescript files
docker exec --tty $CONTAINER_NAME tsc


if [ $TEST_TYPE = "unit" ]
then
  echo "TODO"
elif [ $TEST_TYPE = "other" ]
then
  # Find all files with the .ts extension and run tslint on them
  TS_FILES=`docker exec --tty $CONTAINER_NAME find . -name "*.ts" -not -path "./node_modules/*" -not -path "./typings/*" -prune -print0`
  echo "Typescript Files are: $TS_FILES"
  docker exec --tty $CONTAINER_NAME tslint $TS_FILES
  docker exec --tty jarjs_test webpack --config webpack.config.js
elif [ $TEST_TYPE = "coverage" ]
then
  echo "TODO"
else
  echo "Unknown TEST_TYPE: '$TEST_TYPE'"
  exit -1
fi
