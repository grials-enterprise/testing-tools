#!/bin/bash
# Usage: ./start-container.sh <compose-file>
composeFile=$1

if [ -z "$composeFile" ]; then
  echo "No compose file provided"
  exit 1
fi


docker rm -f zookeeper-testing kafka-testing
docker compose -f $composeFile up -d