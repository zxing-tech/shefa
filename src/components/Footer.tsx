import { Shield, Mail, MapPin, Globe } from 'lucide-react';

interface FooterProps {
    onNavigate: (page: any, hash?: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {

    return (
        <footer className="bg-[#1A2255] text-white pt-24 pb-12 overflow-hidden relative">
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
                                    <span className="text-[8px] font-black uppercase tracking-[0.4em] mt-1.5 text-secondary">Risk Management</span>
                                </div>
                                <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                                    Institutional trade finance & risk management. Bridging the liquidity gap for Malaysia's industrial backbone with AA-rated insurance protection.
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
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Solutions</div>
                                <ul className="space-y-4">
                                    <li><button onClick={() => onNavigate('borrowers', '#invoice-financing')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Invoice Financing</button></li>
                                    <li><button onClick={() => onNavigate('borrowers', '#supply-chain')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Supply Chain Finance</button></li>
                                    <li><button onClick={() => onNavigate('industries')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Sector Expertise</button></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Investors</div>
                                <ul className="space-y-4">
                                    <li><button onClick={() => onNavigate('lenders')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Investment Notes</button></li>
                                    <li><button onClick={() => window.open('https://kldx.com.my')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">KLDX Platform</button></li>
                                    <li><button onClick={() => onNavigate('services')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Service Suite</button></li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Organization</div>
                                <ul className="space-y-4">
                                    <li><button onClick={() => onNavigate('about', '#about')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Our Story</button></li>
                                    <li><button onClick={() => onNavigate('about', '#leadership')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Leadership</button></li>
                                    <li><button onClick={() => onNavigate('about', '#contact')} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Contact HQ</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                            <Shield size={16} />
                            <span>&copy; {new Date().getFullYear()} Shefa Risk Management. Private & Confidential.</span>
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
