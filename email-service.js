const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration using external SMTP server
const transporter = nodemailer.createTransport({
  host: 'mail.ajansit.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'noreply@ajansit.com',
    pass: 'c528d2Bf1'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP bağlantı hatası:', error);
  } else {
    console.log('SMTP sunucusu hazır - mail.ajansit.com:587');
  }
});

// Quote email endpoint
app.post('/api/send-quote-email', async (req, res) => {
  try {
    const { formData } = req.body;

    if (!formData || !formData.name || !formData.email) {
      return res.status(400).json({
        success: false,
        message: 'Geçersiz form verisi'
      });
    }

    const mailOptions = {
      from: '"LifeSigortam.net" <noreply@ajansit.com>',
      to: 'noreply@lifesigortam.net',
      subject: `🛡️ Yeni Teklif Talebi - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🛡️ Yeni Teklif Talebi</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">LifeSigortam.net</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Kişisel Bilgiler -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1E40AF; border-bottom: 3px solid #3B82F6; padding-bottom: 10px; margin-bottom: 20px; font-size: 20px;">👤 Kişisel Bilgiler</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 140px; border-bottom: 1px solid #e5e7eb;">Ad Soyad:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">E-posta:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${formData.email}" style="color: #3B82F6; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Telefon:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">
                    <a href="tel:${formData.phone}" style="color: #3B82F6; text-decoration: none;">${formData.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Doğum Tarihi:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${formData.birthDate || 'Belirtilmemiş'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151;">Cinsiyet:</td>
                  <td style="padding: 12px 0; color: #1f2937;">${formData.gender || 'Belirtilmemiş'}</td>
                </tr>
              </table>
            </div>
            
            <!-- Sigorta Detayları -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1E40AF; border-bottom: 3px solid #3B82F6; padding-bottom: 10px; margin-bottom: 20px; font-size: 20px;">🏥 Sigorta Detayları</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 140px; border-bottom: 1px solid #e5e7eb;">Sigorta Türü:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">
                    <span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 14px;">
                      ${formData.insuranceType || 'Belirtilmemiş'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151;">Teminat Miktarı:</td>
                  <td style="padding: 12px 0; color: #1f2937;">
                    <span style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; font-size: 14px;">
                      ${formData.coverage || 'Belirtilmemiş'}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- Ek Mesaj -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1E40AF; border-bottom: 3px solid #3B82F6; padding-bottom: 10px; margin-bottom: 20px; font-size: 20px;">💬 Ek Mesaj</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3B82F6;">
                <p style="margin: 0; color: #1f2937; line-height: 1.6; font-style: italic;">
                  ${formData.message || 'Müşteri ek mesaj bırakmamış.'}
                </p>
              </div>
            </div>
            
            <!-- Hızlı Eylemler -->
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <h3 style="color: #1E40AF; margin-bottom: 15px; font-size: 16px;">⚡ Hızlı Eylemler</h3>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <a href="mailto:${formData.email}" style="background: #3B82F6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; display: inline-block; font-size: 14px;">
                  📧 E-posta Gönder
                </a>
                <a href="tel:${formData.phone}" style="background: #10B981; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; display: inline-block; font-size: 14px;">
                  📞 Ara
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <div style="color: #6b7280; font-size: 14px; margin-bottom: 10px;">
                <p style="margin: 5px 0;">📅 <strong>Talep Tarihi:</strong> ${new Date().toLocaleDateString('tr-TR')}</p>
                <p style="margin: 5px 0;">⏰ <strong>Talep Saati:</strong> ${new Date().toLocaleTimeString('tr-TR')}</p>
                <p style="margin: 5px 0;">🌐 <strong>Kaynak:</strong> LifeSigortam.net</p>
              </div>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">
                  Bu e-posta otomatik olarak LifeSigortam.net sisteminden gönderilmiştir.<br>
                  Müşteri ile 24 saat içinde iletişime geçmeniz önerilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('E-posta gönderildi:', info.messageId);
    
    res.json({
      success: true,
      message: 'E-posta başarıyla gönderildi',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('E-posta gönderimi hatası:', error);
    res.status(500).json({
      success: false,
      message: 'E-posta gönderilemedi',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    smtp: 'mail.ajansit.com:587'
  });
});

// Test endpoint
app.get('/api/test-email', async (req, res) => {
  try {
    const testData = {
      name: 'Test Kullanıcı',
      email: 'test@example.com',
      phone: '0532 123 45 67',
      birthDate: '1990-01-01',
      gender: 'Erkek',
      insuranceType: 'Bireysel Hayat Sigortası',
      coverage: '100.000 TL - 250.000 TL',
      message: 'Bu bir test mesajıdır.'
    };

    const mailOptions = {
      from: '"LifeSigortam.net Test" <noreply@ajansit.com>',
      to: 'noreply@lifesigortam.net',
      subject: '🧪 Test E-posta - LifeSigortam.net',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: #3B82F6; color: white; padding: 20px; text-align: center; border-radius: 10px;">
            <h1 style="margin: 0;">🧪 Test E-posta</h1>
            <p style="margin: 10px 0 0 0;">LifeSigortam.net E-posta Sistemi</p>
          </div>
          <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p>Bu e-posta, LifeSigortam.net e-posta sisteminin test edilmesi için gönderilmiştir.</p>
            <p><strong>Gönderim Zamanı:</strong> ${new Date().toLocaleString('tr-TR')}</p>
            <p><strong>SMTP Server:</strong> mail.ajansit.com:587</p>
            <p><strong>Durum:</strong> ✅ Sistem çalışıyor</p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    res.json({
      success: true,
      message: 'Test e-postası gönderildi',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Test e-posta hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Test e-postası gönderilemedi',
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`📧 LifeSigortam.net E-posta Servisi ${PORT} portunda çalışıyor`);
  console.log(`🌐 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🧪 Test E-posta: http://localhost:${PORT}/api/test-email`);
});

module.exports = app;