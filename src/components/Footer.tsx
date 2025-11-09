import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigateToPrivacy?: () => void;
}

export default function Footer({ onNavigateToPrivacy }: FooterProps) {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <nav className="flex flex-wrap gap-6 text-sm">
            <button
              onClick={() => scrollToSection('vision')}
              className="hover:text-gray-300 transition-colors"
            >
              {language === 'jp' ? '企業理念' : 'Vision'}
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="hover:text-gray-300 transition-colors"
            >
              {language === 'jp' ? '会社概要' : 'Company'}
            </button>
            <button
              onClick={onNavigateToPrivacy}
              className="hover:text-gray-300 transition-colors"
            >
              {language === 'jp' ? 'プライバシーポリシー' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => scrollToSection('business')}
              className="hover:text-gray-300 transition-colors"
            >
              {language === 'jp' ? '事業内容' : 'Business'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              {language === 'jp' ? 'お問い合わせ' : 'Contact'}
            </button>
          </nav>
          <p className="text-sm">
            {language === 'jp'
              ? `Copyright ${year} © セレクトバーゲンストア. All rights reserved.`
              : `Copyright ${year} © Select Bargain Store. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
