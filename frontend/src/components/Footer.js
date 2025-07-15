import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">TrustLife</span>
                <span className="text-xs text-gray-400">Hayat Sigortası</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Türkiye'nin güvenilir hayat sigortası acentesi. Ailenizin geleceğini güvence altına alın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-300 hover:text-white transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Bireysel Hayat Sigortası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Grup Hayat Sigortası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Bireysel Emeklilik
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Eğitim Sigortası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sağlık Sigortası
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Levent Mahallesi, Büyükdere Cd. No:185, 34394 Şişli/İstanbul
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">0850 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@trustlife.com.tr</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Çalışma Saatleri</h4>
              <p className="text-gray-400 text-xs">Pazartesi - Cuma: 09:00 - 18:00</p>
              <p className="text-gray-400 text-xs">Cumartesi: 09:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 TrustLife Hayat Sigortası. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Koşulları
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;