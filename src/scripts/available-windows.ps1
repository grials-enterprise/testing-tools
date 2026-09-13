Get-ChildItem -Path "PATH_FOLDER" `
  -Recurse -Filter *.ps1 -File |
  Where-Object { $_.FullName -like "*\node_modules\@pegasimed.com\testing-tools\*" } |
  ForEach-Object {
      $zoneStream = "$($_.FullName):Zone.Identifier"
      if (Test-Path $zoneStream) {
          Remove-Item $zoneStream -Force -ErrorAction SilentlyContinue
      }
  }