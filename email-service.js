const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration
const smtpConfig = {
  host: 'mail.ajansit.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'noreply@ajansit.com',
    pass: 'c528d2Bf1'
  }
};

// Create transporter
const transporter = nodemailer.createTransporter(smtpConfig);

// Test SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP bağlantı hatası:', error);
  } else {
    console.log('SMTP sunucusu hazır');
  }
});

// Email endpoint
app.post('/api/send-quote-email', async (req, res) => {
  try {
    const { formData } = req.body;

    const mailOptions = {
      from: 'noreply@ajansit.com',
      to: 'noreply@lifesigortam.net',
      subject: `Yeni Teklif Talebi - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🛡️ Yeni Teklif Talebi</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">LifeSigortam.net</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1E40AF; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">👤 Kişisel Bilgiler</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Ad Soyad:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">E-posta:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefon:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Doğum Tarihi:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.birthDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Cinsiyet:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.gender}</td>
              </tr>
            </table>
            
            <h2 style="color: #1E40AF; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">🏥 Sigorta Detayları</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Sigorta Türü:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.insuranceType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Teminat Miktarı:</td>
                <td style="padding: 8px 0; color: #1f2937;">${formData.coverage}</td>
              </tr>
            </table>
            
            <h2 style="color: #1E40AF; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">💬 Ek Mesaj</h2>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3B82F6;">
              <p style="margin: 0; color: #1f2937;">${formData.message || 'Ek mesaj bulunmuyor'}</p>
            </div>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <div style="text-align: center; color: #6b7280; font-size: 12px;">
              <p>📅 Talep Tarihi: ${new Date().toLocaleDateString('tr-TR')}</p>
              <p>⏰ Talep Saati: ${new Date().toLocaleTimeString('tr-TR')}</p>
              <p>🌐 Kaynak: LifeSigortam.net</p>
            </div>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
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
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`E-posta servisi ${PORT} portunda çalışıyor`);
});

module.exports = app;