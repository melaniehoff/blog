#!/usr/bin/env bash
set -e
./build.sh
git add -A
git commit -m "build commit"
git subtree push --prefix dist/prod origin gh-pages

