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
    <main className="min-h-screen bg-background pt-24 transition-all duration-700">
      {/* Hero Section */}
      <section className="py-24 lg:py-48 relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="/approach_handshake.jpg"
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="w-[86vw] mx-auto relative z-10">
          <div className="max-w-4xl space-y-8">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] reveal-up active">
              Our Expertise // Global Solutions
            </span>
            <h1 className="text-5xl lg:text-8xl font-heading font-extrabold text-foreground uppercase leading-[0.9] tracking-tighter reveal-up active">
              Strategic <br />
              <span className="text-secondary">Financial</span> Engineering.
            </h1>
            <div className="w-24 h-1.5 bg-secondary reveal-up active" />
            <p className="text-xl lg:text-2xl text-foreground/70 max-w-2xl leading-relaxed font-light reveal-up active">
              We structure complex trade finance solutions that bridge the gap between
              traditional banking limitations and the practical needs of industrial giants.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 lg:py-40 bg-card/20">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-card rounded-[40px] p-8 lg:p-14 space-y-10 hover:border-secondary transition-all duration-500 group reveal-up active border border-border/50"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-heading font-black text-foreground uppercase leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-foreground/60 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>
                  <ul className="space-y-4 pt-6 border-t border-border/30">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full shadow-glow-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="pt-6 flex items-center gap-4 text-secondary group-hover:gap-6 transition-all">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Structure Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-background text-center border-t border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="font-heading text-3xl lg:text-5xl italic text-foreground/90 leading-snug font-light">
              "We don't just provide funding; we engineer the structural resilience required for the global economy."
            </h2>
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-1 bg-secondary" />
              <div className="font-black text-[10px] text-secondary uppercase tracking-[0.5em]">Shefa Strategy Board</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
