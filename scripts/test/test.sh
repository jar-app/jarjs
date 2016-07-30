#!/bin/bash
# This script takes in a TEST_TYPE and runs
# the specified test commands
source ${BASH_SOURCE%/*}/../bash_template.sh
source ${BASH_SOURCE%/*}/init_test_container.sh

# Compile ALL typescript files
run_in_container tsc

if [ $TEST_TYPE = "unit" ]
then
  run_in_container karma start --single-run
elif [ $TEST_TYPE = "other" ]
then
  # Find all files with the .ts extension and run tslint on them
  TS_FILES=`run_in_container find . -path '*.tsx' -o -path '*.ts' -not -path './node_modules/*' -not -path './typings/*'`
  echo "Typescript Files are: $TS_FILES"
  run_in_container tslint $TS_FILES

  # Make sure webpack compiles dependencies
  run_in_container scripts/run/webpack.sh
elif [ $TEST_TYPE = "coverage" ]
then
  echo "TODO"
else
  echo "Unknown TEST_TYPE: '$TEST_TYPE'"
  exit -1
fi
