import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigateHome?: () => void;
}

export default function Header({ onNavigateHome }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={onNavigateHome}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <ShoppingBag className={`w-8 h-8 transition-colors duration-[250ms] ${
              isScrolled ? 'text-black' : 'text-white'
            }`} />
            <span className={`text-xl font-bold tracking-tight transition-colors duration-[250ms] ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              {language === 'jp' ? 'セレクトバーゲンストア' : 'Select Bargain Store'}
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('vision')}
              className={`text-sm font-medium transition-colors duration-[250ms] ${
                isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
            >
              {t.nav.vision}
            </button>
            <button
              onClick={() => scrollToSection('business')}
              className={`text-sm font-medium transition-colors duration-[250ms] ${
                isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
            >
              {t.nav.business}
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className={`text-sm font-medium transition-colors duration-[250ms] ${
                isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
            >
              {t.nav.company}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors duration-[250ms] ${
                isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
            >
              {t.nav.contact}
            </button>

            <div className={`flex items-center space-x-2 ml-4 pl-4 border-l transition-colors duration-[250ms] ${
              isScrolled ? 'border-gray-300' : 'border-white/30'
            }`}>
              <button
                onClick={() => setLanguage('jp')}
                className={`px-3 py-1 text-sm font-medium transition-colors duration-[250ms] ${
                  language === 'jp'
                    ? isScrolled
                      ? 'text-black border-b-2 border-black'
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                      ? 'text-gray-400 hover:text-gray-600'
                      : 'text-white/60 hover:text-white/80'
                }`}
              >
                JP
              </button>
              <span className={`transition-colors duration-[250ms] ${
                isScrolled ? 'text-gray-300' : 'text-white/30'
              }`}>|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium transition-colors duration-[250ms] ${
                  language === 'en'
                    ? isScrolled
                      ? 'text-black border-b-2 border-black'
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                      ? 'text-gray-400 hover:text-gray-600'
                      : 'text-white/60 hover:text-white/80'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-[250ms] ${
              isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('vision')}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.vision}
            </button>
            <button
              onClick={() => scrollToSection('business')}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.business}
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.company}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              {t.nav.contact}
            </button>

            <div className="flex items-center justify-center space-x-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => setLanguage('jp')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  language === 'jp'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  language === 'en'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
