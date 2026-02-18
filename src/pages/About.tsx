import { Shield, Award, Target, Globe, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('about_val1_title'),
      description: t('about_val1_desc'),
    },
    {
      icon: Globe,
      title: t('about_val2_title'),
      description: t('about_val2_desc'),
    },
    {
      icon: Target,
      title: t('about_val3_title'),
      description: t('about_val3_desc'),
    },
  ];

  const team = [
    {
      name: 'Russell Boyd',
      title: 'Director / CEO',
      image: '/russell-boyd.webp',
    },
    {
      name: 'Dr. Surendran Sanggarin',
      title: 'Director / COO',
      image: '/dr-surendran.webp',
    },
    {
      name: "Dato' Chik Nazrin",
      title: 'Director / CRO',
      image: '/dato-chik.webp',
    },
    {
      name: 'Laura Daniel',
      title: 'Advisor',
      image: '/laura-daniel.webp',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl">
            <span className="eyebrow block mb-4 text-white/60">{t('about_hero_eyebrow')}</span>
            <div className="gold-rule mb-6" />
            <h1 className="heading-xl text-white mb-6">
              {t('about_hero_title')}{" "}
              <span className="text-shefa-gold">{t('about_hero_title_accent')}</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              {t('about_hero_desc')}
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
              {t('about_quote')}
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
              <span className="eyebrow block mb-4 text-white/60">{t('about_story_eyebrow')}</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-white mb-6">
                {t('about_story_title')} <span className="text-shefa-gold">{t('about_story_title_accent')}</span>
              </h2>
              <p className="text-white/80 mb-6">
                {t('about_story_desc1')}
              </p>
              <p className="text-white/70">
                {t('about_story_desc2')}
              </p>
            </div>
            <div className="image-card h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src="/why_meeting.jpg"
                alt="Shefa Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">{t('about_values_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              {t('about_values_title')} <span className="text-shefa-gold">{t('about_values_title_accent')}</span>
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
              { value: '40+', label: t('home_stats_experience') },
              { value: 'MYR 2.8B+', label: t('home_stats_receivables') },
              { value: '500+', label: t('home_stats_businesses') },
              { value: '94%', label: t('home_stats_satisfaction') },
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
            <span className="eyebrow block mb-4">{t('about_leadership_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              {t('about_leadership_title')} <span className="text-shefa-gold">{t('about_leadership_title_accent')}</span>
            </h2>
            <p className="body-lg">
              {t('about_leadership_desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] mb-5 rounded-3xl overflow-hidden bg-shefa-navy/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
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
              <span className="eyebrow block mb-4 text-white/60">{t('about_contact_eyebrow')}</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-white mb-6">
                {t('about_contact_title')} <span className="text-shefa-gold">{t('about_contact_title_accent')}</span>
              </h2>
              <p className="text-white/70 mb-8">
                {t('about_contact_desc')}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-shefa-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-medium text-white mb-1">{t('footer_address')}</h4>
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
                  <h4 className="font-heading text-lg font-medium text-white mb-1">{t('footer_email')}</h4>
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
                  <h4 className="font-heading text-lg font-medium text-white mb-1">{t('footer_phone')}</h4>
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
