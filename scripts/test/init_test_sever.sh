#!/bin/bash
# This script takes in a TEST_TYPE and runs
# the specified test commands
source ${BASH_SOURCE%/*}/../bash_template.sh
source ${BASH_SOURCE%/*}/init_test_container.sh

# Compile ALL typescript files
run_in_container tsc

run_in_container karma start
