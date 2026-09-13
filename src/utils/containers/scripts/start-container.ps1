param (
    [string]$composeFile
)

if (-not $composeFile) {
    Write-Host "No compose file provided"
    exit 1
}

Write-Host "Using compose file: $composeFile"

docker rm -f zookeeper-testing kafka-testing
docker compose -f $composeFile up -d