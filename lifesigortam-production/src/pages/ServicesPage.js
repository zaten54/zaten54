import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, GraduationCap, Heart, Building2, ArrowRight, Check } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Bireysel Hayat Sigortası',
      description: 'Kendiniz ve sevdikleriniz için en kapsamlı koruma',
      image: 'https://images.unsplash.com/photo-1559734840-f9509ee5677f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85',
      features: [
        'Vefat teminatı',
        'Maluliyet koruması',
        'Kritik hastalık teminatı',
        'Esnek prim ödeme seçenekleri',
        'Yatırım imkânları'
      ],
      targetAudience: 'Ailesi olan bireyler, gelir elde edenler',
      ageRange: '18-65 yaş',
      minAmount: '50.000 TL',
      maxAmount: '5.000.000 TL'
    },
    {
      icon: Users,
      title: 'Grup Hayat Sigortası',
      description: 'Çalışanlarınız için kapsamlı sigorta koruması',
      image: 'https://images.pexels.com/photos/7578892/pexels-photo-7578892.jpeg',
      features: [
        'Toplu vefat teminatı',
        'İş kazası koruması',
        'Mesleki hastalık teminatı',
        'Geçici maluliyet desteği',
        'Aile desteği programı'
      ],
      targetAudience: 'Şirketler, kurumlar, işverenler',
      ageRange: '18-65 yaş',
      minAmount: '25.000 TL',
      maxAmount: '2.500.000 TL'
    },
    {
      icon: TrendingUp,
      title: 'Bireysel Emeklilik Sigortası',
      description: 'Emeklilik dönemini güvence altına alın',
      image: 'https://images.pexels.com/photos/8853400/pexels-photo-8853400.jpeg',
      features: [
        'Düzenli emeklilik maaşı',
        'Devlet katkısı (25%)',
        'Vergi avantajı',
        'Esnek fon seçenekleri',
        'Erken emeklilik imkânı'
      ],
      targetAudience: 'Tüm çalışanlar, serbest meslek sahipleri',
      ageRange: '18-56 yaş',
      minAmount: '100 TL/ay',
      maxAmount: 'Sınırsız'
    },
    {
      icon: GraduationCap,
      title: 'Eğitim Sigortası',
      description: 'Çocuklarınızın eğitim geleceğini planlayın',
      image: 'https://images.unsplash.com/photo-1593323925814-253c803de3a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85',
      features: [
        'Eğitim masrafları karşılama',
        'Düzenli eğitim desteği',
        'Vasi maaşı teminatı',
        'Esnek birikim planı',
        'Yurt dışı eğitim desteği'
      ],
      targetAudience: 'Çocuklu aileler, ebeveynler',
      ageRange: '0-18 yaş (çocuk)',
      minAmount: '10.000 TL',
      maxAmount: '500.000 TL'
    },
    {
      icon: Heart,
      title: 'Sağlık Sigortası',
      description: 'Sağlık giderlerinizi güvence altına alın',
      image: 'https://images.pexels.com/photos/8560046/pexels-photo-8560046.jpeg',
      features: [
        'Özel hastane tedavisi',
        'Ameliyat masrafları',
        'İlaç giderleri',
        'Yurt dışı tedavi',
        'Ambulans hizmeti'
      ],
      targetAudience: 'Tüm bireyler ve aileler',
      ageRange: '0-65 yaş',
      minAmount: '5.000 TL',
      maxAmount: '1.000.000 TL'
    },
    {
      icon: Building2,
      title: 'Konut Sigortası',
      description: 'Evinizi doğal afetlere karşı koruyun',
      image: 'https://images.pexels.com/photos/7578896/pexels-photo-7578896.jpeg',
      features: [
        'Deprem teminatı',
        'Yangın koruması',
        'Su baskını teminatı',
        'Hırsızlık güvencesi',
        'Geçici konaklama'
      ],
      targetAudience: 'Ev sahipleri, kiracılar',
      ageRange: 'Yaş sınırı yok',
      minAmount: '50.000 TL',
      maxAmount: '10.000.000 TL'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Danışmanlık',
      description: 'Uzman ekibimizle ihtiyaç analizi yapın'
    },
    {
      step: '2',
      title: 'Teklif Al',
      description: 'Size özel sigorta tekliflerini inceleyin'
    },
    {
      step: '3',
      title: 'Karşılaştırma',
      description: 'Farklı seçenekleri karşılaştırın'
    },
    {
      step: '4',
      title: 'Başvuru',
      description: 'Seçtiğiniz pakete kolayca başvuru yapın'
    }
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
              Sigorta Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her ihtiyacınıza uygun, güvenilir sigorta çözümleri sunuyoruz. 
              Uzman ekibimiz size en uygun planı belirlemenize yardımcı olur.
            </p>
            <button className="btn-primary">
              Ücretsiz Teklif Al
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Teminat Kapsamı</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">Detaylar</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Hedef Kitle:</span>
                          <span className="text-gray-600 ml-2">{service.targetAudience}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Yaş Aralığı:</span>
                          <span className="text-gray-600 ml-2">{service.ageRange}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Min. Tutar:</span>
                          <span className="text-gray-600 ml-2">{service.minAmount}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Max. Tutar:</span>
                          <span className="text-gray-600 ml-2">{service.maxAmount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="btn-primary">
                      Teklif Al
                    </button>
                    <button className="btn-secondary">
                      Detaylı Bilgi
                    </button>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-premium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sigorta süreciniz 4 basit adımda tamamlanır.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 absolute top-1/2 -translate-y-1/2 -right-8 hidden lg:block" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
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
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              Sigorta hizmetlerimiz hakkında merak ettikleriniz.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Hayat sigortası neden önemli?',
                answer: 'Hayat sigortası, beklenmedik durumlar karşısında ailenizin maddi güvenliğini sağlar. Gelir kaybı durumunda sevdiklerinizi korur ve gelecek planlarınızı güvence altına alır.'
              },
              {
                question: 'Sigorta primim nasıl hesaplanır?',
                answer: 'Sigorta priminiz yaş, cinsiyet, sağlık durumu, meslek, teminat miktarı ve sigorta türü gibi faktörlere göre hesaplanır. Uzman ekibimiz size en uygun primi belirler.'
              },
              {
                question: 'Hasar durumunda nasıl başvuru yaparım?',
                answer: '7/24 hizmet hattımızı arayarak hasar ihbarı yapabilirsiniz. Gerekli evrakları tamamladıktan sonra hızlı ödeme sürecimiz başlar.'
              },
              {
                question: 'Poliçemi iptal edebilir miyim?',
                answer: 'Poliçenizi istediğiniz zaman iptal edebilirsiniz. İptal koşulları ve geri ödeme tutarı poliçe şartlarına göre belirlenir.'
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-white">
              Sigorta İhtiyacınız mı Var?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve size en uygun sigorta çözümlerini keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Ücretsiz Teklif Al
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Bizi Arayın
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;