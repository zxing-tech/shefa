import { ArrowRight, Shield, FileText, Banknote, Zap, Globe, Lock, CheckCircle } from 'lucide-react';

const Borrowers = () => {
  const benefits = [
    {
      icon: Lock,
      title: 'No Hard Collateral',
      description: 'Forget pledging property or fixed assets. We lend against the strength of your receivables and insurance policy.',
    },
    {
      icon: Globe,
      title: 'Global Protection',
      description: 'Whether you sell to Penang or Paris, obtain coverage against buyer insolvency and political risks.',
    },
    {
      icon: Zap,
      title: 'Fast Approval',
      description: 'Get a policy indication in under 48 hours. Speed matters when opportunity knocks.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Application',
      description: 'You share your sales turnover, top buyers, and historical data. We analyze the health of your ledger.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Protection',
      description: 'We structure a policy that covers your domestic and export sales. Each buyer gets a credit limit.',
      icon: Shield,
    },
    {
      step: '03',
      title: 'Payout',
      description: 'If a customer goes bust or ghosts you, the insurance pays up to 90% of the invoice value.',
      icon: Banknote,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/borrower_hero.jpg"
            alt="Malaysian Business Owner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shefa-navy/95 via-shefa-navy/80 to-shefa-navy/40" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-shefa-gold/20 backdrop-blur-sm rounded-full text-shefa-gold text-sm font-medium mb-6">
              For SMEs & Aggregators
            </span>
            <h1 className="heading-xl text-white mb-6">
              Unlock Capital, <br />
              <span className="text-shefa-gold">Erase Risk.</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Get up to 80% invoice financing with built-in protection against customer non-payment. Grow your business without betting the farm.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn-primary">
                Apply for Financing
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* "The Sam Section" - How Trade Credit Insurance Works */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">How It Works</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              The Safety Net for <span className="text-shefa-gold">Your Sales</span>
            </h2>
            <p className="body-lg text-shefa-gray">
              Trade Credit Insurance isn't just paperwork—it's your guarantee that sold goods turn into cash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-shefa-gold/20 -z-10" />

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-white border border-shefa-gold/30 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-shefa-gold" />
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-[#E9ECEF] shadow-sm hover:shadow-card-hover transition-all h-full">
                    <span className="font-mono text-shefa-gold text-sm font-bold tracking-widest mb-3 block">STEP {step.step}</span>
                    <h3 className="font-heading text-xl font-medium text-shefa-navy mb-4">{step.title}</h3>
                    <p className="body-base text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Card Grid */}
      <section className="py-20 lg:py-32 bg-shefa-navy text-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow block mb-4 text-white/60">Why Shefa?</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-white mb-6">
                Financing That <br />
                <span className="text-shefa-gold">Actually Fits.</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Traditional banks ask for collateral you might not have. We look at the quality of your customers and the power of insurance to unlock the capital trapped in your invoices.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Preserve your equity—no dilution.',
                  'Scale funding as your sales grow.',
                  'Sleep better knowing your downside is covered.',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-shefa-gold" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#apply" className="inline-flex items-center text-shefa-gold font-medium hover:text-white transition-colors group">
                Start your application
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-shefa-gold/20 text-shefa-gold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-medium text-white mb-2">{benefit.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="card p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Shield className="w-64 h-64 text-shefa-navy" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="heading-lg text-shefa-navy mb-6">
                Ready to Grow Without <span className="text-shefa-gold">The Worry?</span>
              </h2>
              <p className="body-lg mb-10">
                Join the smart Malaysian SMEs using Shefa to turn invoices into immediate capital.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary w-full sm:w-auto">
                  Apply for Financing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="mailto:enquiries@shefa.com.my" className="btn-outline w-full sm:w-auto">
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Borrowers;
