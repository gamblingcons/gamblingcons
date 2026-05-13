#!/bin/bash
# Script de despliegue para Hostinger VPS
# Ejecutar desde tu máquina local: bash deploy.sh

set -e

VPS_USER="u495895122"
VPS_HOST="145.79.20.180"
VPS_PORT="65002"
APP_DIR="/home/u495895122/gamblingcons"
REPO_URL="https://github.com/gamblingcons/gamblingcons.git"  # ajusta si es diferente

echo "🚀 Desplegando GamblingCons en el VPS..."

ssh -p $VPS_PORT $VPS_USER@$VPS_HOST bash << 'ENDSSH'
set -e

echo "📦 Actualizando sistema..."
apt-get update -qq

# Node.js 20 LTS
if ! command -v node &> /dev/null; then
  echo "📦 Instalando Node.js 20..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
echo "✅ Node: $(node --version) | npm: $(npm --version)"

# PM2
if ! command -v pm2 &> /dev/null; then
  echo "📦 Instalando PM2..."
  npm install -g pm2
fi
echo "✅ PM2: $(pm2 --version)"

# nginx
if ! command -v nginx &> /dev/null; then
  echo "📦 Instalando nginx..."
  apt-get install -y nginx
fi

# App dir
mkdir -p /home/u495895122/gamblingcons

ENDSSH

echo "📁 Subiendo archivos al servidor..."
rsync -avz --exclude='.git' --exclude='node_modules' --exclude='.next' \
  -e "ssh -p $VPS_PORT" \
  ./ $VPS_USER@$VPS_HOST:$APP_DIR/

echo "🔧 Instalando dependencias y haciendo build..."
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST bash << ENDSSH
set -e
cd $APP_DIR
npm install --production=false
npm run build
mkdir -p data

# PM2: iniciar o reiniciar
if pm2 describe gamblingcons > /dev/null 2>&1; then
  pm2 restart gamblingcons
else
  pm2 start npm --name "gamblingcons" -- start
fi
pm2 save
pm2 startup | tail -1 | bash 2>/dev/null || true
ENDSSH

echo "🌐 Configurando nginx..."
ssh -p $VPS_PORT $VPS_USER@$VPS_HOST bash << 'ENDSSH'
cat > /etc/nginx/sites-available/gamblingcons << 'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/gamblingcons /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
ENDSSH

echo ""
echo "✅ ¡Despliegue completado!"
echo "🌍 Tu app está en: http://$VPS_HOST"
echo "📊 CRM interno:    http://$VPS_HOST/dashboard"
echo ""
echo "Comandos útiles (desde el VPS):"
echo "  pm2 logs gamblingcons    → ver logs"
echo "  pm2 status               → estado del proceso"
