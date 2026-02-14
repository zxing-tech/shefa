import { ArrowRight, Shield, FileCheck, Gavel, TrendingUp, Globe, Building2, User, ClipboardList, AlertTriangle } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Protection Against Non-Payment',
      description: 'Shefa Group gets a trade credit insurance policy, protecting your business if buyers do not pay for goods or services.',
      features: [
        'Coverage up to 90% of invoice value',
        'Protection against insolvency and protracted default',
        'Domestic and export receivables covered',
        'Fast claim settlement process',
      ],
    },
    {
      icon: FileCheck,
      title: 'Policy Negotiation',
      description: 'We negotiate a tailored policy with insurers based on your estimated annual credit sales and bad debt history.',
      features: [
        'Customized coverage limits',
        'Competitive premium rates',
        'Flexible policy terms',
        'Expert broker representation',
      ],
    },
    {
      icon: Gavel,
      title: 'Claim Process Management',
      description: 'When a distributor becomes insolvent and cannot pay, report the non-payment to Shefa Group. We gather documents and submit claims.',
      features: [
        'End-to-end claim handling',
        'Documentation preparation',
        'Negotiation with insurers',
        'Recovery pursuit',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Business Benefits',
      description: 'The insurance allows you to continue your day-to-day operations, receive money from your claim, and save your business from losing profit.',
      features: [
        'Improved cash flow predictability',
        'Enhanced borrowing capacity',
        'Peace of mind for expansion',
        'Protection of profit margins',
      ],
    },
  ];

  const coverageTypes = [
    {
      icon: Building2,
      title: 'Domestic Receivables',
      description: 'Protect your local Malaysian buyers against non-payment with comprehensive coverage.',
    },
    {
      icon: Globe,
      title: 'Export Credit Coverage',
      description: 'Expand confidently into ASEAN and global markets with political and commercial risk protection.',
    },
    {
      icon: User,
      title: 'Single Buyer Policies',
      description: 'Focused protection for your largest or most critical trading relationships.',
    },
    {
      icon: ClipboardList,
      title: 'Whole Turnover',
      description: 'Comprehensive coverage for your entire buyer portfolio with streamlined administration.',
    },
    {
      icon: AlertTriangle,
      title: 'Political Risk',
      description: 'Safeguard against government actions, currency inconvertibility, and expropriation risks.',
    },
    {
      icon: Shield,
      title: 'Collections Support',
      description: 'Professional debt collection services to recover outstanding payments efficiently.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl">
            <span className="eyebrow block mb-4 text-white/80">Our Services</span>
            <div className="gold-rule mb-6" />
            <h1 className="heading-xl text-white mb-6">
              Trade Credit Insurance &{" "}
              <span className="text-shefa-gold">Financing Solutions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Comprehensive protection and financing solutions designed for Malaysian businesses. From policy negotiation to claim settlement, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">What We Offer</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              End-to-End <span className="text-shefa-gold">Protection</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="card p-8 lg:p-10">
                  <div className="w-14 h-14 rounded-2xl bg-shefa-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-shefa-navy mb-4">{service.title}</h3>
                  <p className="body-base mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-xl bg-shefa-gold mt-2 flex-shrink-0" />
                        <span className="text-shefa-navy/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4 text-white/80">Coverage Options</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              Types of <span className="text-shefa-gold">Coverage</span>
            </h2>
            <p className="text-white/85">
              Choose the coverage that best fits your business needs and trading patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((coverage) => {
              const Icon = coverage.icon;
              return (
                <div key={coverage.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-shefa-gold/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-4">{coverage.title}</h3>
                  <p className="text-white/85">{coverage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">The Process</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              How It <span className="text-shefa-gold">Works</span>
            </h2>
            <p className="body-lg">
              From policy setup to claim settlement—simple, transparent, and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Assessment',
                description: 'We analyze your buyer portfolio, trade patterns, and credit sales history to understand your risk profile.',
              },
              {
                step: '2',
                title: 'Policy Setup',
                description: 'We negotiate with insurers to secure the best coverage terms tailored to your specific needs.',
              },
              {
                step: '3',
                title: 'Ongoing Support',
                description: 'We provide continuous monitoring, claim management, and policy adjustments as your business grows.',
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-shefa-gold flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-2xl font-bold text-shefa-navy">{step.step}</span>
                </div>
                <h3 className="font-heading text-xl font-medium text-shefa-navy mb-4">{step.title}</h3>
                <p className="body-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="py-20 lg:py-32 bg-shefa-gold">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-shefa-navy mb-6">
                Confidence and Security
              </h2>
              <p className="text-shefa-navy/80 text-lg mb-8">
                With trade credit insurance, you gain peace of mind, knowing your profits, liquidity, and cash flow are protected, allowing you to expand your business confidently.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/borrowers" className="inline-flex items-center px-8 py-4 bg-shefa-navy text-white font-medium rounded-xl hover:bg-shefa-navy/90 transition-colors">
                  For Borrowers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="/lenders" className="inline-flex items-center px-8 py-4 bg-white text-shefa-navy font-medium rounded-xl hover:bg-white/90 transition-colors">
                  For Lenders
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '<48h', label: 'Policy Indication' },
                { value: '90%', label: 'Coverage Available' },
                { value: '30-60', label: 'Days Claim Settlement' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="font-heading text-3xl font-bold text-shefa-navy mb-1">{stat.value}</div>
                  <div className="text-shefa-navy/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="card p-12 lg:p-16 text-center">
            <Shield className="w-16 h-16 text-shefa-gold mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              Ready to Protect Your <span className="text-shefa-gold">Business?</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              Get a tailored trade credit insurance policy designed for your business needs. Speak to our team today.
            </p>
            <a href="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
