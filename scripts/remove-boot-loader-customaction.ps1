<#
.SYNOPSIS
  Removes every trace of the "TheSourceBootLoader" ApplicationCustomizer so the
  full-screen boot loader stops appearing.

.DESCRIPTION
  The boot loader was an ClientSideExtension.ApplicationCustomizer registered by
  this solution. It was removed from the package, but SharePoint does NOT
  deprovision an already-registered extension on an in-place app *update*. It can
  live in up to three places depending on how the app was deployed:

    1. A Web-scoped CustomAction on the site.
    2. A Site(collection)-scoped CustomAction.
    3. A row in the App Catalog's "Tenant Wide Extensions" list (this is what
       makes it appear on EVERY site / on refresh no matter what you do at the
       site level).

  This script removes 1 and 2 when pointed at the site, and 3 when pointed at the
  App Catalog with -CleanTenantWide.

.PREREQUISITES
  Install-Module PnP.PowerShell -Scope CurrentUser
  (Manage Web on the site; for tenant-wide cleanup, App Catalog access.)

.EXAMPLE
  # Step 1 — clean the site:
  ./remove-boot-loader-customaction.ps1 -Url "https://tekbuilder1.sharepoint.com/sites/TheSource"

  # Step 2 — if it still shows on refresh, clean the tenant-wide registration:
  ./remove-boot-loader-customaction.ps1 -Url "https://tekbuilder1.sharepoint.com/sites/appcatalog" -CleanTenantWide
#>

[CmdletBinding(SupportsShouldProcess = $true)]
param(
  [string] $Url = "https://tekbuilder1.sharepoint.com/sites/TheSource",
  [string] $ComponentId = "001545b3-10d8-4734-ad06-cb80781a30ec",
  [string] $Title = "TheSourceBootLoader",
  [switch] $CleanTenantWide
)

$ErrorActionPreference = "Stop"

Write-Host "Connecting to $Url ..." -ForegroundColor Cyan
Connect-PnPOnline -Url $Url -Interactive

$removed = 0

# --- 1 & 2: site / web CustomActions -------------------------------------------
foreach ($scope in @("Web", "Site")) {
  $matches = Get-PnPCustomAction -Scope $scope | Where-Object {
    $_.Title -eq $Title -or
    ($_.ClientSideComponentId -and $_.ClientSideComponentId.ToString() -eq $ComponentId)
  }
  if (-not $matches) { Write-Host "[$scope] none." -ForegroundColor DarkGray; continue }
  foreach ($a in $matches) {
    Write-Host "[$scope] '$($a.Title)' Id=$($a.Id) Location=$($a.Location)" -ForegroundColor Yellow
    if ($PSCmdlet.ShouldProcess("$scope CustomAction $($a.Id)", "Remove")) {
      Remove-PnPCustomAction -Identity $a.Id -Scope $scope -Force
      Write-Host "[$scope] removed $($a.Id)." -ForegroundColor Green
      $removed++
    }
  }
}

# --- 3: App Catalog "Tenant Wide Extensions" list ------------------------------
if ($CleanTenantWide) {
  Write-Host "Checking 'Tenant Wide Extensions' list ..." -ForegroundColor Cyan
  try {
    $items = Get-PnPListItem -List "Tenant Wide Extensions" -PageSize 500
    $twMatches = $items | Where-Object {
      $_["Title"] -eq $Title -or
      ($_["TenantWideExtensionComponentId"] -and
       $_["TenantWideExtensionComponentId"].ToString() -eq $ComponentId)
    }
    if (-not $twMatches) {
      Write-Host "[TenantWide] none." -ForegroundColor DarkGray
    } else {
      foreach ($it in $twMatches) {
        Write-Host "[TenantWide] '$($it["Title"])' Id=$($it.Id)" -ForegroundColor Yellow
        if ($PSCmdlet.ShouldProcess("TenantWideExtensions item $($it.Id)", "Remove")) {
          Remove-PnPListItem -List "Tenant Wide Extensions" -Identity $it.Id -Force
          Write-Host "[TenantWide] removed item $($it.Id)." -ForegroundColor Green
          $removed++
        }
      }
    }
  } catch {
    Write-Host "[TenantWide] Could not read 'Tenant Wide Extensions' list at $Url — make sure this URL is your App Catalog site. $_" -ForegroundColor Red
  }
}

Write-Host ""
if ($removed -gt 0) {
  Write-Host "Removed $removed registration(s). Hard-refresh (Ctrl+F5). Tenant-wide changes can take a few minutes to propagate." -ForegroundColor Green
} else {
  Write-Host "Nothing removed at this scope. If the loader persists, re-run with -CleanTenantWide against your App Catalog URL." -ForegroundColor Yellow
}

Disconnect-PnPOnline
