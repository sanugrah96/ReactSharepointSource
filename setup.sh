#!/usr/bin/env bash
# setup.sh — First-time setup for sp-page (Mac / Linux)
# Run this once after cloning. Re-run any time after a git pull that changes package.json.

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
echo -e "${BOLD}║   sp-page  —  Setup (Mac / Linux)    ║${NC}"
echo -e "${BOLD}╚══════════════════════════════════════╝${NC}"
echo ""

# ── 1. Node version compatibility check ──────────────────────────────────────

echo -e "${CYAN}[1/3] Checking Node version...${NC}"
echo ""

# SPFx 1.21 supported range: >=18.17.1 <19 || >=20.11.0 <21 || >=22.14.0 <23
SYSTEM_NODE=""
SYSTEM_VER=""
if command -v node &>/dev/null; then
  SYSTEM_VER=$(node --version 2>/dev/null || true)   # e.g. v22.14.0
  SYSTEM_NODE=$(node --version 2>/dev/null | sed 's/v//' || true)  # e.g. 22.14.0
fi

MAJOR=$(echo "$SYSTEM_NODE" | cut -d. -f1)
MINOR=$(echo "$SYSTEM_NODE" | cut -d. -f2)
PATCH=$(echo "$SYSTEM_NODE" | cut -d. -f3)

# Print compatibility table
echo -e "  ${BOLD}SPFx 1.21 — Node.js compatibility${NC}"
echo -e "  ${DIM}──────────────────────────────────────────────────${NC}"

print_row() {
  local status=$1 range=$2 label=$3 note=$4
  if [ "$status" = "ok" ]; then
    printf "  ${GREEN}✓${NC}  %-22s ${DIM}%s${NC}\n" "$range" "$label $note"
  elif [ "$status" = "warn" ]; then
    printf "  ${YELLOW}~${NC}  %-22s ${DIM}%s${NC}\n" "$range" "$label $note"
  else
    printf "  ${RED}✗${NC}  %-22s ${DIM}%s${NC}\n" "$range" "$label $note"
  fi
}

print_row "err"  "< 18.17.1"          "Too old"            "(any major below 18.17.1)"
print_row "ok"   "18.17.1 – 18.x"     "LTS Hydrogen"       "✓ supported"
print_row "err"  "19.x"               "Unsupported"        "(odd release, skip)"
print_row "ok"   "20.11.0 – 20.x"     "LTS Iron"           "✓ supported"
print_row "err"  "21.x"               "Unsupported"        "(odd release, skip)"
print_row "ok"   "22.14.0 – 22.x"     "LTS Jod"            "✓ supported  ← recommended"
print_row "err"  "23.x and above"     "Too new"            "(not yet validated by SPFx)"

echo -e "  ${DIM}──────────────────────────────────────────────────${NC}"

# Evaluate system node
is_supported() {
  local major=$1 minor=$2 patch=$3
  # 18.17.1 – 18.x
  if [ "$major" -eq 18 ] && \
     ( [ "$minor" -gt 17 ] || ( [ "$minor" -eq 17 ] && [ "$patch" -ge 1 ] ) ); then
    return 0
  fi
  # 20.11.0 – 20.x
  if [ "$major" -eq 20 ] && \
     ( [ "$minor" -gt 11 ] || ( [ "$minor" -eq 11 ] && [ "$patch" -ge 0 ] ) ); then
    return 0
  fi
  # 22.14.0 – 22.x
  if [ "$major" -eq 22 ] && \
     ( [ "$minor" -gt 14 ] || ( [ "$minor" -eq 14 ] && [ "$patch" -ge 0 ] ) ); then
    return 0
  fi
  return 1
}

echo ""
if [ -z "$SYSTEM_NODE" ]; then
  echo -e "  ${RED}✗  System Node:  not found${NC}"
  SYSTEM_OK=false
elif is_supported "$MAJOR" "$MINOR" "$PATCH" 2>/dev/null; then
  echo -e "  ${GREEN}✓  System Node:  $SYSTEM_VER  — supported${NC}"
  SYSTEM_OK=true
else
  echo -e "  ${RED}✗  System Node:  $SYSTEM_VER  — NOT supported${NC}"
  SYSTEM_OK=false
fi

echo ""

# ── Try to resolve a supported Node ──────────────────────────────────────────

