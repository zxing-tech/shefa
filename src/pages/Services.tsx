import { ArrowRight, Shield, FileCheck, Gavel, TrendingUp, Globe, Building2, User, ClipboardList, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: Shield,
      title: t('services_main1_title'),
      description: t('services_main1_desc'),
      features: [
        t('services_main1_f1'),
        t('services_main1_f2'),
        t('services_main1_f3'),
        t('services_main1_f4'),
      ],
    },
    {
      icon: FileCheck,
      title: t('services_main2_title'),
      description: t('services_main2_desc'),
      features: [
        t('services_main2_f1'),
        t('services_main2_f2'),
        t('services_main2_f3'),
        t('services_main2_f4'),
      ],
    },
    {
      icon: Gavel,
      title: t('services_main3_title'),
      description: t('services_main3_desc'),
      features: [
        t('services_main3_f1'),
        t('services_main3_f2'),
        t('services_main3_f3'),
        t('services_main3_f4'),
      ],
    },
    {
      icon: TrendingUp,
      title: t('services_main4_title'),
      description: t('services_main4_desc'),
      features: [
        t('services_main4_f1'),
        t('services_main4_f2'),
        t('services_main4_f3'),
        t('services_main4_f4'),
      ],
    },
  ];

  const coverageTypes = [
    {
      icon: Building2,
      title: t('services_type1_title'),
      description: t('services_type1_desc'),
    },
    {
      icon: Globe,
      title: t('services_type2_title'),
      description: t('services_type2_desc'),
    },
    {
      icon: User,
      title: t('services_type3_title'),
      description: t('services_type3_desc'),
    },
    {
      icon: ClipboardList,
      title: t('services_type4_title'),
      description: t('services_type4_desc'),
    },
    {
      icon: AlertTriangle,
      title: t('services_type5_title'),
      description: t('services_type5_desc'),
    },
    {
      icon: Shield,
      title: t('services_type6_title'),
      description: t('services_type6_desc'),
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl">
            <span className="eyebrow block mb-4 text-white/60">{t('services_hero_eyebrow')}</span>
            <div className="gold-rule mb-6" />
            <h1 className="heading-xl text-white mb-6">
              {t('services_hero_title')} <br />
              <span className="text-shefa-gold">{t('services_hero_title_accent')}</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              {t('services_hero_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-4">{t('services_offer_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              {t('services_offer_title')} <span className="text-shefa-gold">{t('services_offer_title_accent')}</span>
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
                        <div className="w-1.5 h-1.5 rounded-full bg-shefa-gold mt-2 flex-shrink-0" />
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
            <span className="eyebrow block mb-4 text-white/60">{t('services_opt_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              {t('services_opt_title')} <span className="text-shefa-gold">{t('services_opt_title_accent')}</span>
            </h2>
            <p className="text-white/70">
              {t('services_opt_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((coverage) => {
              const Icon = coverage.icon;
              return (
                <div key={coverage.title} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-shefa-gold/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-4">{coverage.title}</h3>
                  <p className="text-white/70">{coverage.description}</p>
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
            <span className="eyebrow block mb-4">{t('services_how_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-4">
              {t('services_how_title')} <span className="text-shefa-gold">{t('services_how_title_accent')}</span>
            </h2>
            <p className="body-lg">
              {t('services_how_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: t('services_step1_title'),
                description: t('services_step1_desc'),
              },
              {
                step: '2',
                title: t('services_step2_title'),
                description: t('services_step2_desc'),
              },
              {
                step: '3',
                title: t('services_step3_title'),
                description: t('services_step3_desc'),
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-shefa-gold flex items-center justify-center mx-auto mb-6">
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
                {t('services_conf_title')}
              </h2>
              <p className="text-shefa-navy/80 text-lg mb-8">
                {t('services_conf_desc')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/borrowers" className="inline-flex items-center px-8 py-4 bg-shefa-navy text-white font-medium rounded-full hover:bg-shefa-navy/90 transition-colors">
                  {t('nav_borrowers')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="/lenders" className="inline-flex items-center px-8 py-4 bg-white text-shefa-navy font-medium rounded-full hover:bg-white/90 transition-colors">
                  {t('nav_lenders')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '<48h', label: t('services_stat1_label') },
                { value: '90%', label: t('services_stat2_label') },
                { value: '30-60', label: t('services_stat3_label') },
                { value: '24/7', label: t('services_stat4_label') },
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
              {t('services_final_title')} <span className="text-shefa-gold">{t('services_final_title_accent')}</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              {t('services_final_desc')}
            </p>
            <a href="/contact" className="btn-primary">
              {t('nav_quote')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
