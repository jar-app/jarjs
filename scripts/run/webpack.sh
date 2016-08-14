#!/bin/bash
# This script is meant to run webpack with some useful flags
source ${BASH_SOURCE%/*}/../bash_template.sh


webpack --progress --profile --colors --display-error-details --display-cached --config webpack.config.js