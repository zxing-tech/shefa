import { Shield, Lock, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

const Lenders = () => {
  const yieldData = [
    { label: 'Fixed Deposit', value: 3.0, color: 'bg-foreground/20' },
    { label: 'EPF / Corporate Bonds', value: 5.5, color: 'bg-secondary/40' },
    { label: 'Shefa Investment Note', value: 12.0, color: 'bg-secondary', highlight: true },
  ];

  const features = [
    { label: 'Target Return', value: '12.0% p.a. (Fixed, Paid Quarterly)', highlight: true },
    { label: 'Tenure', value: '12 - 18 Months (Short Duration)' },
    { label: 'Minimum Ticket', value: 'RM 25,000 (Individual / Institutional)' },
    { label: 'Underlying Asset', value: 'Trade Receivables (Invoice Financing)' },
    { label: 'Platform', value: 'Issued via KLDX (SC Registered Market Operator)' },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden flex items-center min-h-[80vh]">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-secondary rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Institutional Yield // Fixed Income</span>
              <h1 className="text-6xl lg:text-[8rem] font-heading font-extrabold uppercase leading-[0.85] tracking-tighter">
                EARN 12% P.A.<br />
                <span className="text-secondary underline decoration-2 underline-offset-8">FIXED RETURNS.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 max-w-2xl leading-relaxed font-light">
                Consistent quarterly payouts backed by institutional-grade trade credit insurance and corporate guarantees.
                Short-duration notes with verified industrial collateral.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-xl">
                  <Shield size={20} className="text-secondary" />
                  <span className="text-xs font-black uppercase tracking-widest">Shariah Compliant</span>
                </div>
                <div className="flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-xl">
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span className="text-xs font-black uppercase tracking-widest">SC Regulated</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px]">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="relative w-full h-full glass-card rounded-[64px] flex flex-col items-center justify-center border-white/10 shadow-3xl transform hover:rotate-2 transition-transform duration-1000">
                  <Lock size={120} className="text-secondary mb-8" />
                  <div className="text-center px-10">
                    <div className="text-5xl font-black tracking-tighter mb-2">GOLD GRADE</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Security Structure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yield Comparison Bar Chart */}
      <section className="py-24 lg:py-40 bg-card/30 border-y border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight">Yield Benchmark</h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto" />
              <p className="text-foreground/60 text-lg lg:text-xl font-light">Comparing fixed returns against traditional low-risk instruments in Malaysia.</p>
            </div>

            <div className="space-y-16">
              {yieldData.map((item, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="font-black text-foreground uppercase text-sm tracking-[0.2em]">{item.label}</span>
                    <span className={`text-3xl lg:text-5xl font-black ${item.highlight ? 'text-secondary' : 'text-foreground'}`}>
                      {item.value.toFixed(1)}% <span className="text-xs font-bold opacity-30 uppercase tracking-widest">p.a.</span>
                    </span>
                  </div>
                  <div className="h-6 w-full bg-foreground/5 rounded-full overflow-hidden border border-border">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000 ease-out shadow-glow-gold rounded-full`}
                      style={{ width: `${(item.value / 12) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Stack Pyramid */}
      <section className="py-24 lg:py-40">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-center">
              <div className="relative w-full max-w-lg space-y-4">
                {/* Top: Gold Insurance */}
                <div className="w-1/3 mx-auto bg-secondary text-secondary-foreground p-8 rounded-t-[40px] text-center shadow-glow-gold relative z-30">
                  <Shield className="mx-auto mb-3" size={32} />
                  <div className="text-xl font-black uppercase tracking-tight leading-none">Insurance <br /> Wrap</div>
                  <div className="text-[8px] font-bold uppercase mt-2 opacity-60">AA-Rated Guarantee</div>
                </div>
                {/* Middle: Corporate Recourse */}
                <div className="w-2/3 mx-auto bg-card border border-border p-8 text-center shadow-xl relative z-20">
                  <Lock className="mx-auto mb-3 opacity-40" size={32} />
                  <div className="text-xl font-black uppercase tracking-tight">Corporate Guarantee</div>
                  <div className="text-[8px] font-bold uppercase mt-2 opacity-40">Issuer Recourse</div>
                </div>
                {/* Base: The Invoice */}
                <div className="w-full bg-card border border-border p-10 rounded-b-[40px] text-center shadow-lg relative z-10">
                  <TrendingUp className="mx-auto mb-3 opacity-20" size={32} />
                  <div className="text-2xl font-black uppercase tracking-tight">Verified Trade Receivable</div>
                  <div className="text-[10px] font-bold uppercase mt-2 opacity-30">Underlying Blue-Chip Asset</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-6">
                <span className="text-secondary font-black uppercase tracking-widest text-xs">The Sleep Well Quotient</span>
                <h2 className="text-4xl lg:text-7xl font-heading font-extrabold uppercase leading-tight">THE SECURITY <br />STACK.</h2>
                <div className="w-32 h-2 bg-secondary" />
              </div>
              <p className="text-xl text-foreground/70 leading-relaxed font-light">
                Unlike unsecured P2P lending, our notes are backed by a triple-layer protection structure.
              </p>
              <div className="p-8 bg-secondary/10 border-l-4 border-secondary rounded-r-2xl">
                <p className="text-lg font-bold italic text-foreground leading-relaxed">
                  "Your investment is backed by trade credit insurance policies from AA-rated global leaders like Coface and Allianz, protecting capital against buyer insolvency."
                </p>
              </div>
              <div className="flex items-start gap-4 text-foreground/50">
                <AlertTriangle size={24} className="flex-shrink-0 mt-1" />
                <p className="text-xs uppercase tracking-[0.1em] font-bold leading-relaxed">Trade-backed notes bridge the gap between volatile equity markets and low-yield fixed deposits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instrument Data Grid */}
      <section className="py-24 lg:py-40 bg-background border-t border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-black uppercase text-foreground">Instrument Specifications</h2>
              <div className="w-16 h-1 bg-secondary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="p-10 glass-card rounded-3xl border border-border hover:border-secondary transition-all">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-4">{feature.label}</div>
                  <div className={`text-2xl font-black ${feature.highlight ? 'text-secondary' : 'text-foreground'}`}>
                    {feature.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-background border-t border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto glass-card rounded-[60px] p-12 lg:p-24 text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 opacity-10">
              <img src="/cta_container.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="International Trade" />
            </div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl lg:text-7xl font-heading font-extrabold uppercase leading-tight">Ready to Invest In <br /><span className="text-secondary">Malaysian Trade?</span></h2>
              <p className="text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto italic font-light">"Securing your returns while powering the industrial backbone of the economy."</p>
              <button
                onClick={() => window.open('https://kldx.com.my', '_blank')}
                className="bg-secondary text-secondary-foreground px-16 py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-[12px] shadow-3xl hover:brightness-110 active:scale-95 transition-all"
              >
                ACCESS VIA KLDX PLATFORM
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lenders;
