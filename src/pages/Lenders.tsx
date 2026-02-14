import { ArrowRight, BarChart3, PieChart, ShieldCheck, Clock, CircleDollarSign, Fingerprint } from 'lucide-react';

const Lenders = () => {
  const yieldData = [
    { label: 'Fixed Deposits', value: 3.0, color: 'bg-shefa-silver/30' },
    { label: 'EPF / Bonds', value: 5.5, color: 'bg-shefa-silver/50' },
    { label: 'SHEFA Note', value: 12.0, color: 'bg-shefa-cobalt animate-pulse' },
  ];

  const specs = [
    { label: 'Tenure', value: '12-18 Months', sub: 'Short Duration', icon: Clock },
    { label: 'Payout', value: 'Quarterly', sub: 'Cash Flow', icon: CircleDollarSign },
    { label: 'Min Ticket', value: 'RM 50,000', sub: 'Sophisticated Investors', icon: Fingerprint },
    { label: 'Platform', value: 'KLDX', sub: 'SC Registered Operator', icon: ShieldCheck },
  ];

  return (
    <main className="min-h-screen bg-shefa-navy pt-24">
      {/* Hero / Terminal Header */}
      <section className="py-20 border-b border-white/5 bg-black/20">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-shefa-cobalt uppercase">
              Financial Terminal // Access
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-medium text-white uppercase leading-none">
              Invest with an <br />
              <span className="text-shefa-cobalt">Insurance Shield.</span>
            </h1>
            <p className="text-xl text-shefa-silver/80 max-w-2xl">
              Access fixed-income investment notes regulated by SC Malaysia,
              issued via the KLDX Platform and secured by trade receivables.
            </p>
          </div>
        </div>
      </section>

      {/* Section A: The Yield Chart */}
      <section className="py-20 lg:py-32">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-shefa-cobalt uppercase tracking-widest flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> Market Comparison
                </span>
                <h2 className="font-heading text-4xl font-medium text-white uppercase">
                  Superior <br />
                  <span className="text-shefa-cobalt">Risk-Adjusted</span> Returns.
                </h2>
              </div>
              <p className="text-shefa-silver/70 leading-relaxed text-lg">
                Shefa notes deliver significantly higher yields compared to traditional fixed income
                instruments without compromising on security protocols.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-2xl relative overflow-hidden group">
              <div className="space-y-12 relative z-10">
                {yieldData.map((item) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-medium text-white uppercase tracking-wider">{item.label}</span>
                      <span className="text-2xl font-bold text-white">{item.value.toFixed(1)}%</span>
                    </div>
                    <div className="h-6 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${item.color}`}
                        style={{ width: `${(item.value / 12) * 100}%` }}
                      >
                        {item.label === 'SHEFA Note' && (
                          <div className="absolute top-[-40px] right-0 bg-shefa-cobalt text-white text-[10px] py-1 px-3 rounded uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                            Paid Quarterly
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Decorative wireframe lines */}
              <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: The Security Stack */}
      <section className="py-20 lg:py-32 bg-black/20 border-y border-white/5">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              {/* SVG Donut Chart */}
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Segment 3: Blue (Verified Trade Receivables) */}
                  <circle
                    cx="50" cy="50" r="40"
                    fill="transparent"
                    stroke="#0047AB"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="75.36" // 70%
                  />
                  {/* Segment 2: Gold (Credit Insurance Wrap) */}
                  <circle
                    cx="50" cy="50" r="40"
                    fill="transparent"
                    stroke="#FCC008"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="200.96" // 20%
                    className="transform origin-center rotate-[252deg]"
                  />
                  {/* Segment 1: White (Recourse to Issuer) */}
                  <circle
                    cx="50" cy="50" r="40"
                    fill="transparent"
                    stroke="#FFFFFF"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="226.08" // 10%
                    className="transform origin-center rotate-[324deg]"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-white tracking-tighter">≥ 100%</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-shefa-silver">Asset-Backed</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-shefa-cobalt uppercase tracking-widest flex items-center gap-2">
                  <PieChart className="w-4 h-4" /> Capital Preservation
                </span>
                <h2 className="font-heading text-4xl font-medium text-white uppercase leading-none">
                  The Security <br />
                  <span className="text-shefa-gold">Stack.</span>
                </h2>
                <p className="text-shefa-silver/70 pt-4 leading-relaxed">
                  Your capital is secured by underlying assets and wrapped by top-tier insurers
                  like Coface and Allianz. This layered shielding ensures institutional-grade
                  risk mitigation.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { color: 'bg-shefa-cobalt', label: 'Verified Trade Receivables', sub: 'Primary Collateral' },
                  { color: 'bg-shefa-gold', label: 'Credit Insurance Wrap', sub: 'AA-Rated Coverage' },
                  { color: 'bg-white', label: 'Recourse to Issuer', sub: 'Corporate Guarantee' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="text-[10px] text-shefa-silver/60 uppercase tracking-widest">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: The Deal Specs */}
      <section className="py-20 lg:py-32">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec) => {
              const Icon = spec.icon;
              return (
                <div key={spec.label} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-6 transition-all hover:bg-white/10 hover:border-shefa-cobalt/40 group">
                  <div className="w-10 h-10 rounded-lg bg-shefa-cobalt/20 flex items-center justify-center group-hover:bg-shefa-cobalt/30 transition-colors">
                    <Icon className="w-5 h-5 text-shefa-cobalt" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-shefa-silver/60 font-mono">{spec.label}</div>
                    <div className="text-2xl font-bold text-white tracking-tight">{spec.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-shefa-cobalt">{spec.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <button className="btn-primary group">
              Register as Investor
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lenders;
