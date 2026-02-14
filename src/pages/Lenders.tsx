import { useState, useEffect } from 'react';
import { Shield, Lock } from 'lucide-react';

const Lenders = () => {
  const [investment, setInvestment] = useState(100000);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const annualReturn = investment * 0.12;
  const quarterlyReturn = annualReturn / 4;

  const yieldData = [
    { label: 'Fixed Deposit', value: 3.0, color: 'bg-white/10' },
    { label: 'Corporate Bonds', value: 5.5, color: 'bg-white/20' },
    { label: 'SHEFA Note', value: 12.0, color: 'bg-shefa-gold shadow-glow-gold' },
  ];

  return (
    <main className="min-h-screen bg-shefa-navy pt-24 overflow-hidden transition-all duration-700">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="w-[86vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="font-mono text-xs tracking-[0.3em] text-shefa-gold uppercase reveal-up active">
              Investment Infrastructure // Secured Yields
            </span>
            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-white uppercase leading-tight reveal-up active">
              Earn <span className="text-shefa-gold">12.0%</span> <br />
              Target Annual Returns.
            </h1>
            <p className="text-xl text-shefa-silver/80 max-w-xl leading-relaxed reveal-up active">
              Direct access to credit-wrapped trade finance certificates.
              Institutional-grade security with quarterly cash distributions.
            </p>
            <div className="flex gap-4 reveal-up active">
              <button className="btn-gold px-10">Start Investing</button>
              <button className="btn-gold-outline px-10 transition-all">View Prospectus</button>
            </div>
          </div>

          {/* ROI Calculator Card */}
          <div className="relative group reveal-up active">
            <div className="absolute -inset-1 bg-gradient-to-r from-shefa-gold/20 to-shefa-cobalt/20 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#00152B] border border-white/10 rounded-[32px] p-8 lg:p-12 space-y-10 shadow-2xl">
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider">Calculate Potential Returns</h3>
                <div className="h-px w-full bg-gradient-to-r from-shefa-gold to-transparent opacity-30" />
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-shefa-silver/50">
                    <span>Investment Amount</span>
                    <span className="text-shefa-gold">RM {investment.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shefa-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-shefa-silver/40">Annual Return</span>
                    <div className="text-3xl font-black text-shefa-gold">RM {annualReturn.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-shefa-silver/40">Quarterly Payout</span>
                    <div className="text-3xl font-black text-white">RM {quarterlyReturn.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-shefa-silver/30 uppercase leading-relaxed">
                * Based on 12% p.a. target return. Investments are regulated via KLDX.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yield Comparison Section */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white uppercase">Outperforming The Market</h2>
              <p className="text-shefa-silver/60 uppercase text-[10px] font-bold tracking-[0.4em]">Yield Comparison Benchmark</p>
            </div>

            <div className="space-y-10">
              {yieldData.map((item, index) => (
                <div key={item.label} className="space-y-3 reveal-up active" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-white uppercase tracking-widest">{item.label}</span>
                    <span className="text-2xl font-black text-white">{item.value.toFixed(1)}%</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1500 ease-out border-r-2 border-white/20 ${item.color}`}
                      style={{ width: isVisible ? `${(item.value / 12) * 100}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Structure Section */}
      <section className="py-32 relative">
        <div className="w-[86vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square reveal-up active">
            {/* 3D Isometric Stack Visualization */}
            <div className="absolute inset-0 flex flex-col items-center justify-center -space-y-24 scale-75 lg:scale-100">
              {[
                { label: 'AA-Rated Credit Insurance Wrap', color: 'bg-shefa-gold shadow-glow-gold', z: 30, opacity: 1 },
                { label: 'Corporate & Personal Guarantee', color: 'bg-white/20', z: 20, opacity: 0.8 },
                { label: 'Verified Trade Receivables', color: 'bg-shefa-cobalt', z: 10, opacity: 0.6 },
              ].map((layer) => (
                <div
                  key={layer.label}
                  className={`w-full max-w-sm h-32 ${layer.color} border border-white/20 rounded-2xl transform skew-x-[-20deg] rotate-[-5deg] flex items-center justify-center p-8 transition-transform hover:-translate-y-4 duration-500`}
                  style={{ zIndex: layer.z, opacity: layer.opacity }}
                >
                  <div className="skew-x-[20deg] rotate-[5deg] text-center">
                    <span className="font-heading text-sm font-bold text-white uppercase tracking-widest leading-tight">{layer.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white uppercase leading-tight">
                Triple-Layered <br /><span className="text-shefa-gold">Capital</span> Protection.
              </h2>
              <div className="w-24 h-1 bg-shefa-gold" />
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-shefa-gold" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-lg font-bold text-white uppercase">Institutional Custody</h4>
                  <p className="text-sm text-shefa-silver/60">Assets are held in bankruptcy-remote vehicles with regulated custodians.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-shefa-gold" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-lg font-bold text-white uppercase">Credit Wrapped</h4>
                  <p className="text-sm text-shefa-silver/60">Every unit is covered by active credit insurance policies from global providers like Coface.</p>
                </div>
              </div>
            </div>

            <button className="btn-gold px-12 py-5 text-[11px] tracking-[0.2em] uppercase">Review Security Protocol</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black/40 text-center border-t border-white/5">
        <div className="w-[86vw] mx-auto space-y-12">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white uppercase italic max-w-4xl mx-auto">
            Experience the velocity of institutional trade finance.
          </h2>
          <button className="btn-gold px-16 py-6 text-sm tracking-[0.3em] uppercase">Open Investment Account</button>
        </div>
      </section>
    </main>
  );
};

export default Lenders;
