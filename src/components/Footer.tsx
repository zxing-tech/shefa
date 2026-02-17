import { Shield, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
    onNavigate: (page: any, hash?: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
    const { t } = useLanguage();

    return (
        <footer className="bg-shefa-cobalt text-white pt-24 pb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />

            {/* Abstract background detail */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

            <div className="w-full px-6 lg:px-12 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                        {/* Brand Section */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <div className="flex flex-col items-start group">
                                    <span className="font-heading font-black text-2xl tracking-[2px] uppercase text-white leading-none">
                                        <span className="border-b-4 border-secondary pb-0.5">SHEFA</span>
                                    </span>
                                    <span className="text-[8px] font-black uppercase tracking-[0.4em] mt-1.5 text-secondary">{t('footer_risk_mgmt')}</span>
                                </div>
                                <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                                    {t('footer_desc')}
                                </p>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-white/10">
                                <div className="flex items-start gap-4 text-white/40 hover:text-secondary transition-colors group">
                                    <MapPin size={24} className="flex-shrink-0" />
                                    <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                                        Level 19, Menara 2, KL Eco City,<br />
                                        59200 Kuala Lumpur, Malaysia
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-white/40 hover:text-secondary transition-colors">
                                    <Mail size={24} />
                                    <p className="text-sm font-bold uppercase tracking-widest">enquiries@shefa.com.my</p>
                                </div>
                            </div>
                        </div>

                        {/* Links Sections */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                            <div className="space-y-8">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">{t('footer_solutions')}</div>
                                <ul className="space-y-4">
                                    <li><button onClick={() => onNavigate('borrowers', '#invoice-financing')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('nav_invoice_financing')}</button></li>
                                    <li><button onClick={() => onNavigate('borrowers', '#supply-chain')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('nav_supply_chain')}</button></li>
                                    <li><button onClick={() => onNavigate('industries')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('footer_sector_expertise')}</button></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">{t('footer_investors')}</div>
                                <ul className="space-y-4">
                                    <li><button onClick={() => onNavigate('lenders')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('footer_investment_notes')}</button></li>
                                    <li><button onClick={() => window.open('https://kldx.com.my')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">KLDX Platform</button></li>
                                    <li><button onClick={() => onNavigate('services')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('footer_service_suite')}</button></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">{t('footer_organization')}</div>
                                <ul className="space-y-4">
                                    <li><button onClick={() => onNavigate('about', '#about')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('footer_our_story')}</button></li>
                                    <li><button onClick={() => onNavigate('about', '#leadership')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('footer_leadership')}</button></li>
                                    <li><button onClick={() => onNavigate('about', '#contact')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all text-left">{t('footer_contact_hq')}</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                            <Shield size={16} />
                            <span>&copy; {new Date().getFullYear()} {t('footer_rights')}</span>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 text-white/40">
                                <Globe size={14} />
                                <span className="text-[9px] font-black uppercase tracking-widest">English (Global)</span>
                            </div>
                            <div className="flex gap-6">
                                <button className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all">Regulatory Notice</button>
                                <button className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all">Privacy Policy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
