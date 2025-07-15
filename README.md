# LifeSigortam.net - Production Deployment Guide

## 🚀 Kurulum Adımları

### 1. Dosyaları Sunucuya Yükleyin
```bash
# Proje zip dosyasını sunucuya yükleyin ve çıkartın
unzip lifesigortam-production.zip
cd lifesigortam-production
```

### 2. Deployment Script'i Çalıştırın
```bash
# Script'i çalıştırılabilir yapın
chmod +x deploy.sh
chmod +x build.sh

# Deployment'ı başlatın
sudo ./deploy.sh
```

### 3. SSL Sertifikası Kurulumu
```bash
# Let's Encrypt SSL sertifikası
sudo certbot --nginx -d lifesigortam.net -d www.lifesigortam.net
```

### 4. DNS Ayarları
Domain sağlayıcınızda aşağıdaki kayıtları ekleyin:
```
A    lifesigortam.net      -> [SUNUCU_IP]
A    www.lifesigortam.net  -> [SUNUCU_IP]
```

## 📁 Dizin Yapısı
```
/opt/www/lifesigortam/
├── build/              # Production build dosyaları
├── src/               # React kaynak kodları
├── public/            # Statik dosyalar
├── package.json       # NPM bağımlılıkları
└── ...
```

## 🔧 Nginx Konfigürasyonu
- Config dosyası: `/etc/nginx/sites-available/lifesigortam.net`
- Aktif: `/etc/nginx/sites-enabled/lifesigortam.net`

## 🔄 Güncelleme
```bash
# Nginx'i yeniden başlatma
sudo systemctl reload nginx

# Build'i yeniden oluşturma
cd /opt/www/lifesigortam
npm run build
```

## 🛡️ Güvenlik
- SSL sertifikası otomatik yenilenir
- Firewall ayarları yapılmıştır
- Güvenlik başlıkları eklenmiştir

## 📊 Monitoring
```bash
# Nginx logları
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Nginx durumu
sudo systemctl status nginx
```

## 🎯 Özellikler
- ✅ Responsive tasarım
- ✅ SEO optimizasyonu
- ✅ Gzip sıkıştırma
- ✅ Cache optimizasyonu
- ✅ Güvenlik başlıkları
- ✅ SSL hazır
- ✅ Admin paneli (/admin)

## 🔐 Admin Panel
- URL: https://lifesigortam.net/admin
- Kullanıcı: admin
- Şifre: admin123

## 📞 Destek
Teknik destek için: info@lifesigortam.net

---
**LifeSigortam.net - Türkiye'nin Güvenilir Hayat Sigortası Platformu**