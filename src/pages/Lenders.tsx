import { Shield, Lock, Info, CheckCircle2 } from 'lucide-react';

const Lenders = () => {
  const yieldData = [
    { label: 'Fixed Deposit', value: 3, color: 'bg-foreground/20' },
    { label: 'Corporate Bonds', value: 5, color: 'bg-shefa-cobalt/40' },
    { label: 'Shefa Investment Note', value: 12, color: 'bg-shefa-gold' },
  ];

  const features = [
    { label: 'Instrument', value: 'Investment Note (Shariah Compliant Structure)' },
    { label: 'Tenure', value: '12 - 18 Months' },
    { label: 'Return', value: '12.0% p.a. (Payable Quarterly)', highlight: true },
    { label: 'Security', value: 'Receivables + Corporate Guarantee + Insurance Wrap' },
    { label: 'Platform', value: 'Issued via KLDX (SC Registered Market Operator)' },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-shefa-navy text-white py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-shefa-gold rounded-full" />
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <span className="text-shefa-gold font-bold uppercase tracking-[0.3em] text-xs">Institutional Yield // Fixed Income</span>
              <h1 className="text-6xl lg:text-[7rem] font-heading font-extrabold uppercase leading-[0.9] tracking-tighter">
                Earn 12% p.a.<br />
                <span className="text-shefa-gold">Fixed Returns.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Consistent quarterly payouts backed by institutional-grade trade credit insurance and corporate guarantees.
              </p>
              <div className="flex items-center gap-4 py-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Shield size={16} className="text-shefa-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Shariah Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle2 size={16} className="text-shefa-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">SC Regulated</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center gap-12">
              <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-shefa-gold/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-full h-full bg-card border-4 border-white/20 rounded-3xl flex items-center justify-center shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700">
                  <Lock size={120} className="text-shefa-gold" />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-shefa-navy border border-shefa-gold text-shefa-gold rounded-lg font-black text-sm uppercase tracking-widest text-white">Secured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yield Comparison Chart */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground">Yield Comparison</h2>
              <p className="text-foreground/60 text-lg">Benchmark returns against traditional low-risk instruments.</p>
            </div>

            <div className="space-y-12">
              {yieldData.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-foreground uppercase text-xs tracking-widest">{item.label}</span>
                    <span className="text-2xl font-black text-foreground">{item.value}% <span className="text-[10px] font-bold opacity-40 uppercase">p.a.</span></span>
                  </div>
                  <div className="h-4 w-full bg-foreground/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${(item.value / 12) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-extrabold uppercase text-foreground">Instrument Details</h2>
              <div className="w-24 h-1 bg-shefa-gold" />
            </div>

            <div className="border border-border rounded-2xl overflow-hidden shadow-xl bg-background">
              <table className="w-full text-left">
                <tbody className="divide-y divide-border text-foreground">
                  {features.map((feature, i) => (
                    <tr key={i} className="group hover:bg-foreground/5 transition-colors">
                      <td className="p-8 w-1/3 bg-background font-bold uppercase tracking-widest text-[11px] text-foreground/60">{feature.label}</td>
                      <td className={`p-8 text-lg font-bold ${feature.highlight ? 'text-shefa-gold' : 'text-foreground'}`}>
                        {feature.value}
                        {feature.highlight && <Info size={16} className="inline ml-2 opacity-50" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-background">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-shefa-navy rounded-[40px] p-12 lg:p-24 text-center space-y-12 shadow-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-shefa-gold" />
            <h2 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase leading-tight text-white">Ready to Invest In <br /><span className="text-shefa-gold">Malaysian Trade?</span></h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto italic">"Securing your returns while powering the industrial backbone of the economy."</p>
            <button className="bg-shefa-gold text-shefa-navy px-16 py-6 rounded font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:brightness-110 active:scale-95 transition-all">Go to KLDX Platform</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lenders;
