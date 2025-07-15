import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, Heart, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Genel Müdür',
      experience: '15 yıl',
      image: 'https://images.pexels.com/photos/8560046/pexels-photo-8560046.jpeg',
      description: 'Sigorta sektöründe 15 yıllık deneyimi ile ekibimize liderlik ediyor.'
    },
    {
      name: 'Elif Öztürk',
      role: 'Hayat Sigortası Uzmanı',
      experience: '10 yıl',
      image: 'https://images.unsplash.com/photo-1647833202056-e6e67293ba81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85',
      description: 'Hayat sigortası konusunda uzman. Müşteri memnuniyeti odaklı hizmet veriyor.'
    },
    {
      name: 'Murat Kaya',
      role: 'Emeklilik Planlaması Uzmanı',
      experience: '12 yıl',
      image: 'https://images.pexels.com/photos/7578896/pexels-photo-7578896.jpeg',
      description: 'Emeklilik planlaması konusunda uzman. Geleceğinizi güvence altına alır.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Müşterilerimizin güvenini kazanmak ve korumak en önemli değerimizdir.'
    },
    {
      icon: Heart,
      title: 'Müşteri Odaklılık',
      description: 'Her müşterimizin ihtiyaçlarını anlayarak kişiselleştirilmiş çözümler sunuyoruz.'
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'Sunduğumuz her hizmette en yüksek kalite standartlarını hedefliyoruz.'
    },
    {
      icon: Users,
      title: 'Ekip Çalışması',
      description: 'Güçlü ekip ruhuyla birlikte hareket ederek başarıya ulaşıyoruz.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Kuruluş',
      description: 'TrustLife Hayat Sigortası Acentesi kuruldu'
    },
    {
      year: '2012',
      title: 'İlk Bin Müşteri',
      description: 'İlk 1000 müşterimize ulaştık'
    },
    {
      year: '2015',
      title: 'Dijital Dönüşüm',
      description: 'Online hizmet platformumuz devreye girdi'
    },
    {
      year: '2018',
      title: 'Bölgesel Ofisler',
      description: '5 şehirde bölgesel ofislerimiz açıldı'
    },
    {
      year: '2024',
      title: 'Bugün',
      description: '10,000+ mutlu müşteri ile hizmet veriyoruz'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="heading-lg text-gray-900">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                2009 yılından beri Türkiye'nin güvenilir hayat sigortası acentesi olarak, 
                binlerce ailenin geleceğini güvence altına almaya devam ediyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                15 yıllık deneyimimiz ve uzman kadromuzla, müşterilerimizin ihtiyaçlarına 
                en uygun sigorta çözümlerini sunmaktan gurur duyuyoruz.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Uzman Personel</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/8853400/pexels-photo-8853400.jpeg" 
                alt="Hakkımızda"
                className="rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
            >
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimizin hayat sigortası ve emeklilik planlaması ihtiyaçlarını 
                en iyi şekilde karşılayarak, geleceğe güvenle bakmalarını sağlamak.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
            >
              <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin en güvenilir ve müşteri odaklı hayat sigortası acentesi 
                olarak, sektörde lider konuma ulaşmak ve sürdürmek.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl"
            >
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Değerlerimiz</h3>
              <p className="text-gray-600 leading-relaxed">
                Dürüstlük, güvenilirlik, kalite ve müşteri memnuniyeti temel 
                değerlerimizdir. Her işimizde bu değerleri öncelik olarak görüyoruz.
              </p>
            </motion.div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Uzman Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve müşteri odaklı kadromuzla size en iyi hizmeti sunuyoruz.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{member.experience} deneyim</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Tarihçemiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 yıllık yolculuğumuzda önemli dönüm noktalarımız.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
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
              Bizimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Deneyimli ekibimiz size en uygun sigorta çözümlerini sunmak için burada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                İletişime Geçin
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Hizmetlerimizi Keşfedin
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;