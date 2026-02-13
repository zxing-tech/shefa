import { ArrowRight, Shield, FileCheck, Clock, TrendingUp, CheckCircle, Building2, Phone, Mail } from 'lucide-react';

const Borrowers = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Protection Against Non-Payment',
      description: 'Get a trade credit insurance policy protecting your business if buyers do not pay for goods or services.',
    },
    {
      icon: FileCheck,
      title: 'Policy Negotiation',
      description: 'We negotiate a tailored policy with insurers based on your estimated annual credit sales and bad debt history.',
    },
    {
      icon: Clock,
      title: 'Streamlined Claim Process',
      description: 'When a distributor becomes insolvent, report non-payment to Shefa. We gather documents and submit claims on your behalf.',
    },
    {
      icon: TrendingUp,
      title: 'Business Continuity',
      description: 'The insurance allows you to continue day-to-day operations, receive money from claims, and save your business from losing profit.',
    },
  ];

  const eligibilityCriteria = [
    'Registered Malaysian business (Sdn Bhd, Enterprise, or Partnership)',
    'Minimum annual turnover of RM 500,000',
    'Active trading history of at least 2 years',
    'B2B transactions with credit terms',
    'Proper financial records and audited accounts (for Sdn Bhd)',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Submit Application',
      description: 'Fill out our online enquiry form with your business details and financing requirements.',
    },
    {
      step: '2',
      title: 'Credit Assessment',
      description: 'Our team evaluates your buyer portfolio and trade patterns to determine coverage.',
    },
    {
      step: '3',
      title: 'Policy Setup',
      description: 'We negotiate with insurers to secure the best terms for your business.',
    },
    {
      step: '4',
      title: 'Get Funded',
      description: 'Access working capital backed by your insured receivables.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
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
              For SMEs & Businesses
            </span>
            <h1 className="heading-xl text-white mb-6">
              Insured Financing for{" "}
              <span className="text-shefa-gold">Malaysian Businesses</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Access working capital backed by trade credit insurance. Protect your business from buyer defaults while you focus on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="tel:+60327745254"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                <Phone className="mr-2 w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">Why Choose Shefa</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              Protection & Financing <span className="text-shefa-gold">Combined</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="card p-8 hover:shadow-card-hover transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-shefa-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-shefa-navy mb-4">{benefit.title}</h3>
                  <p className="body-base">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4 text-white/60">The Process</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              How to <span className="text-shefa-gold">Get Started</span>
            </h2>
            <p className="text-white/70">
              Simple, transparent process to access insured financing for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-shefa-gold flex items-center justify-center mb-6">
                    <span className="font-heading font-bold text-shefa-navy">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-4">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-shefa-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow block mb-4">Eligibility</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                Are You <span className="text-shefa-gold">Eligible?</span>
              </h2>
              <p className="body-lg mb-8">
                We work with Malaysian businesses across various industries. Check if you meet our basic criteria.
              </p>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria) => (
                  <li key={criteria} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-shefa-gold flex-shrink-0 mt-0.5" />
                    <span className="text-shefa-navy">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-card h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src="/coverage_factory.jpg"
                alt="Malaysian Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4 text-white/60">Coverage Options</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              Types of <span className="text-shefa-gold">Coverage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Domestic Receivables',
                description: 'Cover your local Malaysian buyers against non-payment.',
              },
              {
                title: 'Export Credit',
                description: 'Protect your international sales to ASEAN and global markets.',
              },
              {
                title: 'Single Buyer',
                description: 'Focused coverage for your largest or most critical customers.',
              },
            ].map((coverage) => (
              <div key={coverage.title} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="font-heading text-xl font-medium text-white mb-4">{coverage.title}</h3>
                <p className="text-white/70">{coverage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="card p-12 lg:p-16 text-center">
            <Building2 className="w-16 h-16 text-shefa-gold mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              Ready to Secure Your <span className="text-shefa-gold">Business?</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              Get a tailored trade credit insurance policy and access insured financing. Our team will guide you through every step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="mailto:enquiries@shefa.com.my"
                className="inline-flex items-center px-8 py-4 border border-shefa-navy/20 text-shefa-navy font-medium rounded-full hover:bg-shefa-navy/5 transition-all"
              >
                <Mail className="mr-2 w-4 h-4" />
                Email enquiries@shefa.com.my
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Borrowers;
