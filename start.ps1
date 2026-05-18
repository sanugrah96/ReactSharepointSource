# start.ps1 — Start the SPFx dev server (Windows)
# Usage:  .\start.ps1
# If execution policy blocks this: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# Before running ./start.sh / .\start.ps1, edit config/serve.json:5 and replace {your-tenant} with your real tenan
$ErrorActionPreference = 'Stop'

Write-Host ""
Write-Host "╔══════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   sp-page  —  Dev Server (Windows)   ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# ── Check Node 22 ────────────────────────────────────────────────────────────

function Get-Node22 {
    if (Get-Command nvm -ErrorAction SilentlyContinue) {
        $installed = nvm list 2>$null | Select-String '22\.'
        if ($installed) { nvm use 22 2>$null | Out-Null }
    }
    if (Get-Command fnm -ErrorAction SilentlyContinue) {
        fnm use 22 2>$null | Out-Null
    }
    if (Get-Command node -ErrorAction SilentlyContinue) {
        $ver = (node --version 2>$null)
        if ($ver -match '^v22\.') { return $ver }
    }
    return $null
}

$nodeVer = Get-Node22
if (-not $nodeVer) {
    Write-Host "✗ Node 22 not found. Run .\setup.ps1 first." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Node $nodeVer" -ForegroundColor Green

# ── Check node_modules ───────────────────────────────────────────────────────

if (-not (Test-Path "node_modules")) {
    Write-Host "✗ node_modules not found. Run .\setup.ps1 first." -ForegroundColor Red
    exit 1
}

# ── Start ────────────────────────────────────────────────────────────────────

Write-Host ""
Write-Host "Starting SPFx fast-serve dev server..." -ForegroundColor White
Write-Host ""
Write-Host "  Workbench: https://<your-tenant>.sharepoint.com/_layouts/workbench.aspx" -ForegroundColor Cyan
Write-Host "    (replace <your-tenant> with your SharePoint tenant name)" -ForegroundColor DarkGray
Write-Host "    When prompted in SharePoint, click 'Load debug scripts'." -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Note: the local workbench (localhost:4321) was removed in SPFx 1.13." -ForegroundColor DarkGray
Write-Host "        Set your tenant URL in config/serve.json -> initialPage." -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Press Ctrl+C to stop."
Write-Host ""

npm run serve
