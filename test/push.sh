#!/bin/bash
dir=/tmp/cicada-test/$(node -pe 'Math.random().toString(16).slice(2)')
mkdir -p $dir
cd $dir
git clone https://github.com/knspriggs/cicada.git
cd cicada
touch package.json
git add -u
git commit -m 'beep boop'
echo "Pushing to master..."
git push "$1" master
