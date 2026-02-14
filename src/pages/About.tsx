const About = () => {
  return (
    <main className="min-h-screen bg-shefa-navy pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-black/20">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-shefa-cobalt uppercase">
              Corporate Intelligence // Overview
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-medium text-white uppercase leading-tight">
              Institutional <br />
              <span className="text-shefa-cobalt underline decoration-1 underline-offset-8">Integrity.</span>
            </h1>
            <p className="text-xl text-shefa-silver/80 max-w-2xl leading-relaxed">
              Shefa Risk Management specializes in credit-wrapped trade finance facilities,
              providing sophisticated investors with secured yields while empowering real
              economy SMEs in Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Wireframe Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="w-[86vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-medium text-white uppercase">The Shefa Paradigm.</h2>
              <div className="w-16 h-1 bg-shefa-cobalt" />
            </div>
            <p className="text-shefa-silver/70 leading-relaxed text-lg">
              We leverage proprietary risk assessment models alongside global credit insurance
              standards to create a "triple-protected" asset class. By converting trade receivables
              into high-yield investment notes, we solve the liquidity paradox for high-growth SMEs.
            </p>
          </div>

          {/* Abstract Wireframe Box */}
          <div className="aspect-square border border-white/10 rounded-3xl relative overflow-hidden bg-white/5 backdrop-blur-sm group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-shefa-cobalt/40 rotate-45 transform group-hover:rotate-90 transition-transform duration-1000" />
              <div className="absolute w-60 h-60 border border-white/10 -rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
              <div className="absolute w-80 h-80 border border-white/5 rotate-12 transition-transform duration-1000 group-hover:rotate-45" />
            </div>
            <div className="absolute bottom-10 left-10 space-y-2">
              <div className="text-[10px] font-mono text-shefa-cobalt uppercase tracking-[0.4em]">Proprietary Model</div>
              <div className="text-white font-heading text-xl uppercase tracking-widest">SRM-Risk-S1</div>
            </div>
          </div>
        </div>

        {/* Background contour lines */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100" fill="none" stroke="#fff" strokeWidth="1" />
            <path d="M0,150 C150,100 350,200 500,150 C650,100 850,200 1000,150" fill="none" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* Metric Grid Extension */}
      <section className="py-20 lg:py-32 bg-black/10 border-t border-white/5">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Asset Under Admin', value: 'USD 300M+' },
              { label: 'Insured Coverage', value: '100%' },
              { label: 'Default Rate', value: '0%' },
              { label: 'Avg Duration', value: '14 Months' },
            ].map((stat) => (
              <div key={stat.label} className="p-8 border-l border-white/10 space-y-2">
                <div className="text-3xl font-bold text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-shefa-cobalt">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
