import { ArrowRight, Shield, TrendingUp, CheckCircle, Building2, Wheat, Truck, HardHat, Cpu, HeartPulse } from 'lucide-react';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home = ({ navigateTo }: HomeProps) => {
  const industries = [
    { name: 'Manufacturing', icon: Building2, image: '/coverage_factory.jpg' },
    { name: 'Agriculture', icon: Wheat, image: '/coverage_agriculture.jpg' },
    { name: 'Logistics', icon: Truck, image: '/coverage_port.jpg' },
    { name: 'Construction', icon: HardHat, image: '/industry_construction.jpg' },
    { name: 'Technology', icon: Cpu, image: '/industry_tech.jpg' },
    { name: 'Healthcare', icon: HeartPulse, image: '/industry_healthcare.jpg' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero_main.jpg"
            alt="Kuala Lumpur Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shefa-navy/90 via-shefa-navy/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-12 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-shefa-gold/20 backdrop-blur-sm rounded-full text-shefa-gold text-sm font-medium">
                Shefa Risk Management
              </span>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs font-medium uppercase tracking-wider">Recognized by Bank Negara Malaysia</span>
              </div>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Protect Your Receivables.{" "}
              <span className="text-shefa-gold">Unlock Your Cash Flow.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Trade credit insurance and financing solutions that keep Malaysian businesses moving—backed by data, delivered with clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigateTo('borrowers')} className="btn-primary">
                Become a Borrower
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button onClick={() => navigateTo('lenders')} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all">
                Become a Lender
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow block mb-4">Our Approach</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                We Turn Credit Risk Into a{" "}
                <span className="text-shefa-gold">Competitive Advantage</span>
              </h2>
              <p className="body-lg mb-6">
                Most businesses lose sleep over late payments. We remove the uncertainty—so you can sell more, ship faster, and plan ahead.
              </p>
              <p className="body-base mb-8">
                Our policies cover domestic and export receivables, with fast claims and clear terms. Whether you are a growing SME or an established enterprise, we tailor coverage to your trade patterns.
              </p>
              <button onClick={() => navigateTo('services')} className="inline-flex items-center text-shefa-navy font-medium hover:text-shefa-gold transition-colors group">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="image-card h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src="/approach_handshake.jpg"
                alt="Business Partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4 text-white/80">The Process</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              Three Steps to <span className="text-shefa-gold">Protected Revenue</span>
            </h2>
            <p className="text-white/85">
              From policy setup to first claim—simple, transparent, and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Assess',
                desc: 'We analyze your buyer portfolio and trade patterns to identify optimal coverage.',
                icon: Shield
              },
              {
                step: '02',
                title: 'Insure',
                desc: 'Get a tailored policy with clear limits and premiums. Insurance-backed protection.',
                icon: CheckCircle
              },
              {
                step: '03',
                title: 'Collect',
                desc: 'If a buyer defaults, we handle claims and recovery while you focus on business.',
                icon: TrendingUp
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-5xl font-bold text-shefa-gold/30">{item.step}</span>
                    <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-shefa-gold" />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-white mb-4">{item.title}</h3>
                  <p className="text-white/85">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Borrowers */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => navigateTo('borrowers')}>
              <img
                src="/borrower_hero.jpg"
                alt="For Borrowers"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/90 via-shefa-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-shefa-gold rounded-full text-shefa-navy text-xs font-medium mb-4">
                  For SMEs
                </span>
                <h3 className="font-heading text-3xl font-medium text-white mb-4">
                  Need Insured Financing?
                </h3>
                <p className="text-white/90 mb-6">
                  Access working capital backed by trade credit insurance. Protect your business while you grow.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-shefa-gold text-shefa-navy font-medium rounded-full hover:bg-shefa-gold/90 transition-colors">
                  Become a Borrower
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* For Lenders */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => navigateTo('lenders')}>
              <img
                src="/lender_hero.jpg"
                alt="For Lenders"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/90 via-shefa-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-shefa-gold rounded-full text-shefa-navy text-xs font-medium mb-4">
                  For Investors
                </span>
                <h3 className="font-heading text-3xl font-medium text-white mb-4">
                  Want to Earn Returns?
                </h3>
                <p className="text-white/90 mb-6">
                  Invest in insurance-backed trade receivables. Secure, transparent, and competitive returns.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-shefa-gold text-shefa-navy font-medium rounded-full hover:bg-shefa-gold/90 transition-colors">
                  Become a Lender
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">Industries We Serve</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              Covering the Sectors That <span className="text-shefa-gold">Move Malaysia</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="group relative h-[280px] rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/80 via-shefa-navy/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-10 h-10 rounded-full bg-shefa-gold/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-shefa-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-medium text-white">{industry.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '<48h', label: 'Policy Indication' },
              { value: '94%', label: 'Claims Satisfaction' },
              { value: 'MYR 2.8B+', label: 'Receivables Covered' },
              { value: '40+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl font-bold text-shefa-gold mb-2">{stat.value}</div>
                <div className="text-white/85">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/cta_container.jpg"
              alt="Get Started"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-shefa-navy/80" />
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div className="max-w-2xl">
                <h2 className="heading-lg text-white mb-6">
                  Ready to Protect Your <span className="text-shefa-gold">Revenue?</span>
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Get a tailored indication in 48 hours. No obligation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => navigateTo('contact')} className="btn-primary">
                    Request a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <a
                    href="mailto:enquiries@shefa.com.my"
                    className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
