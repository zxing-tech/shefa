import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
    const currentYear = new Date().getFullYear();

    const team = [
        { name: 'Russell Boyd', title: 'CEO' },
        { name: 'Dr. Surendran', title: 'COO' },
        { name: 'Dato\' Chik Nazrin', title: 'CRO' },
        { name: 'Laura Daniel', title: 'Advisor' },
    ];

    return (
        <footer className="bg-shefa-navy border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
            <div className="w-[86vw] mx-auto space-y-24 relative z-10">

                {/* Top Section: CTA & Split Footer */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="font-heading text-3xl font-medium text-white uppercase tracking-tighter">
                                Shefa <span className="text-shefa-cobalt underline decoration-1 underline-offset-4">Risk Management.</span>
                            </h2>
                            <p className="text-shefa-silver/60 text-sm leading-relaxed max-w-xs">
                                Institutional-grade trade finance and risk mitigation for Malaysia's industrial backbone.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-shefa-cobalt transition-colors">
                                    <MapPin className="w-4 h-4 text-shefa-cobalt" />
                                </div>
                                <div className="text-sm text-shefa-silver/80 leading-relaxed font-mono uppercase tracking-tight">
                                    Level 19, Menara 2,<br />
                                    KL Eco City, Malaysia
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-shefa-cobalt transition-colors">
                                    <Mail className="w-4 h-4 text-shefa-cobalt" />
                                </div>
                                <a href="mailto:enquiries@shefa.com.my" className="text-sm text-shefa-silver/80 hover:text-white transition-colors font-mono">
                                    enquiries@shefa.com.my
                                </a>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-shefa-cobalt transition-colors">
                                    <Phone className="w-4 h-4 text-shefa-cobalt" />
                                </div>
                                <a href="tel:+60327745254" className="text-sm text-shefa-silver/80 hover:text-white transition-colors font-mono">
                                    +603.2774.5254
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Team (Text Only) */}
                    <div className="space-y-8">
                        <h3 className="font-mono text-xs text-shefa-cobalt uppercase tracking-[0.3em]">Leadership</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {team.map((member) => (
                                <div key={member.name} className="group cursor-default">
                                    <div className="text-white font-medium group-hover:text-shefa-cobalt transition-colors">{member.name}</div>
                                    <div className="text-[10px] text-shefa-silver/50 uppercase tracking-widest">{member.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Quick Connect */}
                    <div className="space-y-8">
                        <h3 className="font-mono text-xs text-shefa-cobalt uppercase tracking-[0.3em]">Inquiries</h3>
                        <div className="space-y-6">
                            <p className="text-shefa-silver/60 text-sm">Experience the Shefa standard in trade finance velocity.</p>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="w-full btn-outline flex justify-between group"
                            >
                                Partner with us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Legal & Copyright */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-8 text-[10px] font-mono text-shefa-silver/40 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">KLDX Regulated</a>
                    </div>
                    <p className="text-[10px] font-mono text-shefa-silver/30 uppercase tracking-[0.2em]">
                        &copy; {currentYear} Shefa Risk Management. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Decorative architectural line */}
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-shefa-cobalt/20 via-transparent to-transparent hidden lg:block" />
        </footer>
    );
};

export default Footer;
