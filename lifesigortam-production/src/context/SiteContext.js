import React, { createContext, useContext, useState, useEffect } from 'react';

const SiteContext = createContext();

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};

export const SiteProvider = ({ children }) => {
  const [siteData, setSiteData] = useState({
    companyName: 'TrustLife',
    companySubtitle: 'Hayat Sigortası',
    heroTitle: 'Ailenizin Geleceğini Güvence Altına Alın',
    heroSubtitle: 'Türkiye\'nin güvenilir hayat sigortası acentesi ile birlikte, sevdikleriniz için en iyi koruma planlarını keşfedin. Uzman ekibimiz size özel çözümler sunar.',
    phone: '0850 123 45 67',
    email: 'info@trustlife.com.tr',
    address: 'Levent Mahallesi, Büyükdere Cd. No:185, 34394 Şişli/İstanbul',
    workingHours: 'Pazartesi - Cuma: 09:00 - 18:00, Cumartesi: 09:00 - 14:00',
    socialMedia: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    },
    stats: {
      customers: '10,000+',
      experience: '15+',
      team: '50+',
      satisfaction: '99%'
    }
  });

  // LocalStorage'dan verileri yükle
  useEffect(() => {
    const savedData = localStorage.getItem('siteData');
    if (savedData) {
      setSiteData(JSON.parse(savedData));
    }
  }, []);

  // Verileri güncelle ve localStorage'a kaydet
  const updateSiteData = (newData) => {
    const updatedData = { ...siteData, ...newData };
    setSiteData(updatedData);
    localStorage.setItem('siteData', JSON.stringify(updatedData));
  };

  return (
    <SiteContext.Provider value={{ siteData, updateSiteData }}>
      {children}
    </SiteContext.Provider>
  );
};