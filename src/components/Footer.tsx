import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact' | 'privacy' | 'terms';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', company: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <footer id="contact" className="relative w-full bg-shefa-white pt-20 lg:pt-32 pb-8">
            <div className="w-[86vw] mx-auto">

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw] mb-20 lg:mb-32">
                    {/* Form */}
                    <div>
                        <span className="eyebrow block mb-4">{t('footer_contact_us')}</span>
                        <div className="gold-rule mb-6" />
                        <h2 className="heading-lg text-shefa-navy mb-8">
                            {t('footer_contact_shefa').split(' ')[0]} <span className="text-shefa-gold">{t('footer_contact_shefa').split(' ').slice(1).join(' ')}</span>
                        </h2>

                        {submitted ? (
                            <div className="card p-8 text-center">
                                <div className="w-16 h-16 rounded-full bg-shefa-gold/20 flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8 text-shefa-gold" />
                                </div>
                                <h3 className="font-heading text-xl font-medium text-shefa-navy mb-2">{t('footer_message_sent')}</h3>
                                <p className="text-shefa-gray">{t('footer_message_desc')}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-shefa-navy mb-2">{t('footer_name')}</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-shefa-navy mb-2">{t('footer_company')}</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-shefa-navy mb-2">{t('footer_email')}</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-shefa-navy mb-2">{t('footer_message')}</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all resize-none" />
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" required className="mt-1 accent-shefa-gold" />
                                    <label className="text-xs text-shefa-gray">{t('footer_consent')}</label>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                                    {isSubmitting ? t('footer_sending') : t('footer_send')}
                                    {!isSubmitting && <Send size={16} />}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="card p-8 lg:p-10 h-full">
                            <h3 className="font-heading text-xl font-medium text-shefa-navy mb-6">{t('footer_info_title')}</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-shefa-gold w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-shefa-navy">{t('footer_address')}</div>
                                        <div className="text-shefa-gray text-sm">Level 19, Boutique Office 1, Menara 2, KL Eco City, 59200 Kuala Lumpur</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-shefa-gold w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-shefa-navy">{t('footer_phone')}</div>
                                        <a href="tel:+60327745254" className="text-shefa-gray text-sm hover:text-shefa-gold transition-colors">+60 3-2774 5254</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-shefa-gold w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-shefa-navy">{t('footer_email')}</div>
                                        <a href="mailto:enquiries@shefa.com.my" className="text-shefa-gray text-sm hover:text-shefa-gold transition-colors">enquiries@shefa.com.my</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-shefa-navy/5 flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-shefa-gold w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-shefa-navy">{t('footer_hours')}</div>
                                        <div className="text-shefa-gray text-sm">{t('footer_mon_fri')}<br />{t('footer_sat_sun')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recognized By Section */}
                <div className="border-t border-shefa-gray/10 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-shefa-navy/60 text-sm font-medium tracking-wide uppercase">{t('footer_recognized_by')}</span>
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-shefa-navy" />
                                <span className="text-shefa-navy font-medium text-sm">Bank Negara Malaysia</span>
                            </div>
                            <div className="h-4 w-px bg-shefa-navy/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-shefa-navy" />
                                <span className="text-shefa-navy font-medium text-sm">MITBA Member</span>
                            </div>
                            <div className="h-4 w-px bg-shefa-navy/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-shefa-navy" />
                                <span className="text-shefa-navy font-medium text-sm">PIAM Member</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t border-shefa-gray/10">
                    <div>
                        <h4 className="font-bold text-shefa-navy mb-4">Shefa Risk Management</h4>
                        <p className="text-sm text-shefa-gray leading-relaxed mb-4">
                            Shefa Risk Management Sdn. Bhd. is a licensed financial advisory firm regulated by Bank Negara Malaysia. We specialize in providing comprehensive risk management and insurance solutions tailored for corporate clients, focusing on trade credit, political risk, and structured finance.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-shefa-navy mb-4">{t('nav_services')}</h4>
                        <ul className="space-y-2 text-sm text-shefa-gray">
                            <li><button onClick={() => onNavigate('services')} className="hover:text-shefa-gold text-left">{t('footer_trade_ins')}</button></li>
                            <li><button onClick={() => onNavigate('services')} className="hover:text-shefa-gold text-left">{t('footer_inv_fin')}</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-shefa-navy mb-4">{t('footer_quick_links')}</h4>
                        <ul className="space-y-2 text-sm text-shefa-gray">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-shefa-gold text-left">{t('nav_home')}</button></li>
                            <li><button onClick={() => onNavigate('about')} className="hover:text-shefa-gold text-left">{t('nav_about')}</button></li>
                            <li><button onClick={() => onNavigate('contact')} className="hover:text-shefa-gold text-left">{t('nav_contact')}</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-shefa-navy mb-4">{t('footer_solutions')}</h4>
                        <ul className="space-y-2 text-sm text-shefa-gray">
                            <li><button onClick={() => onNavigate('borrowers')} className="hover:text-shefa-gold text-left">{t('nav_borrowers')}</button></li>
                            <li><button onClick={() => onNavigate('lenders')} className="hover:text-shefa-gold text-left">{t('nav_lenders')}</button></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="bg-shefa-navy text-white py-8">
                <div className="w-[86vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
                    <div>&copy; {new Date().getFullYear()} {t('footer_rights')}</div>
                    <div className="flex gap-6">
                        <button onClick={() => onNavigate('privacy')} className="hover:text-shefa-gold transition-colors">{t('footer_privacy')}</button>
                        <button onClick={() => onNavigate('terms')} className="hover:text-shefa-gold transition-colors">{t('footer_terms')}</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
