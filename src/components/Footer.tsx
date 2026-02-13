import { Shield, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';


const Footer = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
    return (
        <footer className="bg-shefa-navy text-white border-t border-white/10">
            {/* Trust Bar */}
            <div className="border-b border-white/10">
                <div className="w-[86vw] mx-auto py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-white/60 text-sm font-medium tracking-wide uppercase">Recognized By</span>
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-white" />
                                <span className="font-medium text-sm">Bank Negara Malaysia</span>
                            </div>
                            <div className="h-4 w-px bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-white" />
                                <span className="font-medium text-sm">MITBA Member</span>
                            </div>
                            <div className="h-4 w-px bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-white" />
                                <span className="font-medium text-sm">PIAM Member</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="w-[86vw] mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <img
                            src="/shefa-white-logo.png"
                            alt="Shefa Risk Management"
                            className="h-10 w-auto"
                        />
                        <p className="text-white/60 text-sm leading-relaxed">
                            Institutional-grade trade credit insurance and financing solutions for Southeast Asia's industrial backbone.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-medium text-lg mb-6 text-shefa-gold">Explore</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li>
                                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
                            </li>
                            <li>
                                <button onClick={() => onNavigate('borrowers')} className="hover:text-white transition-colors">Borrowers</button>
                            </li>
                            <li>
                                <button onClick={() => onNavigate('lenders')} className="hover:text-white transition-colors">Lenders</button>
                            </li>
                            <li>
                                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-medium text-lg mb-6 text-shefa-gold">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-shefa-gold shrink-0 mt-0.5" />
                                <span>
                                    Level 19, Menara 2,<br />
                                    KL Eco City, 59200 Kuala Lumpur
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-shefa-gold shrink-0" />
                                <a href="tel:+60327745254" className="hover:text-white transition-colors">+60 3-2774 5254</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-shefa-gold shrink-0" />
                                <a href="mailto:info@shefa-risk.com" className="hover:text-white transition-colors">info@shefa-risk.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-heading font-medium text-lg mb-6 text-shefa-gold">Legal</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 bg-black/20">
                <div className="w-[86vw] mx-auto py-6 text-center text-sm text-white/40">
                    &copy; {new Date().getFullYear()} Shefa Risk Management via Shefa Capital Sdn Bhd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
