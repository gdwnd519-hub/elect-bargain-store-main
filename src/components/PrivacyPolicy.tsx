import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
}

export default function PrivacyPolicy({ onNavigateHome }: PrivacyPolicyProps) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigateHome={onNavigateHome} />

      <main className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">{t.privacyPolicy.title}</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              {t.privacyPolicy.intro}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                {t.privacyPolicy.sections.security.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.privacyPolicy.sections.security.content}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                {t.privacyPolicy.sections.collection.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.privacyPolicy.sections.collection.content}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                {t.privacyPolicy.sections.purpose.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.privacyPolicy.sections.purpose.content}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                {t.privacyPolicy.sections.purpose.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                {t.privacyPolicy.sections.disclosure.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.privacyPolicy.sections.disclosure.content}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                {t.privacyPolicy.sections.rights.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.privacyPolicy.sections.rights.content}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                {t.privacyPolicy.sections.contact.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.privacyPolicy.sections.contact.content}
              </p>
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 mt-4">
                <p className="font-semibold mb-2">{t.privacyPolicy.sections.contact.companyName}</p>
                <p className="text-gray-700">{t.privacyPolicy.sections.contact.address}</p>
                <p className="text-gray-700">{t.privacyPolicy.sections.contact.phone}</p>
              </div>
            </section>

            <div className="text-center mt-12">
              <button
                onClick={onNavigateHome}
                className="px-8 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                {language === 'jp' ? 'トップページに戻る' : 'Back to Home'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
