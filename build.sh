#!/bin/bash

# LifeSigortam.net - Production Build Script
# Bu script projeyi production ortamı için hazırlar

echo "🚀 LifeSigortam.net - Production Build Başlatılıyor..."

# Renkli output için
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Hata durumunda scripti durdur
set -e

# Proje dizini
PROJECT_DIR="/opt/www/lifesigortam"
BUILD_DIR="$PROJECT_DIR/build"
NGINX_DIR="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"

echo -e "${BLUE}📁 Proje dizini kontrol ediliyor...${NC}"
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${YELLOW}⚠️  Proje dizini bulunamadı. Oluşturuluyor: $PROJECT_DIR${NC}"
    sudo mkdir -p "$PROJECT_DIR"
    sudo chown -R www-data:www-data "$PROJECT_DIR"
fi

echo -e "${BLUE}📦 Proje dosyaları kopyalanıyor...${NC}"
cp -r . "$PROJECT_DIR/"

echo -e "${BLUE}🏗️  Build dizinine geçiliyor...${NC}"
cd "$PROJECT_DIR"

echo -e "${BLUE}📋 Node.js versiyonu kontrol ediliyor...${NC}"
node --version
npm --version

echo -e "${BLUE}📦 NPM dependencies yükleniyor...${NC}"
npm install

echo -e "${BLUE}🔧 Production build oluşturuluyor...${NC}"
npm run build

echo -e "${BLUE}📧 Email servisi kuruluyor...${NC}"
# Email servisi için gerekli dependencies
npm install express nodemailer cors

echo -e "${BLUE}🌐 Nginx konfigürasyonu hazırlanıyor...${NC}"

# Nginx konfigürasyonu oluştur
cat > "$NGINX_DIR/lifesigortam.net" << 'EOF'
server {
    listen 80;
    server_name lifesigortam.net www.lifesigortam.net;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Root directory
    root /opt/www/lifesigortam/build;
    index index.html index.htm;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
        add_header X-Content-Type-Options "nosniff";
    }
    
    # API proxy for email service
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Main location for React app
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }
    
    # Security: Hide nginx version
    server_tokens off;
    
    # Prevent access to hidden files
    location ~ /\. {
        deny all;
    }
}
EOF

echo -e "${BLUE}🔗 Nginx sitesi aktifleştiriliyor...${NC}"
sudo ln -sf "$NGINX_DIR/lifesigortam.net" "$NGINX_ENABLED/lifesigortam.net"

echo -e "${BLUE}🧪 Nginx konfigürasyonu test ediliyor...${NC}"
sudo nginx -t

echo -e "${BLUE}📧 Email servisi başlatılıyor...${NC}"
# Email servisi için systemd service dosyası oluştur
cat > "/etc/systemd/system/lifesigortam-email.service" << EOF
[Unit]
Description=LifeSigortam Email Service
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node email-service.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# Systemd service'i etkinleştir
sudo systemctl daemon-reload
sudo systemctl enable lifesigortam-email
sudo systemctl start lifesigortam-email

echo -e "${BLUE}🔄 Nginx yeniden başlatılıyor...${NC}"
sudo systemctl reload nginx

echo -e "${BLUE}📁 Dosya izinleri düzenleniyor...${NC}"
sudo chown -R www-data:www-data "$PROJECT_DIR"
sudo chmod -R 755 "$PROJECT_DIR"

echo -e "${GREEN}✅ Build tamamlandı!${NC}"
echo -e "${GREEN}🌐 Website: http://lifesigortam.net${NC}"
echo -e "${GREEN}📁 Dosya yolu: $PROJECT_DIR${NC}"
echo -e "${GREEN}🔧 Build dosyaları: $BUILD_DIR${NC}"
echo -e "${GREEN}📧 Email servisi: Port 3001${NC}"

echo -e "${YELLOW}📝 Servis durumları:${NC}"
echo -e "${YELLOW}🌐 Nginx: $(sudo systemctl is-active nginx)${NC}"
echo -e "${YELLOW}📧 Email Service: $(sudo systemctl is-active lifesigortam-email)${NC}"

echo -e "${YELLOW}📝 Sonraki adımlar:${NC}"
echo -e "${YELLOW}1. DNS ayarlarını lifesigortam.net domain'i için yapılandırın${NC}"
echo -e "${YELLOW}2. SSL sertifikası için: sudo certbot --nginx -d lifesigortam.net -d www.lifesigortam.net${NC}"
echo -e "${YELLOW}3. Firewall ayarları: sudo ufw allow 'Nginx Full'${NC}"
echo -e "${YELLOW}4. Email servisi logları: sudo journalctl -u lifesigortam-email -f${NC}"

echo -e "${GREEN}🎉 LifeSigortam.net E-posta Sistemi ile hazır!${NC}"