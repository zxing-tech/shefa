import { ArrowRight, Shield, TrendingUp, Lock, Eye, BarChart3, CheckCircle, Phone, Mail, Building2 } from 'lucide-react';

const Lenders = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Insurance-Backed Security',
      description: 'Every investment is protected by trade credit insurance, providing a safety net against buyer defaults.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Returns',
      description: 'Earn attractive returns from a portfolio of verified trade receivables from Malaysian businesses.',
    },
    {
      icon: Lock,
      title: 'Capital Preservation',
      description: 'Our risk-first approach prioritizes protecting your capital while generating steady income.',
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'Access detailed portfolio analytics, performance reports, and real-time tracking of your investments.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Create Account',
      description: 'Register as an investor and complete our KYC verification process.',
      icon: Building2,
    },
    {
      step: '2',
      title: 'Fund Your Account',
      description: 'Deposit funds via bank transfer or other supported payment methods.',
      icon: TrendingUp,
    },
    {
      step: '3',
      title: 'Choose Investments',
      description: 'Browse available receivables and select investments that match your risk appetite.',
      icon: BarChart3,
    },
    {
      step: '4',
      title: 'Earn Returns',
      description: 'Receive regular returns as businesses repay their insured receivables.',
      icon: Shield,
    },
  ];

  const performanceStats = [
    { label: 'Average Annual Return', value: '8-12%' },
    { label: 'Default Rate', value: '<2%' },
    { label: 'Investors Onboarded', value: '500+' },
    { label: 'Total Funded', value: 'MYR 500M+' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
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
              For Institutional & Individual Investors
            </span>
            <h1 className="heading-xl text-white mb-6">
              Invest in Malaysia&apos;s{" "}
              <span className="text-shefa-gold">Trade Ecosystem</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Earn competitive returns from insurance-backed trade receivables. Join hundreds of investors supporting Malaysian businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Start Investing
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="tel:+60327745254"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                <Phone className="mr-2 w-4 h-4" />
                Speak to an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-shefa-gold">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl lg:text-4xl font-bold text-shefa-navy mb-1">{stat.value}</div>
                <div className="text-shefa-navy/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">Why Invest With Shefa</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              Security Meets <span className="text-shefa-gold">Performance</span>
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
            <span className="eyebrow block mb-4 text-white/60">Investment Process</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              How to <span className="text-shefa-gold">Start Investing</span>
            </h2>
            <p className="text-white/70">
              Simple, transparent process to start earning returns from trade receivables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                    <div className="w-12 h-12 rounded-full bg-shefa-gold flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-shefa-navy" />
                    </div>
                    <h3 className="font-heading text-xl font-medium text-white mb-4">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-shefa-gold/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="image-card h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src="/why_meeting.jpg"
                alt="Risk Management Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="eyebrow block mb-4">Risk Management</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                Our <span className="text-shefa-gold">Risk Framework</span>
              </h2>
              <p className="body-lg mb-8">
                We employ a multi-layered risk mitigation framework, reinforced by credit insurance and rigorous due diligence.
              </p>
              <ul className="space-y-4">
                {[
                  'Credit insurance coverage for all receivables',
                  'Rigorous buyer credit assessment',
                  'Diversified portfolio approach',
                  'Real-time monitoring and alerts',
                  'Experienced risk management team',
                  'Regulatory compliance and transparency',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-shefa-gold flex-shrink-0 mt-0.5" />
                    <span className="text-shefa-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4 text-white/60">Investment Options</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              Choose Your <span className="text-shefa-gold">Investment</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Individual Receivables',
                description: 'Select specific invoices from businesses you want to support.',
                min: 'MYR 10,000',
              },
              {
                title: 'Portfolio Fund',
                description: 'Diversified exposure across multiple industries and buyers.',
                min: 'MYR 50,000',
              },
              {
                title: 'Institutional Mandate',
                description: 'Customized solutions for institutional investors.',
                min: 'MYR 1,000,000',
              },
            ].map((option) => (
              <div key={option.title} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="font-heading text-xl font-medium text-white mb-4">{option.title}</h3>
                <p className="text-white/70 mb-6">{option.description}</p>
                <div className="pt-6 border-t border-white/10">
                  <span className="text-white/50 text-sm">Minimum Investment</span>
                  <div className="text-shefa-gold font-heading text-xl font-medium">{option.min}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="card p-12 lg:p-16 text-center">
            <TrendingUp className="w-16 h-16 text-shefa-gold mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              Ready to Start <span className="text-shefa-gold">Investing?</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              Join hundreds of investors earning competitive returns from Malaysia&apos;s trade ecosystem. Our team is ready to guide you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Create Account
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

export default Lenders;
