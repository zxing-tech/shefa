import { useState } from 'react';
import { ArrowRight, Zap, BarChart3, Clock, FastForward, CheckCircle2 } from 'lucide-react';

const Borrowers = () => {
  const [invoiceAmount, setInvoiceAmount] = useState(500000);
  const eligibleAdvance = invoiceAmount * 0.80;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden py-24 lg:py-40 border-b border-border">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="/borrower_hero.jpg"
            alt="Business Operations"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto text-center space-y-8">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Solutions for Business</span>
            <h1 className="text-5xl lg:text-9xl font-heading font-extrabold uppercase tracking-tight leading-[0.9]">
              LIQUIDITY <br /><span className="text-secondary">ACCELERATED.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-foreground/70 max-w-4xl mx-auto font-light leading-relaxed">
              Stop acting as a bank for your customers. We bridge the cash flow gap
              so you can focus on scale, not collections.
            </p>
          </div>
        </div>
      </section>

      {/* Section A: The Pain Point */}
      <section className="py-24 lg:py-40 bg-card/30">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-4 text-left">
                <h2 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase leading-tight">
                  Stop Acting as a <br /><span className="text-secondary">Bank.</span>
                </h2>
                <div className="w-24 h-1.5 bg-secondary" />
              </div>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Most businesses in Malaysia are forced to wait 90 days for payment.
                This shouldn't be your burden. We convert your receivables into immediate momentum.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl">
                  <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center text-red-500 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Standard Industry Terms</div>
                    <div className="text-xl font-bold">90+ Days Wait Period</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-secondary text-secondary-foreground rounded-2xl shadow-glow-gold">
                  <div className="w-12 h-12 bg-black/10 flex items-center justify-center rounded-lg">
                    <FastForward size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Shefa Terms</div>
                    <div className="text-xl font-black italic uppercase">48 Hours Liquidity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <img src="/coverage_factory.jpg" className="w-full h-full object-cover" alt="Industrial Manufacturing" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-3xl">
                <div className="flex items-center gap-4 text-secondary mb-4">
                  <CheckCircle2 size={32} />
                  <span className="text-2xl font-black uppercase tracking-tight">Verified Trade Flow</span>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">Our structured financing models are built on real-world industrial assets, providing safer liquidity for all participants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Interactive Calculator */}
      <section className="py-24 lg:py-40">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-secondary font-black uppercase tracking-widest text-xs">Funding Estimator</span>
              <h2 className="text-4xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight">HOW MUCH <br />CAN YOU UNLOCK?</h2>
            </div>

            <div className="bg-card border border-border rounded-[40px] p-8 lg:p-16 shadow-3xl space-y-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Zap size={200} />
              </div>

              <div className="space-y-10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <label className="text-sm font-black uppercase tracking-widest opacity-40">Total Invoice Value</label>
                  <div className="text-4xl lg:text-7xl font-black tracking-tighter text-foreground flex items-baseline">
                    <span className="text-base font-bold opacity-30 mr-3 uppercase">RM</span>
                    {invoiceAmount.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  className="w-full h-4 bg-foreground/10 rounded-full appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                  <span>RM 50K</span>
                  <span>RM 5M</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16 border-t border-border relative z-10">
                <div className="space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest opacity-40">Potential Liquidity Injection</span>
                  <div className="text-4xl lg:text-6xl font-black text-secondary tracking-tighter">
                    RM {eligibleAdvance.toLocaleString()}
                  </div>
                </div>
                <button className="w-full bg-secondary text-secondary-foreground py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all">Check Eligibility</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: The Solutions */}
      <section className="py-24 lg:py-40 bg-card/20 border-t border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* RPF Card */}
            <div className="group p-10 lg:p-16 bg-card border border-border rounded-[48px] shadow-2xl hover:border-secondary transition-all">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:scale-110 transition-transform">
                <Zap size={40} />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-heading font-extrabold uppercase tracking-tight">Receivable Purchase <br />Financing (RPF)</h3>
                <p className="text-foreground/60 leading-relaxed text-lg">Convert invoices to cash instantly. You deliver goods; we advance up to 80%. We wait for payment; you focus on global growth.</p>
              </div>
              <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Section A // Direct</span>
                <ArrowRight className="text-foreground/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
              </div>
            </div>

            {/* SCF Card */}
            <div className="group p-10 lg:p-16 bg-card border border-border rounded-[48px] shadow-2xl hover:border-secondary transition-all">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:scale-110 transition-transform">
                <BarChart3 size={40} />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-heading font-extrabold uppercase tracking-tight">Supply Chain <br />Financing (SCF)</h3>
                <p className="text-foreground/60 leading-relaxed text-lg">Strengthen your ecosystem. We pay your suppliers early on your behalf; you settle with us at maturity. Optimized payables.</p>
              </div>
              <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Section B // Ecosystem</span>
                <ArrowRight className="text-foreground/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Borrowers;