find_supported_node() {
  # 1. Homebrew node@22 keg (Apple Silicon)
  if [ -x "/opt/homebrew/opt/node@22/bin/node" ]; then
    echo "/opt/homebrew/opt/node@22/bin"
    return
  fi
  # 2. Homebrew node@22 keg (Intel)
  if [ -x "/usr/local/opt/node@22/bin/node" ]; then
    echo "/usr/local/opt/node@22/bin"
    return
  fi
  # 3. nvm — prefer 22, then 20, then 18
  if [ -s "$HOME/.nvm/nvm.sh" ]; then
    # shellcheck source=/dev/null
    source "$HOME/.nvm/nvm.sh"
    for try_ver in 22 20 18; do
      NVM_VER=$(nvm version "$try_ver" 2>/dev/null || true)
      if [[ "$NVM_VER" == v* ]]; then
        nvm use "$try_ver" --silent 2>/dev/null || true
        echo "$(dirname "$(which node)")"
        return
      fi
    done
  fi
  # 4. fnm — prefer 22, then 20, then 18
  if command -v fnm &>/dev/null; then
    for try_ver in 22 20 18; do
      if fnm use "$try_ver" --silent 2>/dev/null; then
        if command -v node &>/dev/null && is_supported \
            "$(node --version | sed 's/v//' | cut -d. -f1)" \
            "$(node --version | sed 's/v//' | cut -d. -f2)" \
            "$(node --version | sed 's/v//' | cut -d. -f3)" 2>/dev/null; then
          echo "$(dirname "$(which node)")"
          return
        fi
      fi
    done
  fi
  # 5. System node if it's already supported
  if [ "$SYSTEM_OK" = "true" ]; then
    echo "$(dirname "$(which node)")"
    return
  fi
  echo ""
}

if [ "$SYSTEM_OK" = "true" ]; then
  NODE_BIN=$(dirname "$(which node)")
  echo -e "${GREEN}  Using system Node $SYSTEM_VER${NC}"
else
  echo -e "${YELLOW}  System Node is not supported — searching for a compatible version...${NC}"
  NODE_BIN=$(find_supported_node)

  if [ -z "$NODE_BIN" ]; then
    echo ""
    echo -e "${RED}  No supported Node version found on this machine.${NC}"
    echo ""
    echo -e "  Install a supported version with one of these commands:"
    echo ""
    echo -e "  ${BOLD}Homebrew (recommended on Mac):${NC}"
    echo -e "    brew install node@22"
    echo -e "    echo 'export PATH=\"/opt/homebrew/opt/node@22/bin:\$PATH\"' >> ~/.zshrc"
    echo -e "    source ~/.zshrc"
    echo ""
    echo -e "  ${BOLD}nvm:${NC}"
    echo -e "    nvm install 22 && nvm use 22"
    echo ""
    echo -e "  ${BOLD}fnm:${NC}"
    echo -e "    fnm install 22 && fnm use 22"
    echo ""
    exit 1
  fi

  export PATH="$NODE_BIN:$PATH"
  RESOLVED_VER=$(node --version)
  echo -e "${GREEN}  Found compatible Node $RESOLVED_VER  ($NODE_BIN)${NC}"
fi

export PATH="$NODE_BIN:$PATH"
ACTIVE_VER=$(node --version)
echo -e "${GREEN}✓ Node $ACTIVE_VER will be used for this project.${NC}"

# ── 2. Install dependencies ───────────────────────────────────────────────────

echo ""
echo -e "${CYAN}[2/3] Installing dependencies (npm install --legacy-peer-deps)...${NC}"
echo -e "${YELLOW}  This may take a few minutes on first run.${NC}"
echo ""

npm install --legacy-peer-deps

echo ""
echo -e "${GREEN}✓ Dependencies installed.${NC}"

# ── 3. Trust the dev certificate (HTTPS workbench) ───────────────────────────

echo ""
echo -e "${CYAN}[3/3] Trusting the SPFx developer certificate...${NC}"
echo -e "${YELLOW}  You may be prompted for your system password.${NC}"
echo ""

npx gulp trust-dev-cert

echo ""
echo -e "${GREEN}✓ Certificate trusted.${NC}"

# ── Done ─────────────────────────────────────────────────────────────────────

echo ""
echo -e "${BOLD}${GREEN}Setup complete!${NC}"
echo ""
echo "Next steps:"
echo -e "  1. Set your SharePoint tenant URL in ${BOLD}config/serve.json${NC} -> ${BOLD}initialPage${NC}"
echo -e "     (replace ${BOLD}<your-tenant>${NC} with your real tenant name)"
echo -e "  2. Start the dev server:  ${BOLD}./start.sh${NC}"
echo -e "  3. Open the hosted workbench:"
echo -e "       ${CYAN}https://<your-tenant>.sharepoint.com/_layouts/workbench.aspx${NC}"
echo -e "     ${DIM}Click 'Load debug scripts' when SharePoint prompts.${NC}"
echo ""
echo -e "  ${DIM}Note: the local workbench (localhost:4321) was removed in SPFx 1.13.${NC}"
echo -e "  ${DIM}      Only the hosted workbench works in this project.${NC}"
echo ""
echo "Production build:"
echo "  PATH=\"$NODE_BIN:\$PATH\" npx gulp bundle --ship"
echo "  PATH=\"$NODE_BIN:\$PATH\" npx gulp package-solution --ship"
echo ""
