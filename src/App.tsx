import React from 'react';
import { Shield, BarChart3, Briefcase, ChevronRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-shefa-white selection:bg-shefa-gold selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-shefa-navy/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 md:px-12">
                    <div className="flex items-center gap-2">
                        <img src="/Logo-Shefa-Risk-Management-OL_Shefa-Black.png" alt="Shefa Logo" className="h-10 md:h-12" />
                    </div>
                    <div className="hidden md:flex items-center gap-10">
                        {['About Us', 'Services', 'Industries'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-semibold text-shefa-navy hover:text-shefa-gold transition-colors tracking-tight"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="text-sm font-bold bg-shefa-navy text-white px-7 py-3 rounded-full hover:bg-shefa-gold transition-all shadow-lg shadow-shefa-navy/10 hover:-translate-y-0.5"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero_main.jpg"
                        alt="Hero Background"
                        className="w-full h-full object-cover scale-105 animate-pulse-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-shefa-white via-shefa-white/95 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <div className="max-w-2xl">
                        <span className="inline-block eyebrow text-shefa-gold font-mono mb-4 px-4 py-1.5 bg-shefa-gold/10 rounded-full">
                            Global Risk Standards
                        </span>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold text-shefa-navy leading-[0.95] mb-8">
                            Comprehensive <br />
                            <span className="text-shefa-gold italic">Risk</span> Management
                        </h1>
                        <p className="text-lg md:text-xl text-shefa-gray mb-12 max-w-lg leading-relaxed">
                            Protecting your global assets and securing your future through expert analysis, strategic planning, and innovative risk mitigation frameworks.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="bg-shefa-navy text-white px-10 py-5 rounded-full font-bold hover:bg-shefa-gold transition-all shadow-xl shadow-shefa-navy/20 hover:-translate-y-1">
                                Our Strategic Approach
                            </button>
                            <button className="flex items-center justify-center gap-2 border-2 border-shefa-navy px-10 py-5 rounded-full font-bold text-shefa-navy hover:bg-shefa-navy hover:text-white transition-all group">
                                Watch Discovery Tour <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Metrics or subtle detail */}
                <div className="hidden lg:block absolute bottom-20 right-12 z-10 animate-fade-in">
                    <div className="glass p-8 rounded-3xl border-shefa-gold/30 shadow-2xl">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="size-3 rounded-full bg-shefa-gold animate-ping"></div>
                            <span className="font-mono text-xs text-shefa-gray uppercase tracking-widest">Live Risk Analysis</span>
                        </div>
                        <div className="text-4xl font-heading font-bold text-shefa-navy">24/7 Monitoring</div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section id="services" className="py-32 bg-shefa-white relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-xl">
                            <span className="eyebrow text-shefa-gold font-mono block mb-4">What we do</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-shefa-navy leading-tight">
                                Specialized Risk <br />
                                <span className="text-shefa-gold underline decoration-shefa-gold/30 underline-offset-8">Consulting Services</span>
                            </h2>
                        </div>
                        <p className="text-shefa-gray max-w-xs border-l-2 border-shefa-gold/30 pl-6">
                            Empowering organizations to navigate uncertainty with precision and confidence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: 'Risk Assessment', icon: <Shield />, desc: 'Thorough evaluation of potential risks to your business operations, infrastructure, and core assets using ISO standards.' },
                            { title: 'Strategic Consulting', icon: <BarChart3 />, desc: 'Expert guidance on navigating complex risk landscapes, regulatory environments, and multi-market expansions.' },
                            { title: 'Claims Management', icon: <Briefcase />, desc: 'Efficient, transparent handling and resolution of complex claims to minimize operational disruption and financial loss.' }
                        ].map((service, i) => (
                            <div key={i} className="card group hover:border-shefa-gold/50 cursor-pointer">
                                <div className="size-16 rounded-2xl bg-shefa-navy/5 flex items-center justify-center text-shefa-navy mb-8 group-hover:bg-shefa-gold group-hover:text-white transition-all duration-500">
                                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4 text-shefa-navy">{service.title}</h3>
                                <p className="text-shefa-gray leading-relaxed mb-8">{service.desc}</p>
                                <div className="flex items-center gap-2 text-shefa-gold font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more <ChevronRight className="size-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section id="industries" className="py-32 bg-shefa-navy relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-shefa-gold/5 -skew-x-12 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="md:w-1/2">
                            <span className="eyebrow text-shefa-gold font-mono block mb-4">Global Reach</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                                Industries We <br />
                                <span className="text-shefa-white/60">Expertly Serve</span>
                            </h2>
                        </div>
                        <button className="mt-8 md:mt-0 text-shefa-gold font-bold flex items-center gap-3 hover:gap-5 transition-all group">
                            Explore All Sectors <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Construction', img: '/industry_construction.jpg', text: 'Large-scale infrastructure risk mitigation' },
                            { name: 'Healthcare', img: '/industry_healthcare.jpg', text: 'Compliance and clinical safety frameworks' },
                            { name: 'Technology', img: '/industry_tech.jpg', text: 'Data security and digital asset protection' }
                        ].map((industry, i) => (
                            <div key={i} className="relative h-[500px] overflow-hidden rounded-[32px] group cursor-pointer shadow-2xl">
                                <img src={industry.img} alt={industry.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy via-shefa-navy/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-10 left-10 right-10">
                                    <span className="text-shefa-gold font-mono text-xs uppercase tracking-widest mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Sector Focus</span>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-2">{industry.name}</h3>
                                    <p className="text-shefa-white/60 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{industry.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-shefa-black text-white pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-16 border-b border-white/10 pb-20">
                    <div className="col-span-2">
                        <img src="/Logo-Shefa-Risk-Management-OL_Shefa-White.png" alt="Shefa Logo" className="h-12 mb-10" />
                        <p className="text-shefa-gray body-base max-w-sm mb-10">
                            Providing globally recognized risk management standards and local expertise to safeguard your most valuable assets.
                        </p>
                        <div className="flex gap-4">
                            {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                                <div key={s} className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-shefa-gold hover:border-shefa-gold transition-all cursor-pointer">
                                    <span className="sr-only">{s}</span>
                                    <div className="size-4 bg-white/40 mask-icon"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-8 text-shefa-gold uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-5 text-shefa-gray text-sm font-medium">
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Risk Framework</a></li>
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Compliance Standards</a></li>
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Our Global Team</a></li>
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Crisis Management</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-8 text-white uppercase tracking-widest text-xs">Contact Headquarters</h4>
                        <ul className="space-y-6 text-shefa-gray text-sm">
                            <li className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="size-4 text-shefa-gold" />
                                </div>
                                <div>
                                    <span className="block text-white/40 text-[10px] uppercase font-bold tracking-tighter mb-1">Call Us</span>
                                    +60 3 1234 5678
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="size-4 text-shefa-gold" />
                                </div>
                                <div>
                                    <span className="block text-white/40 text-[10px] uppercase font-bold tracking-tighter mb-1">Email Inquiry</span>
                                    solutions@shefa-risk.com
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="size-4 text-shefa-gold" />
                                </div>
                                <div>
                                    <span className="block text-white/40 text-[10px] uppercase font-bold tracking-tighter mb-1">Head Office</span>
                                    Kuala Lumpur, Malaysia
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col md:flex-row justify-between items-center text-shefa-gray text-[10px] uppercase tracking-widest font-bold gap-6">
                    <p>© {new Date().getFullYear()} Shefa Risk Management Sdn. Bhd. [Global HQ]</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Legal Disclosure</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

