#!/bin/bash

# LifeSigortam.net - Deployment Script
# Bu script projeyi sunucuya deploy eder

echo "🚀 LifeSigortam.net - Deployment Script"

# Gerekli paketleri yükle
echo "📦 Gerekli paketler yükleniyor..."
sudo apt update
sudo apt install -y nginx nodejs npm certbot python3-certbot-nginx

# Node.js versiyonu kontrol et
echo "📋 Node.js versiyonu kontrol ediliyor..."
node --version
npm --version

# Ana dizini oluştur
echo "📁 Ana dizin oluşturuluyor..."
sudo mkdir -p /opt/www/lifesigortam
sudo chown -R www-data:www-data /opt/www/lifesigortam

# Build script'i çalıştır
echo "🏗️  Build script çalıştırılıyor..."
./build.sh

# Nginx durumunu kontrol et
echo "🔍 Nginx durumu kontrol ediliyor..."
sudo systemctl status nginx

# Email servisi durumunu kontrol et
echo "📧 Email servisi durumu kontrol ediliyor..."
sudo systemctl status lifesigortam-email

# Firewall ayarları
echo "🔥 Firewall ayarları yapılıyor..."
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw allow 3001/tcp
sudo ufw --force enable

echo "✅ Deployment tamamlandı!"
echo "🌐 Website: http://lifesigortam.net"
echo "📧 Email Service: Port 3001"
echo "📝 SSL için: sudo certbot --nginx -d lifesigortam.net -d www.lifesigortam.net"
echo "🔍 Email servisi logları: sudo journalctl -u lifesigortam-email -f"