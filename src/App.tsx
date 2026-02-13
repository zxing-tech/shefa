import React from 'react';
import { Shield, BarChart3, Briefcase, ChevronRight, Phone, Mail, MapPin, ExternalLink, ArrowRight, CheckCircle2, TrendingUp, Building2, Anchor, Truck, HardHat, Stethoscope } from 'lucide-react';

const SECTORS = [
    { name: 'Manufacturing', icon: <Building2 className="w-8 h-8" />, img: '/industry_factory.jpg' }, // Placeholder, will fallback or use existing
    { name: 'Agriculture', icon: <TrendingUp className="w-8 h-8" />, img: '/coverage_agriculture.jpg' },
    { name: 'Logistics', icon: <Truck className="w-8 h-8" />, img: '/transport_hero.jpg' }, // Placeholder
    { name: 'Construction', icon: <HardHat className="w-8 h-8" />, img: '/industry_construction.jpg' },
    { name: 'Technology', icon: <Shield className="w-8 h-8" />, img: '/industry_tech.jpg' },
    { name: 'Healthcare', icon: <Stethoscope className="w-8 h-8" />, img: '/industry_healthcare.jpg' }
];

const PROCESS_STEPS = [
    { step: '01', title: 'Assess', desc: 'We analyze your business portfolio, trade patterns, and credit risks to identify optimal coverage strategy.' },
    { step: '02', title: 'Insure', desc: 'Get a tailored policy with robust limits that protects your balance sheet against non-payment.' },
    { step: '03', title: 'Collect', desc: 'In case of default, we handle the claims and recovery while you focus on business.' }
];

