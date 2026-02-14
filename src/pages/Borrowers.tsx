import { ArrowRight, FileText, ShieldCheck, Zap, Handshake, CheckCircle2, Factory, Droplets, ShoppingCart, HardHat, Monitor, Package } from 'lucide-react';

const Borrowers = () => {
  return (
    <main className="bg-shefa-navy min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="heading-xl mb-6">
              Don't Wait 90 Days.<br />
              <span className="text-shefa-cobalt">Get Paid Today.</span>
            </h1>
            <p className="body-lg max-w-xl text-shefa-silver mb-10">
              Convert your outstanding invoices into immediate working capital. Up to 80% cash advance, wrapped by AA-rated credit insurance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="btn-primary w-full sm:w-auto px-12">
                Check Eligibility
              </button>
              <a href="#mechanism" className="text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors flex items-center gap-2">
                See how it works <ArrowRight className="w-3 h-3 rotate-90" />
              </a>
            </div>
          </div>

          <div className="relative h-[400px] hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Abstract "Flow" Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-shefa-cobalt to-transparent opacity-50" />
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-shefa-cobalt rounded-full animate-pulse"
                  style={{
                    left: `${20 * i}%`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: '0 0 20px #0047AB'
                  }}
                />
              ))}
              <div className="absolute inset-0 border border-white/5 rounded-3xl" style={{ transform: 'skewY(-6deg)' }} />
              <div className="absolute inset-0 border border-shefa-cobalt/10 rounded-3xl translate-x-4 -translate-y-4" style={{ transform: 'skewY(-6deg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The Mechanism */}
      <section id="mechanism" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-4">The Mechanism</h2>
            <div className="w-24 h-1 bg-shefa-cobalt mx-auto" />
          </div>

          <div className="max-w-[1200px] mx-auto relative">
            {/* Thin Architectural Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-24" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  step: '01',
                  title: 'INVOICE',
                  icon: FileText,
                  desc: 'You deliver goods or services to your client and issue an invoice (30-120 days).'
                },
                {
                  step: '02',
                  title: 'PROTECT',
                  icon: ShieldCheck,
                  desc: 'Shefa wraps the invoice with Trade Credit Insurance from providers like Coface/Allianz.'
                },
                {
                  step: '03',
                  title: 'FUND',
                  icon: Zap,
                  desc: 'Receive Up to 80% Advance of the invoice value in cash within 48 hours of verification.'
                },
                {
                  step: '04',
                  title: 'SETTLE',
                  icon: Handshake,
                  desc: 'Client pays at maturity. We remit the remaining balance minus a small fee.'
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-shefa-navy border border-white/10 rounded-xl mb-8 flex items-center justify-center group-hover:border-shefa-cobalt transition-colors duration-500">
                      <Icon className="w-8 h-8 text-shefa-silver" />
                    </div>
                    <span className="text-[10px] tracking-[0.4em] font-heading text-shefa-cobalt uppercase mb-2">Step {item.step}</span>
                    <h3 className="font-heading text-xl text-white mb-4">{item.title}</h3>
                    <p className="body-base text-sm text-shefa-silver">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Shefa? */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="heading-lg mb-8">Why Shefa?</h2>
              <p className="body-lg text-shefa-silver mb-12">
                Our liquidity solutions are built for speed and security, bypassing traditional banking hurdles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'NO HARD COLLATERAL', body: 'Stop pledging property. Your invoice and buyer credit are the security.' },
                  { title: 'BALANCE SHEET EFFICIENT', body: 'Improve your cash conversion cycle without adding heavy debt loads.' },
                  { title: 'INSURED SECURITY', body: 'Mitigate non-payment risk. Policy kicks in if your buyer goes insolvent.' },
                  { title: 'FAST APPROVAL', body: 'Bureaucracy-free. We focus on receivable quality, not just your history.' }
                ].map((card) => (
                  <div key={card.title} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="font-heading text-sm text-shefa-cobalt tracking-widest uppercase mb-4">{card.title}</h4>
                    <p className="body-base text-xs text-shefa-silver leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-shefa-cobalt/5 border border-shefa-cobalt/20 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-shefa-cobalt/10 blur-[100px]" />
              <h3 className="font-heading text-lg text-white mb-8 tracking-widest uppercase">Target Industries</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { name: 'Manufacturing', icon: Factory },
                  { name: 'Oil & Gas', icon: Droplets },
                  { name: 'FMCG & Food', icon: ShoppingCart },
                  { name: 'Construction', icon: HardHat },
                  { name: 'IT & Technology', icon: Monitor },
                  { name: 'Commodities', icon: Package }
                ].map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div key={industry.name} className="flex items-center gap-4 group">
                      <div className="p-3 bg-white/5 rounded-lg group-hover:bg-shefa-cobalt/20 transition-colors">
                        <Icon className="w-5 h-5 text-shefa-cobalt" />
                      </div>
                      <span className="text-xs font-medium tracking-widest uppercase text-shefa-silver group-hover:text-white transition-colors">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Tape */}
      <div className="py-6 border-y border-white/5 bg-black/40 overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll hover:pause">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-[10px] tracking-[0.5em] font-heading text-shefa-cobalt uppercase">SERVING MALAYSIA'S CRITICAL SECTORS:</span>
              <span className="text-[10px] tracking-[0.2em] text-white/40">MANUFACTURING | OIL & GAS SERVICES | FMCG & FOOD | CONSTRUCTION SUPPLIES | IT & TECHNOLOGY | COMMODITIES</span>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation Requirements */}
      <section className="py-24 w-full px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-xl text-white mb-12 tracking-[0.2em] uppercase">Ready to apply? Have these ready:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Company Profile & SSM',
              'Past 6 months Bank Statements',
              'Aged Receivables List',
              'Sample Invoices & Contracts'
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/5">
                <CheckCircle2 className="w-5 h-5 text-shefa-cobalt" />
                <span className="text-sm text-shefa-silver tracking-wider uppercase">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="text-center px-6">
          <h2 className="heading-xl mb-12">Fuel Your Growth Engine.</h2>
          <button className="btn-primary py-5 px-16 text-lg tracking-[0.2em]">
            Apply For Funding
          </button>
        </div>
      </section>

      {/* Simple Footer Copy */}
      <footer className="py-8 opacity-20 text-center">
        <p className="text-[10px] tracking-widest uppercase">Institutional Trade Finance | Shefa Risk Management</p>
      </footer>
    </main>
  );
};

export default Borrowers;
