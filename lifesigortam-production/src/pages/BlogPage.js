import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Hayat Sigortası Neden Önemli? Temel Rehber',
      excerpt: 'Hayat sigortasının önemi, türleri ve nasıl seçileceği hakkında kapsamlı bilgiler...',
      content: 'Hayat sigortası, beklenmedik durumlar karşısında ailenizin maddi güvenliğini sağlayan en önemli finansal araçlardan biridir.',
      author: 'Ahmet Yılmaz',
      date: '2024-01-15',
      readTime: '5 dakika',
      category: 'Rehber',
      image: 'https://images.unsplash.com/photo-1559734840-f9509ee5677f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85',
      featured: true
    },
    {
      id: 2,
      title: 'Bireysel Emeklilik Sistemi: Avantajları ve Dezavantajları',
      excerpt: 'BES hakkında bilmeniz gereken her şey ve doğru karar verme yolları...',
      content: 'Bireysel emeklilik sistemi, emeklilik döneminde düzenli gelir sağlamak için önemli bir tasarruf aracıdır.',
      author: 'Elif Öztürk',
      date: '2024-01-10',
      readTime: '7 dakika',
      category: 'Emeklilik',
      image: 'https://images.pexels.com/photos/8853400/pexels-photo-8853400.jpeg',
      featured: false
    },
    {
      id: 3,
      title: 'Çocuğunuzun Eğitimi için Sigorta Planlaması',
      excerpt: 'Eğitim sigortası ile çocuğunuzun geleceğini nasıl güvence altına alabilirsiniz...',
      content: 'Eğitim maliyetlerinin sürekli artış gösterdiği günümüzde, çocukların eğitim geleceği için erken planlama yapmak çok önemlidir.',
      author: 'Murat Kaya',
      date: '2024-01-05',
      readTime: '6 dakika',
      category: 'Eğitim',
      image: 'https://images.unsplash.com/photo-1593323925814-253c803de3a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxmYW1pbHl8ZW58MHx8fGJsdWV8MTc1MjU5Mjg5Mnww&ixlib=rb-4.1.0&q=85',
      featured: false
    },
    {
      id: 4,
      title: 'Sağlık Sigortası Seçerken Dikkat Edilmesi Gerekenler',
      excerpt: 'Sağlık sigortası seçiminde doğru kararlar için önemli ipuçları...',
      content: 'Sağlık sigortası seçerken teminat kapsamı, özel hastane ağı, prim tutarı gibi faktörleri değerlendirmek önemlidir.',
      author: 'Ayşe Demir',
      date: '2024-01-01',
      readTime: '4 dakika',
      category: 'Sağlık',
      image: 'https://images.pexels.com/photos/8560046/pexels-photo-8560046.jpeg',
      featured: false
    },
    {
      id: 5,
      title: 'Grup Hayat Sigortası: İşverenler için Rehber',
      excerpt: 'Çalışanlarınız için grup hayat sigortası düzenlemenin faydaları...',
      content: 'Grup hayat sigortası, işverenlerin çalışanlarına sağlayabileceği en değerli sosyal haklar arasında yer alır.',
      author: 'Ahmet Yılmaz',
      date: '2023-12-28',
      readTime: '8 dakika',
      category: 'İşveren',
      image: 'https://images.pexels.com/photos/7578892/pexels-photo-7578892.jpeg',
      featured: false
    },
    {
      id: 6,
      title: 'Konut Sigortası: Evinizi Nasıl Koruyabilirsiniz',
      excerpt: 'Konut sigortası türleri, kapsamı ve seçim kriterleri hakkında bilgiler...',
      content: 'Konut sigortası, evinizi doğal afetler, yangın, hırsızlık gibi risklere karşı korumak için önemli bir güvence sağlar.',
      author: 'Elif Öztürk',
      date: '2023-12-25',
      readTime: '5 dakika',
      category: 'Konut',
      image: 'https://images.pexels.com/photos/7578896/pexels-photo-7578896.jpeg',
      featured: false
    }
  ];

  const categories = ['Tümü', 'Rehber', 'Emeklilik', 'Eğitim', 'Sağlık', 'İşveren', 'Konut'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tümü');

  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sigorta dünyasından son haberler, uzman görüşleri ve pratik rehberler. 
              Finansal geleceğinizi planlamak için bilmeniz gereken her şey burada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Öne Çıkan Yazı</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{featuredPost.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{featuredPost.author}</span>
                  </div>
                  <button className="btn-primary">
                    Devamını Oku
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="rounded-2xl shadow-premium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                      Oku
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-white">
              Blog Güncellemelerini Kaçırmayın
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Sigorta dünyasından son haberler ve uzman görüşleri e-posta kutunuza gelsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Abone Ol
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;