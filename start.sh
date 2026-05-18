#!/usr/bin/env bash
# start.sh — Start the SPFx dev server (Mac / Linux)
# Run setup.sh first if you haven't already.

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
DIM='\033[2m'
NC='\033[0m'

echo ""
echo -e "${BOLD}╔══════════════════════════════════════╗${NC}"
echo -e "${BOLD}║   sp-page  —  Dev Server (Mac)       ║${NC}"
echo -e "${BOLD}╚══════════════════════════════════════╝${NC}"
echo ""

# ── Locate Node 22 ───────────────────────────────────────────────────────────

find_node22() {
  for prefix in /opt/homebrew /usr/local; do
    if [ -x "$prefix/opt/node@22/bin/node" ]; then
      echo "$prefix/opt/node@22/bin"
      return
    fi
  done

  if [ -s "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
    NVM_VER=$(nvm version 22 2>/dev/null || true)
    if [[ "$NVM_VER" == v22* ]]; then
      nvm use 22 --silent 2>/dev/null || true
      echo "$(dirname "$(which node)")"
      return
    fi
  fi

  if command -v fnm &>/dev/null; then
    fnm use 22 --silent 2>/dev/null || true
    if [[ "$(node --version 2>/dev/null)" == v22* ]]; then
      echo "$(dirname "$(which node)")"
      return
    fi
  fi

  if command -v node &>/dev/null && [[ "$(node --version 2>/dev/null)" == v22* ]]; then
    echo "$(dirname "$(which node)")"
    return
  fi

  echo ""
}

NODE22_BIN=$(find_node22)

if [ -z "$NODE22_BIN" ]; then
  echo -e "${RED}✗ Node 22 not found. Run setup.sh first.${NC}"
  exit 1
fi

export PATH="$NODE22_BIN:$PATH"
echo -e "${GREEN}✓ Node $(node --version)${NC}"

# ── Check node_modules ───────────────────────────────────────────────────────

if [ ! -d "node_modules" ]; then
  echo -e "${RED}✗ node_modules not found. Run setup.sh first.${NC}"
  exit 1
fi

# ── Start ────────────────────────────────────────────────────────────────────

echo ""
echo -e "${BOLD}Starting SPFx fast-serve dev server...${NC}"
echo ""
echo -e "  Workbench: ${CYAN}https://<your-tenant>.sharepoint.com/_layouts/workbench.aspx${NC}"
echo -e "    ${DIM}(replace <your-tenant> with your SharePoint tenant name)${NC}"
echo -e "    ${DIM}When prompted in SharePoint, click 'Load debug scripts'.${NC}"
echo ""
echo -e "  ${DIM}Note: the local workbench (localhost:4321) was removed in SPFx 1.13.${NC}"
echo -e "  ${DIM}      Set your tenant URL in config/serve.json -> initialPage.${NC}"
echo ""
echo -e "  Press ${BOLD}Ctrl+C${NC} to stop."
echo ""

npm run serve
