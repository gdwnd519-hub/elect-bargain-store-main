import { useLanguage } from '../contexts/LanguageContext';
import { Building2 } from 'lucide-react';

export default function CompanySection() {
  const { t } = useLanguage();
  const info = t.company.info;

  const companyData = [
    { label: info.name.label, value: info.name.value },
    { label: info.representative.label, value: info.representative.value },
    { label: info.address.label, value: info.address.value },
    { label: info.capital.label, value: info.capital.value },
    { label: info.phone.label, value: info.phone.value },
    { label: info.fax.label, value: info.fax.value },
    { label: info.business.label, value: info.business.value },
  ];

  return (
    <section id="company" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-px h-24 bg-black mx-auto mb-6"></div>
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-12 h-12 mr-3" />
            <h2 className="text-6xl md:text-7xl font-bold">{t.company.title}</h2>
          </div>
          <h3 className="text-xl font-bold">{t.company.subtitle}</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {companyData.map((item, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-3 border-b last:border-b-0 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="px-6 py-4 font-semibold bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
                  {item.label}
                </div>
                <div className="md:col-span-2 px-6 py-4 text-gray-700">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
