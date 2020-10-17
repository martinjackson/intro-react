#!/bin/bash

LOG="./server.log"

exec &> >(tee -a "$LOG")

node server.js --port 8000 --home ../client/build --hostname localhost 2>&1 &
echo $! >server.pid
