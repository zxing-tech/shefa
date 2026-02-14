import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Solutions',
            links: [
                { name: 'Borrowers', id: 'borrowers' },
                { name: 'Lenders', id: 'lenders' },
                { name: 'Industries', id: 'industries' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', id: 'privacy' },
                { name: 'Terms of Service', id: 'terms' },
                { name: 'Risk Disclosure', id: 'risk' },
            ]
        }
    ];

    return (
        <footer className="bg-shefa-navy text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-shefa-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="w-full px-6 lg:px-12 relative z-10">
                <div className="max-w-[1400px] mx-auto space-y-24">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Brand Section */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-shefa-gold rounded-xl flex items-center justify-center text-shefa-navy font-black text-2xl shadow-xl">S</div>
                                    <span className="text-2xl font-heading font-extrabold uppercase tracking-tighter">Shefa <span className="text-shefa-gold">Risk Management</span></span>
                                </div>
                                <p className="text-white/60 text-lg leading-relaxed max-w-md">
                                    Bridging the liquidity gap for Malaysia's industrial backbone through institutional-grade trade credit insurance.
                                </p>
                            </div>

                            <div className="space-y-6 pt-4 border-t border-white/10">
                                <div className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                                    <MapPin className="text-shefa-gold mt-1 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium leading-relaxed">
                                        Level 19, Menara 2, KL Eco City,<br />
                                        59200 Kuala Lumpur, Malaysia
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                                    <Mail className="text-shefa-gold group-hover:scale-110 transition-transform" size={20} />
                                    <a href="mailto:enquiries@shefa.com.my" className="text-sm font-bold uppercase tracking-wider">enquiries@shefa.com.my</a>
                                </div>
                                <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                                    <Phone className="text-shefa-gold group-hover:scale-110 transition-transform" size={20} />
                                    <a href="tel:+60327745254" className="text-sm font-bold uppercase tracking-wider">+603 2774 5254</a>
                                </div>
                            </div>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
                            {sections.map((section) => (
                                <div key={section.title} className="space-y-8">
                                    <h3 className="text-shefa-gold font-black uppercase tracking-[0.2em] text-[10px]">{section.title}</h3>
                                    <ul className="space-y-4">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <button
                                                    onClick={() => onNavigate(link.id)}
                                                    className="text-white/50 hover:text-shefa-gold transition-colors text-sm font-medium uppercase tracking-widest text-left"
                                                >
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Utility Bar */}
                    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-12">
                            <div className="flex items-center gap-2 text-white/40">
                                <Globe size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Global Operations Center</span>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                                &copy; {currentYear} Shefa Risk Management Sendirian Berhad.
                            </p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-shefa-gold">Audit & Risk Certified</span>
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Linkedin size={14} className="text-white/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
