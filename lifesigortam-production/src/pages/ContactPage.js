import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Lütfen tüm gerekli alanları doldurunuz.');
      return;
    }
    
    try {
      // Form gönderme işlemi burada yapılacak
      console.log('Form data:', formData);
      
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
    } catch (error) {
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      details: [
        'Levent Mahallesi',
        'Büyükdere Cd. No:185',
        '34394 Şişli/İstanbul'
      ]
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: [
        'Ana Hat: 0850 123 45 67',
        'Mobil: 0532 123 45 67',
        'Faks: 0212 123 45 67'
      ]
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: [
        'info@trustlife.com.tr',
        'destek@trustlife.com.tr',
        'satis@trustlife.com.tr'
      ]
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: [
        'Pazartesi - Cuma: 09:00 - 18:00',
        'Cumartesi: 09:00 - 14:00',
        'Pazar: Kapalı'
      ]
    }
  ];

  const services = [
    'Bireysel Hayat Sigortası',
    'Grup Hayat Sigortası',
    'Bireysel Emeklilik',
    'Eğitim Sigortası',
    'Sağlık Sigortası',
    'Konut Sigortası',
    'Genel Danışmanlık'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="heading-lg text-gray-900">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sigorta ihtiyaçlarınız için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunmak için burada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-premium"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bize Ulaşın
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="0532 123 45 67"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Hizmet seçiniz</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-lg py-4"
                >
                  <Send className="w-5 h-5" />
                  Mesaj Gönder
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Hızlı İletişim:</strong> Acil durumlar için 0850 123 45 67 numaralı hattımızı arayabilirsiniz.
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-premium"
            >
              <div className="h-full min-h-[600px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8978155879765!2d29.004543376083726!3d41.08410917133164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zQsO8ecO8a2RlcmUgQ2QsIDM0Mzk0IFPEsMWfbGkv0LDRgdGC0LDQvdCx0YPQuw!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">TrustLife Hayat Sigortası</h3>
                  <p className="text-sm text-gray-600">
                    Levent Mahallesi, Büyükdere Cd. No:185, 34394 Şişli/İstanbul
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              İletişim ve hizmetlerimiz hakkında sık sorulan sorular.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Ofis ziyareti için randevu almam gerekiyor mu?',
                answer: 'Daha iyi hizmet verebilmek için randevu almanızı öneriyoruz. Ancak acil durumlar için randevusuz da ziyaret edebilirsiniz.'
              },
              {
                question: 'Teklifimi ne kadar sürede alabilirim?',
                answer: 'Standart teklifler 24 saat içinde, özel durumlar için ise 48 saat içinde size ulaştırılır.'
              },
              {
                question: 'Evde danışmanlık hizmeti veriyor musunuz?',
                answer: 'Evet, özel durumlar için evde danışmanlık hizmeti veriyoruz. Randevu için bizimle iletişime geçiniz.'
              },
              {
                question: 'Hasar durumunda kimle iletişime geçmeliyim?',
                answer: '7/24 hasar hattımız 0850 123 45 67 numarasını arayarak hasar ihbarı yapabilirsiniz.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;