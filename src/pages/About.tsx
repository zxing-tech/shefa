import { Shield, Award, Target, Globe, Mail, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Structural Resilience',
      description: 'We do not just lend; we architect secured environments. Through our one-stop FinHub and credit-insurance backing, we prioritize Capital Preservation over speculation.',
    },
    {
      icon: Globe,
      title: 'Industrial Connectivity',
      description: 'We are the vital bridge between Global Liquidity and Malaysia\'s Industrial Backbone. By addressing the MYR 24.3bn liquidity gap, we turn MSME trade receivables into a high-performance asset class.',
    },
    {
      icon: Target,
      title: 'Forensic Integrity',
      description: 'Our data-first approach ensures every transaction is characterized by technical precision. Backed by a 40-year leadership pedigree, we provide the transparency essential for high-stakes investing.',
    },
  ];

  const team = [
    {
      name: 'Russell Boyd',
      title: 'Director / CEO',
      image: '/team_1.jpg',
    },
    {
      name: 'Dr. Surendran Sanggarin',
      title: 'Director / COO',
      image: '/team_3.jpg',
    },
    {
      name: 'Dato\' Chik Nazrin',
      title: 'Director / CRO',
      image: '/team_2.jpg',
    },
    {
      name: 'Laura Daniel',
      title: 'Advisor',
      image: '/team_4.jpg',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl">
            <span className="eyebrow block mb-4 text-white/60">About Shefa</span>
            <div className="gold-rule mb-6" />
            <h1 className="heading-xl text-white mb-6">
              Institutional Security Meets{" "}
              <span className="text-shefa-gold">Economic Momentum</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Shefa operates at the intersection of institutional capital and the industrial backbone of Southeast Asia, addressing systemic liquidity gaps in sectors responsible for 40% of Malaysia&apos;s GDP.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-shefa-gold mb-6">&ldquo;</div>
            <blockquote className="heading-lg text-shefa-navy mb-8">
              Risk management is not about predicting the future, but about creating systems that are resilient to it.
            </blockquote>
            <cite className="text-shefa-gray not-italic">— Nassim Nicholas Taleb</cite>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow block mb-4 text-white/60">Our Story</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-white mb-6">
                Building <span className="text-shefa-gold">Credit Infrastructure</span>
              </h2>
              <p className="text-white/80 mb-6">
                Through our proprietary FinHub platform, we transform trade receivables into high-conviction, insurance-backed assets; advancing up to 80% of invoice values against verified corporate obligations in resilient sectors.
              </p>
              <p className="text-white/70">
                Our mandate is capital preservation through structural resilience: delivering institutional investors secured access to Southeast Asia&apos;s growth engines while building essential credit infrastructure for a liquid, resilient global economy.
              </p>
            </div>
            <div className="image-card h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src="/why_meeting.jpg"
                alt="Shefa Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">Our Values</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              The Foundation of <span className="text-shefa-gold">Everything We Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card p-8 hover:shadow-card-hover transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-shefa-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-shefa-navy mb-4">{value.title}</h3>
                  <p className="body-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32 bg-shefa-gold">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '40+', label: 'Years Combined Experience' },
              { value: 'MYR 2.8B+', label: 'Receivables Under Coverage' },
              { value: '500+', label: 'Businesses Supported' },
              { value: '94%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl font-bold text-shefa-navy mb-2">{stat.value}</div>
                <div className="text-shefa-navy/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">Leadership</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              Meet Our <span className="text-shefa-gold">Team</span>
            </h2>
            <p className="body-lg">
              Led by underwriters, not just algorithms. A team with decades of credit, trade, and risk experience.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] mb-5 rounded-3xl overflow-hidden bg-shefa-navy/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="gold-rule mb-3" />
                <h3 className="font-heading text-lg font-medium text-shefa-navy mb-1">{member.name}</h3>
                <p className="text-sm text-shefa-gray">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="eyebrow block mb-4 text-white/60">Contact</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-white mb-6">
                Get in <span className="text-shefa-gold">Touch</span>
              </h2>
              <p className="text-white/70 mb-8">
                Have questions about our services? Our team is here to help.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-shefa-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-medium text-white mb-1">Address</h4>
                  <p className="text-white/70">
                    Level 19, Boutique Office 1, Menara 2<br />
                    No. 3, Jalan Bangsar, KL Eco City<br />
                    59200 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-shefa-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-medium text-white mb-1">Email</h4>
                  <a href="mailto:enquiries@shefa.com.my" className="text-white/70 hover:text-shefa-gold transition-colors">
                    enquiries@shefa.com.my
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-shefa-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-medium text-white mb-1">Phone</h4>
                  <a href="tel:+60327745254" className="text-white/70 hover:text-shefa-gold transition-colors">
                    +60 3-2774 5254
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

export default About;
