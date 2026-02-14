import { Factory, Fuel, ShoppingCart, HardHat, Monitor, ArrowRight, Stethoscope } from 'lucide-react';

const Industries = () => {
    const industries = [
        {
            name: 'Oil & Gas Services',
            icon: Fuel,
            desc: 'Capital intensive projects requiring bridge financing for offshore and downstream supply chains.',
            highlight: 'RM 100M+ Funded',
            image: '/coverage_port.jpg'
        },
        {
            name: 'Manufacturing',
            icon: Factory,
            desc: 'Raw material procurement funding for diverse production cycles and inventory management.',
            highlight: '48h Approval',
            image: '/coverage_factory.jpg'
        },
        {
            name: 'FMCG & Food',
            icon: ShoppingCart,
            desc: 'High volume, short cycle receivable management for rapid inventory turnover and logistics.',
            highlight: 'Dynamic Limits',
            image: '/coverage_agriculture.jpg'
        },
        {
            name: 'Construction',
            icon: HardHat,
            desc: 'Project progress claim financing to maintain operational momentum across complex timelines.',
            highlight: 'Progress Claims',
            image: '/industry_construction.jpg'
        },
        {
            name: 'Technology',
            icon: Monitor,
            desc: 'Hardware procurement and contract financing for fast-scaling digital infrastructure projects.',
            highlight: 'Contract Based',
            image: '/industry_tech.jpg'
        },
        {
            name: 'Healthcare',
            icon: Stethoscope,
            desc: 'Medical supply chain and pharmaceutical distribution financing for private and public sector vendors.',
            highlight: 'Medical Supply',
            image: '/industry_healthcare.jpg'
        }
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="bg-shefa-navy text-white py-24 lg:py-48 overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/coverage_agriculture.jpg"
                        alt="Industries"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy via-shefa-navy/50 to-transparent" />
                </div>

                <div className="w-full px-6 lg:px-12 relative z-10">
                    <div className="max-w-[1400px] mx-auto text-center space-y-8">
                        <span className="text-shefa-gold font-bold uppercase tracking-[0.3em] text-xs">Sector Expertise // Global Trade</span>
                        <h1 className="text-5xl lg:text-7xl font-heading font-extrabold uppercase leading-[0.9] tracking-tighter">
                            Deep <span className="text-shefa-gold">Industry</span><br />
                            Integration.
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            We bridge the capital gap for Malaysia's industrial backbone across five core sectors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 lg:py-32">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <div
                                    key={industry.name}
                                    className="group p-0 bg-card border border-border rounded-[32px] hover:border-shefa-gold transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[500px] overflow-hidden"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={industry.image}
                                            alt={industry.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-shefa-navy/40 mix-blend-multiply" />
                                        <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                            <Icon size={24} />
                                        </div>
                                    </div>

                                    <div className="p-8 lg:p-12 flex-grow flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <h3 className="text-3xl font-heading font-extrabold uppercase text-foreground leading-tight">
                                                {industry.name}
                                            </h3>
                                            <p className="text-foreground/60 leading-relaxed text-sm">
                                                {industry.desc}
                                            </p>
                                        </div>

                                        <div className="pt-8 border-t border-border mt-8 flex justify-between items-center">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-shefa-gold">{industry.highlight}</span>
                                            <ArrowRight size={20} className="text-foreground/20 group-hover:text-shefa-gold group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Shortcut */}
            <section className="pb-32">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto bg-foreground text-background p-12 lg:p-24 rounded-[40px] flex flex-col lg:flex-row justify-between items-center gap-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <img src="/cta_container.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-4 text-center lg:text-left relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase">Not in these sectors?</h2>
                            <p className="text-background/60 text-lg">We evaluate complex industrial logic across all B2B trades.</p>
                        </div>
                        <button className="bg-shefa-gold text-shefa-navy px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:brightness-110 transition-all relative z-10">Discuss Your Case</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;
