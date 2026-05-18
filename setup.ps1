# setup.ps1 — First-time setup for sp-page (Windows)
# Run this once after cloning. Re-run after any git pull that changes package.json.
# Usage:  .\setup.ps1
# If execution policy blocks this: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

$ErrorActionPreference = 'Stop'

Write-Host ""
Write-Host "╔══════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   sp-page  —  Setup (Windows)        ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# ── 1. Node version compatibility check ──────────────────────────────────────

Write-Host "[1/3] Checking Node version..." -ForegroundColor Cyan
Write-Host ""

# SPFx 1.21 supported range: >=18.17.1 <19 || >=20.11.0 <21 || >=22.14.0 <23
function Test-NodeSupported {
    param([int]$Major, [int]$Minor, [int]$Patch)
    if ($Major -eq 18 -and ($Minor -gt 17 -or ($Minor -eq 17 -and $Patch -ge 1))) { return $true }
    if ($Major -eq 20 -and ($Minor -gt 11 -or ($Minor -eq 11 -and $Patch -ge 0))) { return $true }
    if ($Major -eq 22 -and ($Minor -gt 14 -or ($Minor -eq 14 -and $Patch -ge 0))) { return $true }
    return $false
}

# Print compatibility table
Write-Host "  SPFx 1.21 — Node.js compatibility" -ForegroundColor White
Write-Host "  ──────────────────────────────────────────────────" -ForegroundColor DarkGray

$rows = @(
    @{ Status='err';  Range='< 18.17.1';        Label='Too old';         Note='(any version below 18.17.1)' },
    @{ Status='ok';   Range='18.17.1 – 18.x';   Label='LTS Hydrogen';    Note='supported' },
    @{ Status='err';  Range='19.x';              Label='Unsupported';     Note='(odd release, skip)' },
    @{ Status='ok';   Range='20.11.0 – 20.x';   Label='LTS Iron';        Note='supported' },
    @{ Status='err';  Range='21.x';              Label='Unsupported';     Note='(odd release, skip)' },
    @{ Status='ok';   Range='22.14.0 – 22.x';   Label='LTS Jod';         Note='supported  ← recommended' },
    @{ Status='err';  Range='23.x and above';    Label='Too new';         Note='(not yet validated by SPFx)' }
)

foreach ($row in $rows) {
    $icon  = if ($row.Status -eq 'ok') { '✓' } else { '✗' }
    $color = if ($row.Status -eq 'ok') { 'Green' } else { 'Red' }
    $range = $row.Range.PadRight(22)
    Write-Host ("  " + $icon + "  " + $range) -ForegroundColor $color -NoNewline
    Write-Host ("  " + $row.Label + "  " + $row.Note) -ForegroundColor DarkGray
}

Write-Host "  ──────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

# Detect system node
$systemVersion = $null
$systemOk      = $false

if (Get-Command node -ErrorAction SilentlyContinue) {
    $raw = (node --version 2>$null)           # e.g. v22.14.0
    if ($raw -match '^v(\d+)\.(\d+)\.(\d+)') {
        $systemVersion = $raw
        $maj = [int]$Matches[1]
        $min = [int]$Matches[2]
        $pat = [int]$Matches[3]
        $systemOk = Test-NodeSupported $maj $min $pat
    }
}

if (-not $systemVersion) {
    Write-Host "  ✗  System Node:  not found" -ForegroundColor Red
} elseif ($systemOk) {
    Write-Host ("  ✓  System Node:  $systemVersion  — supported") -ForegroundColor Green
} else {
    Write-Host ("  ✗  System Node:  $systemVersion  — NOT supported") -ForegroundColor Red
}

Write-Host ""

# ── Resolve a supported Node version ─────────────────────────────────────────

