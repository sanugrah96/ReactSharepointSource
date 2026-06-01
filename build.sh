#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 22

npm install

./node_modules/.bin/gulp bundle --ship
./node_modules/.bin/gulp package-solution --ship
