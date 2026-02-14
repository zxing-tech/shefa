import { ArrowRight, BookOpen, Repeat, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Receivable Purchase Financing (RPF)',
      icon: BookOpen,
      desc: 'Sell your book debts at a discount. You retain the relationship, we provide the liquidity. Non-recourse options available.',
      features: ['Immediate Liquidity', 'Credit Risk Mitigation', 'Balance Sheet Optimization']
    },
    {
      title: 'Supply Chain Financing (Payables)',
      icon: Repeat,
      desc: 'Reverse Factoring. We pay your suppliers early, you pay us at maturity. Strengthen your supply chain reliability.',
      features: ['Supplier Loyalty', 'Extended Payment Terms', 'Improved Working Capital']
    },
    {
      title: 'Trade Credit Insurance Broking',
      icon: ShieldCheck,
      desc: 'Protect your P&L against bad debts and customer insolvency. Brokered via top-tier insurers like Coface and Allianz.',
      features: ['Global Coverage', 'Real-time Credit Monitoring', 'Claims Management Support']
    }
  ];

  return (
    <main className="min-h-screen bg-shefa-navy pt-24 transition-all duration-700">
      {/* Hero Section */}
      <section className="py-24 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/approach_handshake.jpg"
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy via-shefa-navy/60 to-transparent" />
        </div>
        <div className="w-[86vw] mx-auto relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-shefa-gold uppercase reveal-up active">
              Our Expertise // Solutions
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white uppercase leading-tight reveal-up active">
              Strategic <br />
              <span className="text-shefa-gold underline decoration-1 underline-offset-[12px]">Financial</span> Engineering.
            </h1>
            <p className="text-xl text-shefa-silver/80 max-w-2xl leading-relaxed reveal-up active">
              We structure complex trade finance solutions that bridge the gap between
              traditional banking limitations and the practical needs of industrial giants.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 lg:py-32 bg-black/20">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 space-y-8 hover:border-shefa-gold/30 hover:shadow-glow-gold transition-all duration-500 group reveal-up active"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-shefa-gold/10 flex items-center justify-center group-hover:bg-shefa-gold/20 transition-colors">
                    <Icon className="w-8 h-8 text-shefa-gold" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-bold text-white uppercase leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-shefa-silver/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-shefa-silver/50">
                        <div className="w-1 h-1 bg-shefa-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="pt-4 flex items-center gap-2 text-shefa-gold group-hover:gap-4 transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Inquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-shefa-navy text-center border-t border-white/5">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl lg:text-4xl italic text-white/90 leading-snug">
              "We don't just provide funding; we engineer the structural resilience required for the global economy."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-12 h-px bg-shefa-gold mb-4" />
              <div className="font-mono text-xs text-shefa-gold uppercase tracking-[0.3em]">Shefa Strategy Board</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