function App() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-shefa-gold selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                <div className="container-base flex items-center justify-between py-4">
                    <a href="#" className="flex items-center gap-2">
                        <img src="/Logo-Shefa-Risk-Management-OL_Shefa-Colour.png" alt="Shefa Risk Management" className="h-10 md:h-12" />
                    </a>
                    <div className="hidden lg:flex items-center gap-8">
                        {['Home', 'Solutions', 'For Borrowers', 'For Investors', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-semibold text-shefa-navy hover:text-shefa-gold transition-colors tracking-tight uppercase"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <button className="hidden lg:block btn-primary text-sm px-6 py-2.5">
                        Get a Quote
                    </button>

                    {/* Mobile Menu Button Placeholder */}
                    <button className="lg:hidden text-shefa-navy">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero_main.jpg"
                        alt="Office with KL Skyline"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-shefa-navy/90 via-shefa-navy/60 to-transparent"></div>
                </div>

                <div className="relative z-10 container-base text-white">
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 mb-6 border border-shefa-gold/30 rounded-full bg-shefa-gold/10 backdrop-blur-sm">
                            <span className="text-shefa-gold text-xs font-bold tracking-widest uppercase">Shefa Risk Management</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
                            Protect Your <br />
                            Receivables. <span className="text-shefa-gold">Unlock <br /> Your Cash Flow.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light">
                            Trade credit insurance and financing solutions that keep Malaysian businesses moving. Backed by data, powered by trust.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-primary">
                                Protect Revenue <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                            <button className="btn-secondary border-white text-white hover:bg-white hover:text-shefa-navy">
                                Finance Growth
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section id="solutions" className="py-24 bg-shefa-light-blue">
                <div className="container-base">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="eyebrow text-shefa-gray mb-4 block">Our Mission</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-shefa-navy mb-8 leading-tight">
                                We Turn Credit Risk Into a <br />
                                <span className="text-shefa-gold">Competitive Advantage</span>
                            </h2>
                            <p className="text-shefa-gray text-lg leading-relaxed mb-8">
                                Shefa operates at the intersection of institutional capital and the industrial backbones of Southeast Asia, addressing the system's liquidity gaps.
                                Our solutions empower you to trade with confidence, knowing your bottom line is shielded against unforeseen defaults.
                            </p>
                            <a href="#about" className="text-shefa-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                Learn About Our Vision <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-4 bg-shefa-gold/20 rounded-[32px] -rotate-2"></div>
                            <img
                                src="/approach_handshake.jpg"
                                alt="Business Handshake"
                                className="relative rounded-[28px] shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Dark Navy */}
            <section className="py-24 bg-shefa-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 translate-x-1/2"></div>
                <div className="container-base relative z-10">
                    <div className="text-center mb-20">
                        <span className="eyebrow text-shefa-gold/80 mb-4 block">The Process</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">
                            Three Steps to <span className="text-shefa-gold">Protected Revenue</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {PROCESS_STEPS.map((step, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-mono font-bold text-white/20 group-hover:text-shefa-gold/50 transition-colors">{step.step}</span>
                                    <div className="bg-shefa-gold/20 p-2 rounded-full text-shefa-gold">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Financing Dual Cards */}
            <section id="financing" className="py-24 bg-white">
                <div className="container-base">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1 */}
                        <div className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-xl">
                            <img src="/borrower_hero.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Borrower" />
                            <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <span className="bg-shefa-gold text-shefa-navy text-xs font-bold px-3 py-1 rounded mb-4 inline-block uppercase">For Borrowers</span>
                                <h3 className="text-3xl font-bold text-white mb-2">Need Insured Financing?</h3>
                                <p className="text-gray-300 mb-8 text-sm">Access working capital backed by trade credit insurance.</p>
                                <button className="btn-primary w-full sm:w-auto">Get Financing</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-xl">
                            <img src="/hero_team_office.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Investor" />
                            <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <span className="bg-white text-shefa-navy text-xs font-bold px-3 py-1 rounded mb-4 inline-block uppercase">For Investors</span>
                                <h3 className="text-3xl font-bold text-white mb-2">Want to Earn Returns?</h3>
                                <p className="text-gray-300 mb-8 text-sm">Invest in insurance-backed trade receivables.</p>
                                <button className="bg-white text-shefa-navy px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all inline-block">Start Investing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-24 bg-shefa-light-blue">
                <div className="container-base">
                    <div className="text-center mb-16">
                        <span className="eyebrow text-shefa-gray block mb-4">Industries</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-shefa-navy">
                            Covering the Sectors That <br />
                            <span className="text-shefa-gold">Move Malaysia</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {SECTORS.map((sector, i) => (
                            <div key={i} className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer">
                                <img src={sector.img} alt={sector.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-shefa-navy/60 group-hover:bg-shefa-navy/40 transition-colors"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                    <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm group-hover:bg-shefa-gold group-hover:text-shefa-navy transition-colors">
                                        {sector.icon}
                                    </div>
                                    <span className="font-bold text-sm tracking-wide text-center">{sector.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-shefa-navy py-12 border-t border-white/10">
                <div className="container-base">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
                        {[
                            { label: 'Prompt Collections', val: '<48h', sub: 'Industry Standard' },
                            { label: 'Client Retention', val: '94%', sub: 'Year over Year' },
                            { label: 'Protection Value', val: 'MYR 2.8B+', sub: 'Receivables Covered' },
                            { label: 'Experience', val: '40+', sub: 'Years Combined' }
                        ].map((stat, i) => (
                            <div key={i} className="px-4">
                                <div className="text-3xl md:text-4xl font-bold text-shefa-gold mb-2">{stat.val}</div>
                                <div className="text-white font-bold text-sm uppercase tracking-wider mb-1">{stat.label}</div>
                                <div className="text-shefa-gray text-xs">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-white">
                <div className="container-base">
                    <div className="bg-shefa-navy rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('/protection_wharf_cargo.jpg')] bg-cover bg-center"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                                Ready to Protect Your <br /> <span className="text-shefa-gold">Revenue?</span>
                            </h2>
                            <p className="text-gray-300 mb-10 text-lg">Get a tailored trade credit insurance policy within 48 hours for eligible businesses.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="btn-primary border-2 border-shefa-gold">Request a Quote</button>
                                <button className="btn-secondary border-white text-white hover:bg-white hover:text-shefa-navy">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Links */}
            <footer id="contact" className="bg-shefa-black text-white pt-20 pb-10 border-t border-white/10">
                <div className="container-base">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <img src="/Logo-Shefa-Risk-Management-OL_Shefa-White.png" alt="Shefa Logo" className="h-10 mb-8" />
                            <p className="text-shefa-gray max-w-sm mb-8">
                                Providing globally recognized risk management standards and local expertise to safeguard your most valuable assets.
                            </p>
                            <div className="flex gap-4">
                                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-shefa-gold transition-colors cursor-pointer"></div>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white">Office</h4>
                            <ul className="space-y-4 text-shefa-gray">
                                <li className="flex gap-3"><MapPin className="w-5 h-5 text-shefa-gold" /> Level 25, Menara 3 Petronas, Persiaran KLCC, 50088 Kuala Lumpur</li>
                                <li className="flex gap-3"><Mail className="w-5 h-5 text-shefa-gold" /> hello@shefa-risk.com</li>
                                <li className="flex gap-3"><Phone className="w-5 h-5 text-shefa-gold" /> +60 3 1234 5678</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white">Links</h4>
                            <ul className="space-y-3 text-shefa-gray">
                                <li><a href="#" className="hover:text-shefa-gold">About Us</a></li>
                                <li><a href="#" className="hover:text-shefa-gold">Solutions</a></li>
                                <li><a href="#" className="hover:text-shefa-gold">Careers</a></li>
                                <li><a href="#" className="hover:text-shefa-gold">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-shefa-gray">
                        <p>© {new Date().getFullYear()} Shefa Risk Management. All rights reserved.</p>
                        <p>Designed for Excellence.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
