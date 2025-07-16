import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_lifesigortam';
const EMAILJS_TEMPLATE_ID = 'template_quote_request';
const EMAILJS_PUBLIC_KEY = 'your_emailjs_public_key';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendQuoteEmail = async (formData) => {
  try {
    const emailParams = {
      to_email: 'noreply@lifesigortam.net',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      birth_date: formData.birthDate,
      gender: formData.gender,
      insurance_type: formData.insuranceType,
      coverage_amount: formData.coverage,
      message: formData.message || 'Ek mesaj bulunmuyor',
      request_date: new Date().toLocaleDateString('tr-TR'),
      request_time: new Date().toLocaleTimeString('tr-TR')
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams
    );

    return { success: true, result };
  } catch (error) {
    console.error('Email gönderimi başarısız:', error);
    return { success: false, error };
  }
};

// Alternative: Direct SMTP implementation (for backend use)
export const sendQuoteEmailSMTP = async (formData) => {
  try {
    const emailContent = {
      from: 'noreply@ajansit.com',
      to: 'noreply@lifesigortam.net',
      subject: `Yeni Teklif Talebi - ${formData.name}`,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h3>Kişisel Bilgiler:</h3>
          <ul>
            <li><strong>Ad Soyad:</strong> ${formData.name}</li>
            <li><strong>E-posta:</strong> ${formData.email}</li>
            <li><strong>Telefon:</strong> ${formData.phone}</li>
            <li><strong>Doğum Tarihi:</strong> ${formData.birthDate}</li>
            <li><strong>Cinsiyet:</strong> ${formData.gender}</li>
          </ul>
          
          <h3>Sigorta Detayları:</h3>
          <ul>
            <li><strong>Sigorta Türü:</strong> ${formData.insuranceType}</li>
            <li><strong>Teminat Miktarı:</strong> ${formData.coverage}</li>
          </ul>
          
          <h3>Ek Mesaj:</h3>
          <p>${formData.message || 'Ek mesaj bulunmuyor'}</p>
          
          <hr>
          <p><small>Talep Tarihi: ${new Date().toLocaleDateString('tr-TR')} ${new Date().toLocaleTimeString('tr-TR')}</small></p>
        </div>
      `
    };

    // Bu backend API endpoint'ine gönderilecek
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailContent,
        smtpConfig: {
          host: 'mail.ajansit.com',
          port: 587,
          secure: false,
          auth: {
            user: 'noreply@ajansit.com',
            pass: 'c528d2Bf1'
          }
        }
      })
    });

    const result = await response.json();
    return { success: response.ok, result };
  } catch (error) {
    console.error('SMTP email gönderimi başarısız:', error);
    return { success: false, error };
  }
};