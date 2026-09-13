#!/bin/bash
npm run build:ts
mkdir -p dist/utils/containers/scripts
cp -r ./src/utils/containers/scripts/. ./dist/utils/containers/scripts/.
mkdir -p dist/utils/containers/composeFiles
cp -r ./src/utils/containers/composeFiles/. ./dist/utils/containers/composeFiles/.