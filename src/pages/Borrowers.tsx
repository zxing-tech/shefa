import { ArrowRight, Shield, Clock, TrendingUp, Smartphone, FileText, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FundingCalculator from '../components/FundingCalculator';

const Borrowers = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: t('borrowers_benefit1_title'),
      description: t('borrowers_benefit1_desc'),
    },
    {
      icon: Shield,
      title: t('borrowers_benefit2_title'),
      description: t('borrowers_benefit2_desc'),
    },
    {
      icon: Zap,
      title: t('borrowers_benefit3_title'),
      description: t('borrowers_benefit3_desc'),
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/borrower_hero.jpg"
            alt="Business Operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shefa-navy/95 via-shefa-navy/80 to-shefa-navy/40" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-shefa-gold/20 backdrop-blur-sm rounded-full text-shefa-gold text-sm font-medium mb-6">
              {t('borrowers_hero_tag')}
            </span>
            <h1 className="heading-xl text-white mb-6">
              {t('borrowers_hero_title')}<br />
              <span className="text-shefa-gold">{t('borrowers_hero_title_accent')}</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              {t('borrowers_hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn-primary">
                {t('borrowers_cta_apply')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                {t('borrowers_cta_how')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick Grid */}
      <section className="py-12 bg-shefa-gold">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '1.2%', label: t('borrowers_stats_rate_label') },
              { value: '80%', label: t('borrowers_stats_funding_label') },
              { value: '<48h', label: t('borrowers_stats_time_label') },
              { value: '✓', label: t('borrowers_stats_claim_label') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl lg:text-4xl font-bold text-shefa-navy mb-1">{stat.value}</div>
                <div className="text-shefa-navy/70 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="eyebrow block mb-4">{t('borrowers_benefits_eyebrow')}</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-12">
                <span className="text-shefa-gold">{t('borrowers_benefits_title')}</span>
              </h2>

              <div className="space-y-10">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-shefa-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-shefa-gold" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-medium text-shefa-navy mb-2">{benefit.title}</h3>
                        <p className="text-shefa-gray leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative z-10">
                  <FundingCalculator />
                </div>
                <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full border-2 border-shefa-gold rounded-3xl z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Process */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-shefa-navy text-white overflow-hidden">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow block mb-4 text-white/60">{t('borrowers_how_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg mb-4">
              {t('borrowers_how_title')} <span className="text-shefa-gold">{t('borrowers_how_title_accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/10 z-0" />

            {[
              {
                step: '01',
                icon: FileText,
                title: t('borrowers_how_step1_title'),
                desc: t('borrowers_how_step1_desc'),
              },
              {
                step: '02',
                icon: Smartphone,
                title: t('borrowers_how_step2_title'),
                desc: t('borrowers_how_step2_desc'),
              },
              {
                step: '03',
                icon: TrendingUp,
                title: t('borrowers_how_step3_title'),
                desc: t('borrowers_how_step3_desc'),
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative z-10 text-center px-4">
                  <div className="w-24 h-24 rounded-full bg-shefa-navy border-2 border-shefa-gold flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(200,163,76,0.2)]">
                    <Icon className="w-10 h-10 text-shefa-gold" />
                  </div>
                  <span className="font-mono text-shefa-gold text-sm mb-4 block">{step.step}</span>
                  <h3 className="font-heading text-2xl font-medium mb-4">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Application CTA */}
      <section id="apply" className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="bg-shefa-gold rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="heading-lg text-shefa-navy mb-6">
                {t('borrowers_final_title')} <br />
                <span className="opacity-60">{t('borrowers_final_title_accent')}</span>
              </h2>
              <p className="text-shefa-navy/80 text-xl mb-10 max-w-2xl">
                {t('borrowers_final_desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary bg-shefa-navy text-white hover:bg-shefa-navy/90 border-shefa-navy">
                  {t('borrowers_cta_apply')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="tel:+60327745254" className="inline-flex items-center px-8 py-4 bg-transparent text-shefa-navy font-bold border-2 border-shefa-navy/20 rounded-full hover:bg-shefa-navy/5 transition-all">
                  {t('borrowers_final_cta_advisor')}
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
