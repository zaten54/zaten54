import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, Phone, ArrowRight, Check, Star } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import QuoteModal from '../components/QuoteModal';

const HomePage = () => {
  const { siteData } = useSite();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const services = [
    {
      icon: Shield,
      title: 'Bireysel Hayat Sigortası',
      description: 'Kendiniz ve aileniz için güvenli gelecek planlaması yapın.',
      image: 'https://images.unsplash.com/photo-1559734840-f9509ee5677f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: Users,
      title: 'Grup Hayat Sigortası',
      description: 'Çalışanlarınız için kapsamlı sigorta çözümleri.',
      image: 'https://images.pexels.com/photos/7578892/pexels-photo-7578892.jpeg'
    },
    {
      icon: TrendingUp,
      title: 'Bireysel Emeklilik',
      description: 'Emeklilik dönemini güvence altına alın.',
      image: 'https://images.pexels.com/photos/8853400/pexels-photo-8853400.jpeg'
    },
    {
      icon: Award,
      title: 'Eğitim Sigortası',
      description: 'Çocuklarınızın eğitim geleceğini planlayın.',
      image: 'https://images.unsplash.com/photo-1593323925814-253c803de3a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85'
    }
  ];

  const stats = [
    { number: siteData.stats.customers, label: 'Mutlu Müşteri' },
    { number: siteData.stats.experience, label: 'Yıllık Deneyim' },
    { number: siteData.stats.team, label: 'Uzman Ekip' },
    { number: siteData.stats.satisfaction, label: 'Müşteri Memnuniyeti' }
  ];

  const testimonials = [
    {
      name: 'Mehmet Demir',
      role: 'Aile Babası',
      content: 'TrustLife ile yaptığım sigorta planlaması sayesinde ailem için güvenli bir gelecek oluşturdum. Profesyonel yaklaşımları ve güvenilir hizmetleri için teşekkürler.',
      rating: 5,
      image: 'https://images.pexels.com/photos/8560046/pexels-photo-8560046.jpeg'
    },
    {
      name: 'Ayşe Kaya',
      role: 'Şirket Sahibi',
      content: 'Çalışanlarımız için grup hayat sigortası konusunda bize yardımcı oldular. Hem uygun fiyat hem de kapsamlı hizmet aldık.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1647833202056-e6e67293ba81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Ali Özkan',
      role: 'Mühendis',
      content: 'Emeklilik planlaması için aldığım bireysel emeklilik sigortası ile geleceğim güvence altında. Uzman ekiplerinden çok memnunum.',
      rating: 5,
      image: 'https://images.pexels.com/photos/7578896/pexels-photo-7578896.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580893246395-52aead8960dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2V8ZW58MHx8fGJsdWV8MTc1MjU5Mjg4NXww&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="gradient-overlay-dark"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="heading-xl text-white">
              {siteData.heroTitle}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {siteData.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={openQuoteModal}
                className="btn-primary text-lg px-8 py-4"
              >
                <Shield className="w-5 h-5" />
                Ücretsiz Teklif Al
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                {siteData.phone}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Sigorta Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her ihtiyacınıza uygun, güvenilir sigorta çözümleri sunuyoruz. 
              Uzman ekibimiz size en uygun planı belirlemenize yardımcı olur.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button 
                    onClick={openQuoteModal}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                  >
                    Teklif Al
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="heading-lg text-gray-900">
                Neden {siteData.companyName}?
              </h2>
              <p className="text-xl text-gray-600">
                {siteData.stats.experience} yıllık deneyimimiz ve güvenilir hizmet anlayışımızla yanınızdayız.
              </p>
              
              <div className="space-y-4">
                {[
                  'Uzman danışman desteği',
                  'Hızlı ve kolay başvuru süreci',
                  'Rekabetçi fiyat avantajları',
                  'Müşteri memnuniyeti odaklı hizmet',
                  '7/24 destek hattı'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={openQuoteModal}
                className="btn-primary mt-6"
              >
                Teklif Al
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/8560046/pexels-photo-8560046.jpeg" 
                alt="Danışman"
                className="rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Müşterilerimiz Diyor Ki
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Binlerce mutlu müşterimizin deneyimlerini keşfedin.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
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
              Hayatınızı Güvence Altına Alın
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ücretsiz danışmanlık hizmeti alın ve size en uygun sigorta planını keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={openQuoteModal}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Hemen Başlayın
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Bizi Arayın
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </div>
  );
};

export default HomePage;