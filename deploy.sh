#!/usr/bin/env bash
set -e
./build.sh
git add -A
git commit -m "build commit"
git push origin master
git subtree push --prefix dist/prod origin gh-pages

