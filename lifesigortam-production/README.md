# LifeSigortam.net - Production Deployment Guide

## 🚀 Kurulum Adımları

### 1. Dosyaları Sunucuya Yükleyin
```bash
# Proje zip dosyasını sunucuya yükleyin ve çıkartın
tar -xzf lifesigortam-production.tar.gz
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
├── email-service.js   # E-posta servisi
└── ...
```

## 🔧 Nginx Konfigürasyonu
- Config dosyası: `/etc/nginx/sites-available/lifesigortam.net`
- Aktif: `/etc/nginx/sites-enabled/lifesigortam.net`
- API proxy: `/api/` -> `http://localhost:3001`

## 📧 E-posta Servisi
- **Port**: 3001
- **SMTP Server**: mail.ajansit.com:587
- **From**: noreply@ajansit.com
- **To**: noreply@lifesigortam.net
- **Service**: lifesigortam-email

### E-posta Servisi Yönetimi
```bash
# Servisi başlat
sudo systemctl start lifesigortam-email

# Servisi durdur
sudo systemctl stop lifesigortam-email

# Servisi yeniden başlat
sudo systemctl restart lifesigortam-email

# Servis durumunu kontrol et
sudo systemctl status lifesigortam-email

# Logları görüntüle
sudo journalctl -u lifesigortam-email -f
```

## 🔄 Güncelleme
```bash
# Nginx'i yeniden başlatma
sudo systemctl reload nginx

# Build'i yeniden oluşturma
cd /opt/www/lifesigortam
npm run build

# E-posta servisini yeniden başlatma
sudo systemctl restart lifesigortam-email
```

## 🛡️ Güvenlik
- SSL sertifikası otomatik yenilenir
- Firewall ayarları yapılmıştır
- Güvenlik başlıkları eklenmiştir
- SMTP bilgileri güvenli şekilde saklanır

## 📊 Monitoring
```bash
# Nginx logları
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# E-posta servisi logları
sudo journalctl -u lifesigortam-email -f

# Nginx durumu
sudo systemctl status nginx

# E-posta servisi durumu
sudo systemctl status lifesigortam-email
```

## 🎯 Yeni Özellikler
- ✅ **E-posta Bildirimi**: Teklif alındığında otomatik e-posta gönderimi
- ✅ **SMTP Entegrasyonu**: mail.ajansit.com sunucusu ile entegrasyon
- ✅ **Responsive tasarım**: Mobil uyumlu
- ✅ **SEO optimizasyonu**: Arama motoru dostu
- ✅ **Gzip sıkıştırma**: Hızlı yükleme
- ✅ **Cache optimizasyonu**: Performans artışı
- ✅ **Güvenlik başlıkları**: Güvenli erişim
- ✅ **SSL hazır**: HTTPS desteği
- ✅ **Admin paneli**: Site yönetimi (/admin)

## 🔐 Admin Panel
- **URL**: https://lifesigortam.net/admin
- **Kullanıcı**: admin
- **Şifre**: admin123

## 📧 E-posta Sistemi
- **Teklif Alındığında**: Otomatik e-posta gönderimi
- **Gönderi Adresi**: noreply@ajansit.com
- **Alıcı**: noreply@lifesigortam.net
- **İçerik**: HTML formatında detaylı müşteri bilgileri

## 🔧 Teknik Detaylar
- **Frontend**: React 19 + Tailwind CSS
- **Backend**: Node.js + Express (E-posta servisi)
- **E-posta**: Nodemailer + SMTP
- **Web Server**: Nginx
- **SSL**: Let's Encrypt
- **Process Manager**: systemd

## 📞 Destek
Teknik destek için: info@lifesigortam.net

## 🧪 Test Etme
```bash
# E-posta servisini test et
curl -X POST http://localhost:3001/api/send-quote-email \
  -H "Content-Type: application/json" \
  -d '{"formData":{"name":"Test User","email":"test@example.com","phone":"0532 123 45 67","insuranceType":"Bireysel Hayat Sigortası","coverage":"100.000 TL - 250.000 TL"}}'
```

---
**LifeSigortam.net - E-posta Sistemi ile Güçlendirilmiş Hayat Sigortası Platformu**