import { useState } from 'react';
import { FileText, ShieldCheck, Zap, Coins, ArrowRight } from 'lucide-react';

const Borrowers = () => {
  const [invoiceValue, setInvoiceValue] = useState(500000);
  const advanceAmount = invoiceValue * 0.80;

  const steps = [
    {
      title: 'Invoice',
      icon: FileText,
      desc: 'You bill your client as usual with credit terms (30-120 days).',
      time: '00 Hours'
    },
    {
      title: 'Protect',
      icon: ShieldCheck,
      desc: 'Shefa wraps the invoice with domestic or export credit insurance.',
      time: '06 Hours'
    },
    {
      title: 'Fund',
      icon: Zap,
      desc: 'Receive up to 80% of the invoice value in cash immediately.',
      time: '48 Hours'
    },
    {
      title: 'Settle',
      icon: Coins,
      desc: 'Your client pays Shefa; we pay you the remaining balance minus fees.',
      time: 'Maturity'
    }
  ];

  return (
    <main className="min-h-screen bg-shefa-navy pt-24 overflow-hidden transition-all duration-700">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="w-[86vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="font-mono text-xs tracking-[0.3em] text-shefa-gold uppercase reveal-up active">
              Liquidity Engineering // Borrowers
            </span>
            <h1 className="font-heading text-6xl lg:text-7xl font-bold text-white uppercase leading-tight reveal-up active">
              Unlock Your <br />
              <span className="text-shefa-gold">Cash Flow</span> In 48h.
            </h1>
            <p className="text-xl text-shefa-silver/80 max-w-xl leading-relaxed reveal-up active">
              Transform your outstanding invoices into immediate capital.
              No collateral required. Just your verified trade receivables.
            </p>
            <div className="flex gap-4 reveal-up active">
              <button className="btn-gold px-12 py-4 text-[11px] tracking-[0.2em] uppercase">Apply For Funding</button>
            </div>
          </div>

          {/* Funding Estimator */}
          <div className="relative group reveal-up active">
            <div className="absolute -inset-1 bg-gradient-to-r from-shefa-gold/20 to-shefa-cobalt/20 rounded-[40px] blur-xl opacity-50 transition-opacity" />
            <div className="relative bg-[#00152B] border border-white/10 rounded-[32px] p-8 lg:p-12 space-y-10 shadow-2xl">
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider">Funding Estimator</h3>
                <div className="h-px w-full bg-gradient-to-r from-shefa-gold to-transparent opacity-30" />
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-shefa-silver/50">
                    <span>Invoice Value</span>
                    <span className="text-shefa-gold">RM {invoiceValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={invoiceValue}
                    onChange={(e) => setInvoiceValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shefa-gold"
                  />
                </div>

                <div className="p-8 bg-shefa-gold rounded-2xl space-y-2 group/btn relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-shefa-navy/60">Immediate Cash Advance (80%)</span>
                  <div className="relative z-10 text-4xl lg:text-5xl font-black text-shefa-navy tracking-tighter">
                    RM {advanceAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-shefa-silver/30 uppercase leading-relaxed text-center">
                * Disbursement within 48 hours of verification and insurance wrap.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black/20 border-y border-white/5 overflow-hidden">
        <div className="w-[86vw] mx-auto">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white uppercase">The Funding Velocity</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-shefa-gold" />
                <p className="text-shefa-silver/60 uppercase text-[10px] font-bold tracking-[0.4em]">From Invoice To Capital</p>
                <div className="w-12 h-px bg-shefa-gold" />
              </div>
            </div>

            <div className="relative mt-24">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="space-y-8 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-shefa-gold/30 transition-all duration-500 group reveal-up active"
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-shefa-gold/10 flex items-center justify-center group-hover:bg-shefa-gold transition-colors duration-500">
                          <Icon className="w-7 h-7 text-shefa-gold group-hover:text-shefa-navy transition-colors" />
                        </div>
                        <span className="font-mono text-[10px] text-shefa-gold/50 font-bold uppercase tracking-[0.2em]">{step.time}</span>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-heading text-xl font-bold text-white uppercase tracking-widest">{step.title}</h3>
                        <p className="text-sm text-shefa-silver/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white uppercase leading-tight">
                  Why Leading <br /><span className="text-shefa-gold">Industrialists</span> Choose Us.
                </h2>
                <div className="w-24 h-1 bg-shefa-gold" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <div className="text-shefa-gold font-bold uppercase tracking-widest text-[10px]">01 / Velocity</div>
                  <h4 className="text-white font-bold uppercase">48-Hour Funding</h4>
                  <p className="text-xs text-shefa-silver/50 leading-relaxed">Swift verification engine ensures 80% advance reaches your account in 2 business days.</p>
                </div>
                <div className="space-y-3">
                  <div className="text-shefa-gold font-bold uppercase tracking-widest text-[10px]">02 / Non-Recourse</div>
                  <h4 className="text-white font-bold uppercase">Credit Protection</h4>
                  <p className="text-xs text-shefa-silver/50 leading-relaxed">Optional non-recourse structures protect your P&L from client insolvency.</p>
                </div>
                <div className="space-y-3">
                  <div className="text-shefa-gold font-bold uppercase tracking-widest text-[10px]">03 / Flexibility</div>
                  <h4 className="text-white font-bold uppercase">No Fixed Fees</h4>
                  <p className="text-xs text-shefa-silver/50 leading-relaxed">Modular pricing based on the tenure and risk profile of each individual invoice.</p>
                </div>
                <div className="space-y-3">
                  <div className="text-shefa-gold font-bold uppercase tracking-widest text-[10px]">04 / Relationship</div>
                  <h4 className="text-white font-bold uppercase">Confidential Flow</h4>
                  <p className="text-xs text-shefa-silver/50 leading-relaxed">Choose whether your client is notified or if the relationship remains confidential.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 lg:p-16 space-y-12 reveal-up active">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-white uppercase">Ready to scale?</h3>
                <p className="text-shefa-silver/60">Experience the speed of Shefa financing today.</p>
              </div>
              <div className="space-y-4">
                <button className="w-full btn-gold py-5 flex justify-between items-center group">
                  <span>Start My Application</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="w-full btn-gold-outline py-5">Speak To A specialist</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Borrowers;
