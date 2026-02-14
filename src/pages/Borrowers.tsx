import { ArrowRight, Zap, CheckCircle2, Clock, Landmark, Factory, Fuel, ShoppingCart, HardHat, Monitor } from 'lucide-react';

const Borrowers = () => {
  const timeline = [
    { time: '0 Hours', label: 'Invoice Issued', desc: 'SME issues invoice to customer.', icon: Clock },
    { time: '24 Hours', label: 'Security Wrap', desc: 'Shefa verification & insurance placement.', icon: CheckCircle2 },
    { time: '48 Hours', label: 'Disbursement', desc: '80% Cash Advance disbursed.', icon: Zap, highlight: true },
    { time: 'Maturity', label: 'Settlement', desc: 'Customer pays; balance settled.', icon: Landmark },
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Oil & Gas', icon: Fuel },
    { name: 'FMCG', icon: ShoppingCart },
    { name: 'Construction', icon: HardHat },
    { name: 'Technology', icon: Monitor },
  ];

  return (
    <main className="min-h-screen bg-shefa-navy pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl space-y-8">
            <span className="font-mono text-xs tracking-[0.3em] text-shefa-cobalt uppercase animate-in fade-in slide-in-from-bottom duration-700">
              Liquidity Optimized
            </span>
            <h1 className="font-heading text-5xl lg:text-8xl font-medium text-white uppercase leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
              The Speed <br />
              <span className="text-shefa-cobalt underline decoration-1 underline-offset-[12px]">Engine.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-shefa-silver/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Turn your unpaid invoices into immediate working capital. No debt, no equity dilution, just cash flow velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Section A: The Funding Timeline */}
      <section className="py-20 lg:py-32 bg-black/10 border-y border-white/5 relative">
        <div className="w-[86vw] mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-medium text-white uppercase">Funding Velocity</h2>
              <p className="text-shefa-silver/60 font-mono text-sm uppercase tracking-widest">Efficiency Benchmark: 48 Hours</p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-shefa-cobalt to-transparent mx-12 mb-4" />
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-[48px] left-0 w-full h-px bg-white/10 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {timeline.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.time} className={`space-y-6 group ${item.highlight ? 'lg:-translate-y-4' : ''}`}>
                    <div className="flex flex-col space-y-4">
                      <div className="font-mono text-2xl text-white font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                        {item.time}
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${item.highlight
                        ? 'bg-shefa-cobalt border-shefa-cobalt shadow-[0_0_20px_#0047AB]'
                        : 'bg-shefa-navy border-white/10 group-hover:border-shefa-cobalt'
                        }`}>
                        <Icon className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-shefa-silver group-hover:text-shefa-cobalt'}`} />
                      </div>
                    </div>

                    <div className={`p-6 rounded-2xl border transition-all duration-300 ${item.highlight
                      ? 'bg-white/10 border-shefa-cobalt/30 backdrop-blur-xl'
                      : 'bg-white/5 border-white/5'
                      }`}>
                      <h3 className={`font-heading text-lg font-medium mb-2 ${item.highlight ? 'text-shefa-cobalt' : 'text-white'}`}>
                        {item.label}
                      </h3>
                      <p className="text-sm text-shefa-silver/70 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.highlight && (
                        <div className="mt-4 inline-block px-3 py-1 bg-shefa-cobalt/20 text-shefa-cobalt text-[10px] font-bold uppercase tracking-widest rounded">
                          Critical Milestone
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Background Architectural Grid */}
        <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>
      </section>

      {/* Section B: Targeted Industries */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="w-[86vw] mx-auto flex flex-col items-center">
          <div className="text-center space-y-4 mb-20 px-6">
            <span className="font-mono text-xs text-shefa-cobalt uppercase tracking-[0.3em]">Sector Focus</span>
            <h2 className="font-heading text-4xl font-medium text-white uppercase tracking-tight">Industrial Integration</h2>
          </div>

          {/* Industry Ticker */}
          <div className="w-screen flex overflow-hidden group">
            <div className="flex animate-scroll whitespace-nowrap py-10">
              {[...industries, ...industries, ...industries].map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div key={i} className="flex items-center gap-6 mx-12 text-shefa-silver/30 hover:text-shefa-cobalt transition-colors duration-500 cursor-default">
                    <Icon className="w-12 h-12" />
                    <span className="font-heading text-5xl lg:text-7xl font-bold uppercase tracking-tighter">
                      {industry.name}
                    </span>
                    <span className="text-4xl mx-8 opacity-20">/</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black/40 border-t border-white/5">
        <div className="w-[86vw] mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-medium text-white uppercase">
              Ready to <span className="text-shefa-cobalt">Unlock</span> Your Invoices?
            </h2>
            <div className="flex justify-center">
              <button className="btn-primary group px-12 py-5 text-lg">
                Submit Funding Application
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-shefa-silver/50 text-xs uppercase tracking-[0.5em]">
              Decisioning within 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Borrowers;
