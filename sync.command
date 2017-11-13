#!/bin/bash
cd -- "$(dirname "$BASH_SOURCE")"

git add -A && git commit -m "Jimbob is Grizzly." && git push github master
