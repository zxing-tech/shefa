import React from 'react';
import { Shield, BarChart3, Users, Briefcase, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
                <div className="max-container flex items-center justify-between py-4 px-6 md:px-12">
                    <div className="flex items-center gap-2">
                        <img src="/Logo-Shefa-Risk-Management-OL_Shefa-Black.png" alt="Shefa Logo" className="h-10" />
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#about" className="text-sm font-medium hover:text-shefa-gold transition-colors">About Us</a>
                        <a href="#services" className="text-sm font-medium hover:text-shefa-gold transition-colors">Services</a>
                        <a href="#industries" className="text-sm font-medium hover:text-shefa-gold transition-colors">Industries</a>
                        <a href="#contact" className="text-sm font-medium hover:text-shefa-gold transition-colors border-2 border-shefa-dark px-5 py-2 hover:bg-shefa-dark hover:text-white transition-all">Get in Touch</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero_main.jpg"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-container px-6 md:px-12 w-full lg:w-1/2">
                    <h1 className="text-5xl md:text-7xl font-bold text-shefa-dark leading-tight mb-6">
                        Comprehensive <span className="text-shefa-gold">Risk</span> Management Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
                        Protecting your assets and securing your future through expert analysis, strategic planning, and innovative risk mitigation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-shefa-dark text-white px-8 py-4 rounded font-semibold hover:bg-shefa-gold transition-colors">
                            Our Approach
                        </button>
                        <button className="flex items-center gap-2 border-2 border-shefa-dark px-8 py-4 rounded font-semibold hover:bg-shefa-dark hover:text-white transition-all">
                            Watch Clinic Tour <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section id="services" className="py-24 bg-gray-50">
                <div className="max-container px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 italic">Our Core Services</h2>
                        <div className="w-20 h-1 bg-shefa-gold mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Risk Assessment', icon: <Shield />, desc: 'Thorough evaluation of potential risks to your business operations and assets.' },
                            { title: 'Strategic Consulting', icon: <BarChart3 />, desc: 'Expert guidance on navigating complex risk landscapes and regulatory environments.' },
                            { title: 'Claims Management', icon: <Briefcase />, desc: 'Efficient handling and resolution of claims to minimize disruption and loss.' }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-10 shadow-sm border border-gray-100 hover-lift group">
                                <div className="text-shefa-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(service.icon as React.ReactElement, { size: 40 })}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section id="industries" className="py-24">
                <div className="max-container px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-4 italic leading-tight">Industries We Serve</h2>
                            <p className="text-gray-600">Tailored risk management frameworks for diverse sectors.</p>
                        </div>
                        <button className="mt-8 md:mt-0 text-shefa-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            View All Industries <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: 'Construction', img: '/industry_construction.jpg' },
                            { name: 'Healthcare', img: '/industry_healthcare.jpg' },
                            { name: 'Technology', img: '/industry_tech.jpg' }
                        ].map((industry, i) => (
                            <div key={i} className="relative h-80 overflow-hidden group">
                                <img src={industry.img} alt={industry.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-bold text-white italic">{industry.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-shefa-dark text-white py-20">
                <div className="max-container px-6 md:px-12 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
                    <div className="col-span-2">
                        <img src="/Logo-Shefa-Risk-Management-OL_Shefa-White.png" alt="Shefa Logo" className="h-10 mb-8" />
                        <p className="text-gray-400 max-w-sm">
                            Providing globally recognized risk management standards and local expertise to safeguard your business.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 italic">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Our Approach</a></li>
                            <li><a href="#" className="hover:text-shefa-gold transition-colors">Risk Framework</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 italic">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-shefa-gold" /> +60 3 1234 5678</li>
                            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-shefa-gold" /> info@shefa-risk.com</li>
                            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-shefa-gold" /> Kuala Lumpur, Malaysia</li>
                        </ul>
                    </div>
                </div>
                <div className="max-container px-6 md:px-12 pt-8 text-center text-gray-500 text-xs">
                    © {new Date().getFullYear()} Shefa Risk Management Sdn. Bhd. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default App;
