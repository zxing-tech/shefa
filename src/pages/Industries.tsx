import { Factory, Fuel, ShoppingCart, HardHat, Monitor, ArrowRight } from 'lucide-react';

const Industries = () => {
    const industries = [
        {
            name: 'Oil & Gas Services',
            icon: Fuel,
            desc: 'Capital intensive projects requiring bridge financing for offshore and downstream supply chains.',
            color: '#0047AB'
        },
        {
            name: 'Manufacturing',
            icon: Factory,
            desc: 'Raw material procurement funding for diverse production cycles and inventory management.',
            color: '#FCC008'
        },
        {
            name: 'FMCG & Food',
            icon: ShoppingCart,
            desc: 'High volume, short cycle receivable management for rapid inventory turnover and logistics.',
            color: '#FFFFFF'
        },
        {
            name: 'Construction',
            icon: HardHat,
            desc: 'Project progress claim financing to maintain operational momentum across complex timelines.',
            color: '#0047AB'
        },
        {
            name: 'Technology',
            icon: Monitor,
            desc: 'Hardware procurement and contract financing for fast-scaling digital infrastructure projects.',
            color: '#FCC008'
        }
    ];

    return (
        <main className="min-h-screen bg-shefa-navy pt-24 overflow-hidden transition-all duration-700">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 relative">
                <div className="w-[86vw] mx-auto">
                    <div className="max-w-4xl space-y-6">
                        <span className="font-mono text-xs tracking-[0.3em] text-shefa-gold uppercase reveal-up active">
                            Sector Specialization // Expertise
                        </span>
                        <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white uppercase leading-tight reveal-up active">
                            Deep <br />
                            <span className="text-shefa-gold underline decoration-1 underline-offset-[12px]">Industry</span> Integration.
                        </h1>
                        <p className="text-xl text-shefa-silver/80 max-w-2xl leading-relaxed reveal-up active">
                            We understand the nuances of the real economy. Our solutions are custom-built
                            for the specific capital cycles of Southeast Asia's critical sectors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Masonry Grid Simulation */}
            <section className="py-12 pb-32">
                <div className="w-[86vw] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            return (
                                <div
                                    key={industry.name}
                                    className={`relative h-[400px] rounded-3xl overflow-hidden group border border-white/5 reveal-up active ${index === 0 ? 'lg:col-span-2' : ''
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Background Mock Overlay (Simulating Cinematic Photography) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy via-shefa-navy/40 to-transparent z-10" />
                                    <div className={`absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[${industry.color}]`} />

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 z-20 p-8 lg:p-12 flex flex-col justify-end">
                                        <div className="space-y-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-shefa-gold group-hover:border-shefa-gold transition-all duration-500">
                                                <Icon className="w-6 h-6 text-white group-hover:text-shefa-navy transition-colors" />
                                            </div>
                                            <h3 className="font-heading text-3xl font-bold text-white uppercase tracking-tight">
                                                {industry.name}
                                            </h3>
                                            <p className="text-sm text-shefa-silver/0 group-hover:text-shefa-silver/80 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-sm line-clamp-3">
                                                {industry.desc}
                                            </p>
                                            <button className="flex items-center gap-2 text-shefa-gold pt-2 group-hover:gap-4 transition-all uppercase text-[10px] font-bold tracking-widest">
                                                Learn More <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Modern Wireframe Grid Border */}
                                    <div className="absolute inset-0 border border-white/10 group-hover:border-shefa-gold/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Global Impact Strips */}
            <section className="py-24 border-t border-white/5 bg-black/40">
                <div className="w-full">
                    <div className="flex animate-scroll whitespace-nowrap">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-12 px-6 items-center">
                                <span className="font-heading text-6xl lg:text-8xl font-black text-white/5 uppercase select-none">Global Logistics</span>
                                <span className="font-heading text-6xl lg:text-8xl font-black text-shefa-gold/10 uppercase select-none tracking-widest">Bridging The Gap</span>
                                <span className="font-heading text-6xl lg:text-8xl font-black text-white/5 uppercase select-none">Industrial Reality</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;
