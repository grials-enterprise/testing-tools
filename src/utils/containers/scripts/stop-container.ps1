param (
    [string]$composeFile
)

if (-not $composeFile) {
    Write-Host "No compose file provided"
    exit 1
}

Write-Host "Using compose file: $composeFile"

docker compose -f $composeFile down -v