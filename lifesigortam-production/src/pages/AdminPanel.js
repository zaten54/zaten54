import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Mail, 
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Save,
  Globe
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

const AdminPanel = () => {
  const { siteData, updateSiteData } = useSite();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  // Site verileri için local state
  const [siteSettings, setSiteSettings] = useState({
    companyName: '',
    companySubtitle: '',
    heroTitle: '',
    heroSubtitle: '',
    phone: '',
    email: '',
    address: '',
    workingHours: '',
    stats: { customers: '', experience: '', team: '', satisfaction: '' }
  });

  // Site verilerini load et
  useEffect(() => {
    if (siteData) {
      setSiteSettings({
        companyName: siteData.companyName || 'TrustLife',
        companySubtitle: siteData.companySubtitle || 'Hayat Sigortası',
        heroTitle: siteData.heroTitle || 'Ailenizin Geleceğini Güvence Altına Alın',
        heroSubtitle: siteData.heroSubtitle || 'Türkiye\'nin güvenilir hayat sigortası acentesi',
        phone: siteData.phone || '0850 123 45 67',
        email: siteData.email || 'info@trustlife.com.tr',
        address: siteData.address || 'Levent Mahallesi, Büyükdere Cd. No:185, 34394 Şişli/İstanbul',
        workingHours: siteData.workingHours || 'Pazartesi - Cuma: 09:00 - 18:00',
        stats: {
          customers: siteData.stats?.customers || '10,000+',
          experience: siteData.stats?.experience || '15+',
          team: siteData.stats?.team || '50+',
          satisfaction: siteData.stats?.satisfaction || '99%'
        }
      });
    }
  }, [siteData]);

  // Local storage'dan auth durumunu kontrol et
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Basit authentication - production'da güvenli authentication kullanın
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Geçersiz kullanıcı adı veya şifre');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setActiveTab('dashboard');
  };

  const handleSiteSettingsChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setSiteSettings(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setSiteSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const saveSiteSettings = () => {
    updateSiteData(siteSettings);
    alert('Site ayarları başarıyla güncellendi! Değişikliklerin sitede görünmesi için sayfayı yenileyin.');
  };

  const stats = [
    { title: 'Toplam Müşteri', value: '10,247', change: '+12%', icon: Users, color: 'blue' },
    { title: 'Aktif Poliçe', value: '8,532', change: '+8%', icon: Shield, color: 'green' },
    { title: 'Aylık Prim', value: '₺2,450,000', change: '+15%', icon: TrendingUp, color: 'purple' },
    { title: 'Yeni Başvuru', value: '156', change: '+5%', icon: FileText, color: 'orange' }
  ];

  const recentApplications = [
    { id: 1, name: 'Ahmet Yılmaz', service: 'Bireysel Hayat', status: 'Beklemede', date: '2024-01-15' },
    { id: 2, name: 'Elif Öztürk', service: 'Bireysel Emeklilik', status: 'Onaylandı', date: '2024-01-14' },
    { id: 3, name: 'Murat Kaya', service: 'Eğitim Sigortası', status: 'İnceleniyor', date: '2024-01-13' },
    { id: 4, name: 'Ayşe Demir', service: 'Sağlık Sigortası', status: 'Beklemede', date: '2024-01-12' },
    { id: 5, name: 'Mehmet Öz', service: 'Konut Sigortası', status: 'Onaylandı', date: '2024-01-11' }
  ];

  const blogPosts = [
    { id: 1, title: 'Hayat Sigortası Rehberi', author: 'Ahmet Yılmaz', status: 'Yayında', date: '2024-01-15' },
    { id: 2, title: 'Emeklilik Planlaması', author: 'Elif Öztürk', status: 'Taslak', date: '2024-01-14' },
    { id: 3, title: 'Eğitim Sigortası', author: 'Murat Kaya', status: 'Yayında', date: '2024-01-13' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'site-settings', label: 'Site Ayarları', icon: Globe },
    { id: 'customers', label: 'Müşteriler', icon: Users },
    { id: 'applications', label: 'Başvurular', icon: FileText },
    { id: 'blog', label: 'Blog Yönetimi', icon: Edit },
    { id: 'messages', label: 'Mesajlar', icon: Mail },
    { id: 'settings', label: 'Ayarlar', icon: Settings }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-premium w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Paneli</h2>
            <p className="text-gray-600 mt-2">Devam etmek için giriş yapın</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin123"
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              Giriş Yap
            </button>
          </form>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Demo Giriş:</strong><br />
              Kullanıcı: admin<br />
              Şifre: admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Admin Paneli</h2>
          </div>
          
          <nav className="mt-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="w-full text-left text-red-600 hover:text-red-700 font-medium"
            >
              Çıkış Yap
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <div className="text-sm text-gray-500">
                  Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-premium"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Recent Applications */}
              <div className="bg-white rounded-xl shadow-premium">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Son Başvurular</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentApplications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{app.name}</h4>
                            <p className="text-sm text-gray-500">{app.service}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            app.status === 'Onaylandı' ? 'bg-green-100 text-green-800' :
                            app.status === 'Beklemede' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {app.status}
                          </span>
                          <span className="text-sm text-gray-500">{app.date}</span>
                          <button className="text-blue-600 hover:text-blue-700">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'site-settings' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Site Ayarları</h1>
                <button 
                  onClick={saveSiteSettings}
                  className="btn-primary"
                >
                  <Save className="w-5 h-5" />
                  Ayarları Kaydet
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Temel Bilgiler */}
                <div className="bg-white rounded-xl shadow-premium p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Temel Bilgiler</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Şirket Adı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.companyName}
                        onChange={(e) => handleSiteSettingsChange('companyName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Şirket adını giriniz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Şirket Alt Başlığı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.companySubtitle}
                        onChange={(e) => handleSiteSettingsChange('companySubtitle', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Alt başlığı giriniz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ana Sayfa Başlığı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.heroTitle}
                        onChange={(e) => handleSiteSettingsChange('heroTitle', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ana sayfa başlığı"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ana Sayfa Alt Açıklaması
                      </label>
                      <textarea
                        value={siteSettings.heroSubtitle}
                        onChange={(e) => handleSiteSettingsChange('heroSubtitle', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="3"
                        placeholder="Ana sayfa açıklaması"
                      />
                    </div>
                  </div>
                </div>

                {/* İletişim Bilgileri */}
                <div className="bg-white rounded-xl shadow-premium p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">İletişim Bilgileri</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="text"
                        value={siteSettings.phone}
                        onChange={(e) => handleSiteSettingsChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Telefon numaranız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        value={siteSettings.email}
                        onChange={(e) => handleSiteSettingsChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adres
                      </label>
                      <textarea
                        value={siteSettings.address}
                        onChange={(e) => handleSiteSettingsChange('address', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="3"
                        placeholder="Adres bilgileriniz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Çalışma Saatleri
                      </label>
                      <input
                        type="text"
                        value={siteSettings.workingHours}
                        onChange={(e) => handleSiteSettingsChange('workingHours', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Çalışma saatleri"
                      />
                    </div>
                  </div>
                </div>

                {/* İstatistikler */}
                <div className="bg-white rounded-xl shadow-premium p-6 lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Site İstatistikleri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Müşteri Sayısı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.stats.customers}
                        onChange={(e) => handleSiteSettingsChange('stats.customers', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="10,000+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deneyim Yılı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.stats.experience}
                        onChange={(e) => handleSiteSettingsChange('stats.experience', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="15+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ekip Sayısı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.stats.team}
                        onChange={(e) => handleSiteSettingsChange('stats.team', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="50+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Memnuniyet Oranı
                      </label>
                      <input
                        type="text"
                        value={siteSettings.stats.satisfaction}
                        onChange={(e) => handleSiteSettingsChange('stats.satisfaction', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="99%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Başvuru Yönetimi</h1>
                <button className="btn-primary">
                  <Plus className="w-5 h-5" />
                  Yeni Başvuru
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-premium">
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Müşteri</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Hizmet</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Durum</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Tarih</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentApplications.map((app) => (
                          <tr key={app.id} className="border-b border-gray-100">
                            <td className="py-3 px-4">{app.name}</td>
                            <td className="py-3 px-4">{app.service}</td>
                            <td className="py-3 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                app.status === 'Onaylandı' ? 'bg-green-100 text-green-800' :
                                app.status === 'Beklemede' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {app.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">{app.date}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <button className="text-blue-600 hover:text-blue-700">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-700">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-700">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Blog Yönetimi</h1>
                <button className="btn-primary">
                  <Plus className="w-5 h-5" />
                  Yeni Yazı
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-premium">
                <div className="p-6">
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-500">Yazar: {post.author} • {post.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'Yayında' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {post.status}
                          </span>
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-700">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-700">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;