import { ShieldCheck, Lock, Download, Activity, Clock, CircleDollarSign, CheckCircle2 } from 'lucide-react';

const Lenders = () => {
  return (
    <main className="bg-shefa-navy min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full px-6 lg:px-12 py-24 lg:py-32 text-center overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,71,171,0.2)_0%,transparent_70%)]" />
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="300" fill="none" stroke="rgba(0,71,171,1)" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="400" fill="none" stroke="rgba(0,71,171,0.5)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.5em] font-heading text-shefa-cobalt uppercase mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">Investment Opportunities</span>
          <h1 className="heading-xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Defensive Yields.<br />
            <span className="text-shefa-cobalt">Insurance-Backed Assets.</span>
          </h1>
          <p className="body-lg text-shefa-silver mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            Access fixed-income investment notes regulated by SC Malaysia, issued via the KLDX Platform.
          </p>

          <div className="mb-12 animate-in fade-in zoom-in duration-1000 delay-300">
            <span className="text-[10px] tracking-[0.3em] font-heading text-white/40 uppercase block mb-2">Target Return</span>
            <div className="text-7xl lg:text-9xl font-heading text-white tracking-tighter">12.0<span className="text-shefa-cobalt">%</span></div>
            <span className="text-xl font-heading text-shefa-silver tracking-widest uppercase">p.a.</span>
          </div>

          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <button className="btn-primary py-5 px-16 text-lg tracking-[0.2em]">
              View Open Notes
            </button>
            <div className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-widest uppercase text-white/60">Issued via KLDX (SC Registered Platform)</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Offering Data Grid */}
      <section className="pb-24 px-6 lg:px-12 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { label: 'Target Yield', title: 'YIELD', value: 'Up to 12% p.a.', icon: Activity },
              { label: 'Short Duration', title: 'TENURE', value: '12 - 18 Months', icon: Clock },
              { label: 'Asset-Backed Coverage', title: 'SECURITY', value: '≥ 100%', icon: ShieldCheck },
              { label: 'Coupon Distribution', title: 'PAYOUT', value: 'Quarterly', icon: CircleDollarSign }
            ].map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.title} className="bg-shefa-navy p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] font-heading text-shefa-cobalt uppercase block mb-4">{metric.title}</span>
                    <div className="text-2xl font-heading text-white mb-2">{metric.value}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-white/20" />
                    <span className="text-[10px] tracking-widest uppercase text-white/40">{metric.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Mitigation Split */}
      <section className="py-24 px-6 lg:px-12 bg-black/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-heading text-shefa-cobalt uppercase mb-4 block">Institutional-Grade Protection</span>
            <h2 className="heading-lg mb-8">The Sleep Well Factor.</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Credit Insurance Wrap',
                  desc: 'Underlying receivables are insured by AA-rated insurers (Coface/Allianz) against non-payment and insolvency.'
                },
                {
                  title: 'Verified Obligors',
                  desc: 'We only fund invoices due from credit-worthy, insurance-grade multinational and GLC buyers.'
                },
                {
                  title: 'Regulatory Oversight',
                  desc: 'Issuances are managed via KLDX, a Securities Commission Malaysia registered market operator.'
                }
              ].map((point) => (
                <div key={point.title} className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-shefa-cobalt/20 flex items-center justify-center text-shefa-cobalt">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-white mb-2">{point.title}</h4>
                    <p className="body-base text-sm text-shefa-silver leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-shefa-cobalt opacity-10 blur-[120px] rounded-full group-hover:opacity-20 transition-opacity duration-1000" />
            <div className="relative h-[500px] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden">
              {/* Abstract Shield/Lock Icon Visualization */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.05) 40px)', backgroundSize: '100% 40px' }} />
              </div>
              <div className="relative">
                <ShieldCheck className="w-48 h-48 text-shefa-cobalt" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full animate-ping duration-[3000ms]" />
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-shefa-navy border border-white/10 rounded-xl">
                <Lock className="w-4 h-4 text-shefa-cobalt" />
                <span className="text-[10px] tracking-widest uppercase text-white/80">Asset Isolation Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.3em] font-heading text-white/40 uppercase block mb-4">Investment Lifecycle</span>
            <h2 className="heading-lg">Process Architecture</h2>
          </div>

          <div className="space-y-12">
            {[
              { title: 'Selection', desc: 'Shefa identifies high-quality receivables from established MSMEs.' },
              { title: 'Structuring', desc: 'Assets are packaged into an Investment Note (Regulated Instrument).' },
              { title: 'Issuance', desc: 'Investors subscribe to the note via the KLDX platform.' },
              { title: 'Maturity', desc: 'Obligors settle invoices; Principal + Interest is returned to investors.' }
            ].map((step, idx) => (
              <div key={step.title} className="relative flex gap-12 group">
                {idx !== 3 && <div className="absolute left-6 top-16 w-px h-16 bg-white/10" />}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-heading text-shefa-cobalt group-hover:border-shefa-cobalt transition-colors">
                  0{idx + 1}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl text-white mb-2 tracking-widest uppercase">{step.title}</h3>
                  <p className="body-base text-shefa-silver">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Repository */}
      <section className="py-24 px-6 lg:px-12 bg-black/40 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] font-heading text-white/40 uppercase block mb-8">Resource Hub</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Investment Teaser (v4)', type: 'PDF' },
              { name: 'Sample Factsheet', type: 'PDF' },
              { name: 'Risk Disclosure Statement', type: 'PDF' }
            ].map((doc) => (
              <a
                href="#"
                key={doc.name}
                className="p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:bg-white/5 hover:border-shefa-cobalt transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="px-2 py-1 bg-white/10 rounded text-[8px] font-bold text-white/60 tracking-widest">{doc.type}</div>
                  <Download className="w-5 h-5 text-white/20 group-hover:text-shefa-cobalt transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading text-xs text-white tracking-widest uppercase">{doc.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability Footer */}
      <section className="py-24 px-6 lg:px-12 text-center opacity-40">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] leading-relaxed tracking-widest uppercase">
            "This offer is open to Sophisticated Investors, High Net Worth Individuals (HNWIs), and Institutional Investors under Schedules 6 & 7 of the Capital Markets and Services Act 2007."
          </p>
          <div className="mt-12 flex justify-center gap-8 items-center grayscale opacity-80">
            <span className="font-heading text-sm tracking-widest">KLDX</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="font-heading text-sm tracking-widest">SC MALAYSIA</span>
          </div>
        </div>
      </section>

      {/* Simple Footer Copy */}
      <footer className="py-8 opacity-20 text-center">
        <p className="text-[10px] tracking-widest uppercase">Lender Solutions | Shefa Risk Management</p>
      </footer>
    </main>
  );
};

export default Lenders;
