#!/bin/bash
for i in {1..10}
do
  dir=/tmp/cicada-test/$(node -pe 'Math.random().toString(16).slice(2)')
  mkdir -p $dir
  cd $dir
  git clone https://github.com/knspriggs/cicada.git
  cd cicada
  echo "Pushing to master ($1)..."
  git push "$1" master
done
