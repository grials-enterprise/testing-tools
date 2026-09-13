#!/bin/bash
# Usage: ./stop-container.sh <compose-file>
composeFile=$1

if [ -z "$composeFile" ]; then
  echo "No compose file provided"
  exit 1
fi

docker compose -f $composeFile down -v