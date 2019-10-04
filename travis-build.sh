#!/usr/bin/env bash

#### halt script on error
set -xe

echo '##### Print environment'
env | sort

# Remove existing docs
if [ -d "./dist" ]; then
    rm -r ./dist
fi
npm run build
