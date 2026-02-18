import { ArrowRight, Shield, TrendingUp, Lock, Eye, CheckCircle, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import YieldChart from '../components/YieldChart';

const Lenders = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t('lenders_benefit1_title'),
      description: t('lenders_benefit1_desc'),
    },
    {
      icon: TrendingUp,
      title: t('lenders_benefit2_title'),
      description: t('lenders_benefit2_desc'),
    },
    {
      icon: Eye,
      title: t('lenders_benefit3_title'),
      description: t('lenders_benefit3_desc'),
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
              {t('lenders_hero_tag')}
            </span>
            <h1 className="heading-xl text-white mb-6">
              {t('lenders_hero_title')} <br />
              <span className="text-shefa-gold">{t('lenders_hero_title_accent')}</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              {t('lenders_hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#invest" className="btn-primary">
                {t('lenders_cta_start')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="mailto:enquiries@shefa.com.my"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                {t('lenders_cta_prospectus')}
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50 font-mono">
              {t('lenders_disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* The Safety Net Infrastructure */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow block mb-4">{t('lenders_risk_eyebrow')}</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                {t('lenders_risk_title')} <br />
                <span className="text-shefa-gold">{t('lenders_risk_title_accent')}</span>
              </h2>
              <p className="body-lg mb-6">
                {t('lenders_risk_desc1')}
              </p>
              <p className="body-base mb-8">
                {t('lenders_risk_desc2')}
              </p>

              <div className="bg-shefa-navy/5 p-6 rounded-2xl border border-shefa-navy/10">
                <h4 className="font-heading font-medium text-shefa-navy mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-shefa-gold" />
                  {t('lenders_risk_layers_title')}
                </h4>
                <ul className="space-y-3">
                  {[
                    t('lenders_risk_layer1'),
                    t('lenders_risk_layer2'),
                    t('lenders_risk_layer3'),
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
                      <span className="font-mono text-xs text-shefa-gold mb-1 block">{t('lenders_flow_source')}</span>
                      <div className="font-heading text-lg">{t('lenders_flow_source_label')}</div>
                    </div>
                  </div>

                  <div className="h-8 w-0.5 bg-gradient-to-b from-shefa-gold to-white/20 ml-6" />

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-shefa-gold flex items-center justify-center text-shefa-navy font-bold">
                      S
                    </div>
                    <div>
                      <span className="font-mono text-xs text-shefa-gold mb-1 block">{t('lenders_flow_intermediary')}</span>
                      <div className="font-heading text-lg">{t('lenders_flow_intermediary_label')}</div>
                      <div className="text-xs text-white/60">{t('lenders_flow_intermediary_desc')}</div>
                    </div>
                  </div>

                  <div className="h-8 w-0.5 bg-gradient-to-b from-white/20 to-shefa-gold ml-6" />

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-shefa-gold/30">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <Shield className="w-5 h-5 text-shefa-gold" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-shefa-gold mb-1 block">{t('lenders_flow_destination')}</span>
                      <div className="font-heading text-lg">{t('lenders_flow_destination_label')}</div>
                      <div className="text-xs text-white/60">{t('lenders_flow_destination_desc')}</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
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

          <div className="max-w-5xl mx-auto">
            <YieldChart />
          </div>
        </div>
      </section>

      {/* Portfolio Diversification */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto text-center">
          <span className="eyebrow block mb-4">{t('lenders_portfolio_eyebrow')}</span>
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="heading-lg text-shefa-navy mb-12">
            {t('lenders_portfolio_title')} <span className="text-shefa-gold">{t('lenders_portfolio_title_accent')}</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: t('industry_manufacturing'), icon: Building2 },
              { name: t('industry_logistics'), icon: ArrowRight },
              { name: t('industry_healthcare'), icon: CheckCircle },
              { name: t('industry_construction'), icon: Lock },
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
            {t('lenders_portfolio_desc')}
          </p>
        </div>
      </section>

      {/* Technical FAQ */}
      <section className="py-20 lg:py-32 bg-shefa-navy border-t border-white/5">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="font-mono text-shefa-gold text-sm tracking-widest uppercase mb-4 block">{t('lenders_faq_eyebrow')}</span>
              <h2 className="heading-lg text-white mb-6">
                {t('lenders_faq_title')} <br />
                <span className="text-shefa-gold">{t('lenders_faq_title_accent')}</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-sm">
                {t('lenders_faq_subtitle')}
              </p>
              <a href="/contact" className="btn-outline text-sm">
                {t('lenders_cta_prospectus')}
              </a>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-8">
              {[
                {
                  q: t('lenders_faq1_q'),
                  a: t('lenders_faq1_a')
                },
                {
                  q: t('lenders_faq2_q'),
                  a: t('lenders_faq2_a')
                },
                {
                  q: t('lenders_faq3_q'),
                  a: t('lenders_faq3_a')
                }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <h3 className="font-mono text-lg text-shefa-gold mb-3">{faq.q}</h3>
                  <p className="text-white/80 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
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
            {t('lenders_final_title')} <span className="text-shefa-gold">{t('lenders_final_title_accent')}</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t('lenders_final_desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              {t('lenders_cta_start')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="mailto:enquiries@shefa.com.my" className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all">
              {t('lenders_final_cta_call')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lenders;
