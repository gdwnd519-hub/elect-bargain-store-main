import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BusinessSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="business" ref={sectionRef} className="pt-0 pb-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <div className="w-px h-24 bg-black mx-auto"></div>
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-12 h-12 mr-3" />
            <h2 className="text-6xl md:text-7xl font-bold">{t.business.title}</h2>
          </div>
          <h3 className="text-xl font-bold mt-6">{t.business.heading}</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">{t.business.subtitle}</h4>
              <div className="w-16 h-px bg-gray-300 mb-6"></div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {t.business.content}
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team working"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
