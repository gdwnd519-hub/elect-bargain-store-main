import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { PageType } from './i18n/translations';
import Header from './components/Header';
import VisionSection from './components/VisionSection';
import BusinessSection from './components/BusinessSection';
import CompanySection from './components/CompanySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTopButton from './components/ScrollToTopButton';

function HomePage({ onNavigateToPrivacy }: { onNavigateToPrivacy: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <VisionSection />
        <BusinessSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer onNavigateToPrivacy={onNavigateToPrivacy} />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <LanguageProvider>
      {currentPage === 'home' ? (
        <HomePage onNavigateToPrivacy={() => setCurrentPage('privacy-policy')} />
      ) : (
        <PrivacyPolicy onNavigateHome={() => setCurrentPage('home')} />
      )}
    </LanguageProvider>
  );
}

export default App;
