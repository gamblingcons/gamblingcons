#!/bin/bash
# Deploy to Hostinger via MCP (hosting_deployJsApplication)
# Run from Claude Code session: it will create the archive and call the MCP tool.
#
# Usage:
#   bash deploy.sh           — just builds and creates the archive
#   (Then tell Claude Code to deploy it with hosting_deployJsApplication)

set -e

DOMAIN="gamblingcons.com"
ARCHIVE="/tmp/gamblingcons-$(date +%Y%m%d_%H%M%S).zip"

echo "→ Building Next.js..."
npm run build

echo "→ Creating deploy archive (excluding node_modules, .next, .git)..."
zip -r "$ARCHIVE" . \
  --exclude "node_modules/*" \
  --exclude ".next/*" \
  --exclude ".git/*" \
  --exclude ".env*" \
  --exclude "*.zip" \
  --exclude "*.log" \
  --exclude ".DS_Store"

echo ""
echo "✓ Archive: $ARCHIVE"
echo "✓ Domain:  $DOMAIN"
echo ""
echo "Next step — in your Claude Code session, say:"
echo "  'Deploy $ARCHIVE to gamblingcons.com'"
