import { useLanguage } from '../contexts/LanguageContext';

export default function VisionSection() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t.vision.title}
          </h2>
          <p className="text-base md:text-lg text-white leading-relaxed whitespace-pre-line font-light">
            {t.vision.description}
          </p>
        </div>
      </div>
    </section>
  );
}