function Find-SupportedNode {
    # nvm-windows — try 22, 20, 18
    if (Get-Command nvm -ErrorAction SilentlyContinue) {
        foreach ($try in @('22', '20', '18')) {
            $listed = nvm list 2>$null | Select-String "\b$try\."
            if ($listed) {
                nvm use $try 2>$null | Out-Null
                $v = (node --version 2>$null)
                if ($v -match '^v(\d+)\.(\d+)\.(\d+)') {
                    if (Test-NodeSupported ([int]$Matches[1]) ([int]$Matches[2]) ([int]$Matches[3])) {
                        return $v
                    }
                }
            }
        }
    }

    # fnm — try 22, 20, 18
    if (Get-Command fnm -ErrorAction SilentlyContinue) {
        foreach ($try in @('22', '20', '18')) {
            fnm use $try 2>$null | Out-Null
            $v = (node --version 2>$null)
            if ($v -match '^v(\d+)\.(\d+)\.(\d+)') {
                if (Test-NodeSupported ([int]$Matches[1]) ([int]$Matches[2]) ([int]$Matches[3])) {
                    return $v
                }
            }
        }
    }

    # System node if already OK
    if ($systemOk) { return $systemVersion }
    return $null
}

$resolvedVersion = $null

if ($systemOk) {
    Write-Host "  Using system Node $systemVersion" -ForegroundColor Green
    $resolvedVersion = $systemVersion
} else {
    Write-Host "  System Node is not supported — searching for a compatible version..." -ForegroundColor Yellow
    $resolvedVersion = Find-SupportedNode

    if (-not $resolvedVersion) {
        Write-Host ""
        Write-Host "  No supported Node version found on this machine." -ForegroundColor Red
        Write-Host ""
        Write-Host "  Install a supported version:" -ForegroundColor White
        Write-Host ""
        Write-Host "  nvm-windows (recommended):" -ForegroundColor White
        Write-Host "    nvm install 22"
        Write-Host "    nvm use 22"
        Write-Host ""
        Write-Host "  fnm:" -ForegroundColor White
        Write-Host "    fnm install 22"
        Write-Host "    fnm use 22"
        Write-Host ""
        Write-Host "  Direct installer:" -ForegroundColor White
        Write-Host "    https://nodejs.org  (download Node 22.x LTS)"
        Write-Host ""
        exit 1
    }

    Write-Host "  Found compatible Node $resolvedVersion" -ForegroundColor Green
}

Write-Host "✓ Node $resolvedVersion will be used for this project." -ForegroundColor Green

# ── 2. Install dependencies ───────────────────────────────────────────────────

Write-Host ""
Write-Host "[2/3] Installing dependencies (npm install --legacy-peer-deps)..." -ForegroundColor Cyan
Write-Host "  This may take a few minutes on first run." -ForegroundColor Yellow
Write-Host ""

npm install --legacy-peer-deps
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ npm install failed." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✓ Dependencies installed." -ForegroundColor Green

# ── 3. Trust the dev certificate ─────────────────────────────────────────────

Write-Host ""
Write-Host "[3/3] Trusting the SPFx developer certificate..." -ForegroundColor Cyan
Write-Host "  A security prompt may appear — click Yes to trust the certificate." -ForegroundColor Yellow
Write-Host ""

npx gulp trust-dev-cert
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Certificate trust failed. Run manually: npx gulp trust-dev-cert" -ForegroundColor Red
} else {
    Write-Host ""
    Write-Host "✓ Certificate trusted." -ForegroundColor Green
}

# ── Done ─────────────────────────────────────────────────────────────────────

Write-Host ""
Write-Host "Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Set your SharePoint tenant URL in config/serve.json -> initialPage"
Write-Host "     (replace <your-tenant> with your real tenant name)"
Write-Host "  2. Start the dev server:  .\start.ps1"
Write-Host "  3. Open the hosted workbench:" -ForegroundColor White
Write-Host "       https://<your-tenant>.sharepoint.com/_layouts/workbench.aspx" -ForegroundColor Cyan
Write-Host "     Click 'Load debug scripts' when SharePoint prompts." -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Note: the local workbench (localhost:4321) was removed in SPFx 1.13." -ForegroundColor DarkGray
Write-Host "        Only the hosted workbench works in this project." -ForegroundColor DarkGray
Write-Host ""
Write-Host "Production build:"
Write-Host "  npx gulp bundle --ship"
Write-Host "  npx gulp package-solution --ship"
Write-Host ""
