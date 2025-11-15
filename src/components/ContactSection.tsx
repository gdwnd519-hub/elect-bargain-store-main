import { useState, FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitContactInquiry, ContactInquiry } from '../lib/supabase';
import { Mail, CheckCircle2, XCircle } from 'lucide-react';

interface FormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = t.contact.validation.required;
    }
    if (formData.phone.trim() && !/^[0-9\-\+\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = t.contact.validation.phoneInvalid;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.contact.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.validation.emailInvalid;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.contact.validation.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirm(true);
    }
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    try {
      const inquiry: ContactInquiry = {
        company_name: formData.companyName,
        contact_person: formData.contactPerson,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        language: language,
      };

      await submitContactInquiry(inquiry);
      setShowConfirm(false);
      setShowSuccess(true);
      setFormData({
        companyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setShowConfirm(false);
      setShowError(true);
      // 開発環境のみエラーの詳細をログ出力
      if (import.meta.env.DEV) {
        console.error('Error submitting form:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-px h-16 bg-black mx-auto mb-4"></div>
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-12 h-12 mr-3" />
            <h2 className="text-6xl md:text-7xl font-bold">{t.contact.title}</h2>
          </div>
          <h3 className="text-xl font-bold mb-4">{t.contact.heading}</h3>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-sm p-6">
          <p className="text-gray-700 leading-relaxed mb-6">{t.contact.subtitle}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
                {t.contact.form.companyName}
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white ${
                  errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
              )}
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div>
              <label htmlFor="contactPerson" className="block text-sm font-semibold mb-2">
                {t.contact.form.contactPerson}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="contactPerson"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white ${
                  errors.contactPerson ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.contactPerson && (
                <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
              )}
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                {t.contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                {t.contact.form.email}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                {t.contact.form.message}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <button
                type="submit"
                className="px-8 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                {t.contact.form.submit}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    companyName: '',
                    contactPerson: '',
                    phone: '',
                    email: '',
                    message: '',
                  });
                  setErrors({});
                }}
                className="px-8 py-2 bg-white text-black border border-black rounded-md font-semibold hover:bg-gray-50 transition-colors"
              >
                {t.contact.form.reset}
              </button>
            </div>
          </form>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <div className="text-left">
          <p className="font-semibold mb-2">{t.contact.companyName}</p>
          <p className="text-gray-700">{t.contact.address}</p>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">{t.contact.modal.confirmTitle}</h3>
            <p className="text-gray-600 mb-6">{t.contact.modal.confirmMessage}</p>

            <div className="space-y-4 mb-8 bg-gray-50 p-6 rounded-lg">
              {formData.companyName && (
                <div>
                  <p className="text-sm font-semibold text-gray-600">{t.contact.form.companyName}</p>
                  <p className="text-lg">{formData.companyName}</p>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-600">{t.contact.form.contactPerson}</p>
                <p className="text-lg">{formData.contactPerson}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {formData.phone && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600">{t.contact.form.phone}</p>
                    <p className="text-lg">{formData.phone}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-600">{t.contact.form.email}</p>
                  <p className="text-lg">{formData.email}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">{t.contact.form.message}</p>
                <p className="text-lg whitespace-pre-wrap">{formData.message}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                {t.contact.form.back}
              </button>
              <button
                onClick={handleConfirmSubmit}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? '...' : t.contact.form.send}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t.contact.modal.successTitle}</h3>
            <p className="text-gray-600 mb-6">{t.contact.modal.successMessage}</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              {t.contact.modal.close}
            </button>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t.contact.modal.errorTitle}</h3>
            <p className="text-gray-600 mb-6">{t.contact.modal.errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              {t.contact.modal.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
