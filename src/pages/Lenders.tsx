import { ArrowRight, Shield, TrendingUp, Lock, Eye, CheckCircle, Building2 } from 'lucide-react';

const Lenders = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Principal Shielding',
      description: 'Your capital isn’t just "secured"—it is backed by a regulated insurance policy. If the borrower’s customer defaults, the policy pays out.',
    },
    {
      icon: TrendingUp,
      title: 'Targeted Returns',
      description: 'Aim for 8-15% annual returns. This is a risk-adjusted yield derived from real economic activity, not speculation.',
    },
    {
      icon: Eye,
      title: 'Due Diligence',
      description: 'We don’t just list anyone. Every borrower is vetted, and every invoice is verified against the insurer’s credit limits.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lender_hero.jpg"
            alt="Investment Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shefa-navy/95 via-shefa-navy/80 to-shefa-navy/40" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-shefa-gold/20 backdrop-blur-sm rounded-full text-shefa-gold text-sm font-medium mb-6">
              For Institutional & Accredited Investors
            </span>
            <h1 className="heading-xl text-white mb-6">
              Invest with an <br />
              <span className="text-shefa-gold">Insurance Shield.</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Earn 8-15% annual returns on diversified SME portfolios backed by comprehensive trade credit insurance. Institutional-grade security for your capital.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#invest" className="btn-primary">
                Start Investing
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="mailto:enquiries@shefa.com.my"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                Request Prospectus
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50 font-mono">
              * Returns are targeted and subject to market conditions. Capital is risk-managed but not guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* The Safety Net Infrastructure */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow block mb-4">Risk Management</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                Institutional-Grade <br />
                <span className="text-shefa-gold">Security Architecture</span>
              </h2>
              <p className="body-lg mb-6">
                Your primary fear is loss of principal. We address this through a formal <strong>Risk Transfer</strong> mechanism.
              </p>
              <p className="body-base mb-8">
                When you fund an invoice, you aren't just trusting the SME. You are relying on the credit rating of their large corporate buyers, backed by a global insurer. If the buyer goes insolvent, the insurance layer activates to recover your capital.
              </p>

              <div className="bg-shefa-navy/5 p-6 rounded-2xl border border-shefa-navy/10">
                <h4 className="font-heading font-medium text-shefa-navy mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-shefa-gold" />
                  The Protection Layers
                </h4>
                <ul className="space-y-3">
                  {[
                    'Layer 1: Buyer Credit Assessment',
                    'Layer 2: Trade Credit Insurance Policy',
                    'Layer 3: Shefa Risk Surveillance',
                  ].map((layer) => (
                    <li key={layer} className="flex items-center gap-3 text-sm text-shefa-gray">
                      <CheckCircle className="w-4 h-4 text-shefa-gold" />
                      {layer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              {/* Abstract Process Diagram Visualization */}
              <div className="bg-shefa-navy rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Lock className="w-40 h-40" />
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <TrendingUp className="w-5 h-5 text-shefa-gold" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-shefa-gold mb-1 block">SOURCE</span>
                      <div className="font-heading text-lg">Lender Capital</div>
                    </div>
                  </div>

                  <div className="h-8 w-0.5 bg-gradient-to-b from-shefa-gold to-white/20 ml-6" />

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-shefa-gold flex items-center justify-center text-shefa-navy font-bold">
                      S
                    </div>
                    <div>
                      <span className="font-mono text-xs text-shefa-gold mb-1 block">INTERMEDIARY</span>
                      <div className="font-heading text-lg">Shefa Platform</div>
                      <div className="text-xs text-white/60">Risk Assessment & Allocation</div>
                    </div>
                  </div>

                  <div className="h-8 w-0.5 bg-gradient-to-b from-white/20 to-shefa-gold ml-6" />

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-shefa-gold/30">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <Shield className="w-5 h-5 text-shefa-gold" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-shefa-gold mb-1 block">DESTINATION (SECURED)</span>
                      <div className="font-heading text-lg">Insured Borrower</div>
                      <div className="text-xs text-white/60">Backed by A-Rated Insurance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Features */}
      <section className="py-20 lg:py-32 bg-shefa-navy text-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-shefa-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium mb-4">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Diversification */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto text-center">
          <span className="eyebrow block mb-4">Portfolio Strategy</span>
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="heading-lg text-shefa-navy mb-12">
            Diversification Across <span className="text-shefa-gold">Key Sectors</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Manufacturing', icon: Building2 },
              { name: 'Logistics', icon: ArrowRight },
              { name: 'Healthcare', icon: CheckCircle },
              { name: 'Construction', icon: Lock },
            ].map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.name} className="p-6 border border-[#E9ECEF] rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-shefa-gold/50 transition-colors bg-white">
                  <Icon className="w-8 h-8 text-shefa-navy/40" />
                  <span className="font-heading font-medium text-shefa-navy">{sector.name}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-12 max-w-2xl mx-auto text-shefa-gray">
            We spread funds across multiple borrowers ("Sams") in different industries to minimize idiosyncratic risk and ensure stable portfolio performance.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="invest" className="py-20 lg:py-32 bg-shefa-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="w-[86vw] mx-auto relative z-10 text-center">
          <h2 className="heading-lg text-white mb-6">
            Make Your Capital <span className="text-shefa-gold">Work Harder.</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join the smart money earning 8-15% yields backed by trade credit insurance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Start Investing
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="mailto:enquiries@shefa.com.my" className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lenders;
