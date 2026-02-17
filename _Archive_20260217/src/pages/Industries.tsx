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
        <main className="pt-20 bg-background transition-colors duration-500">
            {/* Hero Section */}
            <section className="bg-background text-foreground py-24 lg:py-48 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="/coverage_agriculture.jpg"
                        alt="Industries"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <div className="w-full px-6 lg:px-12 relative z-10">
                    <div className="max-w-[1400px] mx-auto text-center space-y-10">
                        <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Sector Expertise // Trade Logic</span>
                        <h1 className="text-6xl lg:text-[9rem] font-heading font-extrabold uppercase leading-[0.85] tracking-tighter">
                            THE SECTOR <br /><span className="text-secondary">INTEGRATION.</span>
                        </h1>
                        <p className="text-xl lg:text-3xl text-foreground/70 max-w-4xl mx-auto font-light leading-relaxed">
                            We bridge the capital gap for Malaysia's industrial backbone across six core sectors
                            critical to national infrastructure and food security.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 lg:py-40 border-t border-border">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <div
                                    key={industry.name}
                                    className="group bg-card border border-border rounded-[48px] hover:border-secondary transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[550px] overflow-hidden"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={industry.image}
                                            alt={industry.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-background/20" />
                                        <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-md flex items-center justify-center text-secondary border border-white/10 shadow-xl">
                                            <Icon size={32} />
                                        </div>
                                    </div>

                                    <div className="p-10 lg:p-14 flex-grow flex flex-col justify-between space-y-8">
                                        <div className="space-y-6">
                                            <h3 className="text-3xl font-heading font-black uppercase text-foreground leading-tight tracking-tight">
                                                {industry.name}
                                            </h3>
                                            <p className="text-foreground/60 leading-relaxed font-light">
                                                {industry.desc}
                                            </p>
                                        </div>

                                        <div className="pt-8 border-t border-border mt-auto flex justify-between items-center">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{industry.highlight}</span>
                                            <ArrowRight size={20} className="text-foreground/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Shortcut */}
            <section className="pb-40">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto glass-card border-white/5 rounded-[60px] p-12 lg:p-24 flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <img src="/cta_container.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Trade Logistics" />
                        </div>
                        <div className="space-y-6 text-center lg:text-left relative z-10 max-w-2xl">
                            <h2 className="text-4xl lg:text-7xl font-heading font-black uppercase tracking-tight leading-none">Not in these <br /><span className="text-secondary">sectors?</span></h2>
                            <p className="text-foreground/60 text-xl font-light">We evaluate complex industrial logic across all B2B trades. Discuss your case with our risk committee.</p>
                        </div>
                        <button className="bg-secondary text-secondary-foreground px-16 py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-3xl hover:brightness-110 active:scale-95 transition-all relative z-10 whitespace-nowrap">DISCUSS YOUR CASE</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;
