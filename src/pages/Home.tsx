import { ArrowRight, Shield, TrendingUp, CheckCircle, Building2, Wheat, Truck, HardHat, Cpu, HeartPulse } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home = ({ navigateTo }: HomeProps) => {
  const { t } = useLanguage();

  const industries = [
    { name: t('industry_manufacturing'), icon: Building2, image: '/coverage_factory.jpg' },
    { name: t('industry_agriculture'), icon: Wheat, image: '/coverage_agriculture.jpg' },
    { name: t('industry_logistics'), icon: Truck, image: '/coverage_port.jpg' },
    { name: t('industry_construction'), icon: HardHat, image: '/industry_construction.jpg' },
    { name: t('industry_technology'), icon: Cpu, image: '/industry_tech.jpg' },
    { name: t('industry_healthcare'), icon: HeartPulse, image: '/industry_healthcare.jpg' },
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
            <span className="inline-block px-4 py-2 bg-shefa-gold/20 backdrop-blur-sm rounded-full text-shefa-gold text-sm font-medium mb-6">
              Shefa Risk Management
            </span>
            <h1 className="heading-xl text-white mb-6">
              {t('home_hero_title')}{" "}
              <span className="text-shefa-gold">{t('home_hero_title_accent')}</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              {t('home_hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigateTo('borrowers')} className="btn-primary">
                {t('home_cta_borrower')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button onClick={() => navigateTo('lenders')} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all">
                {t('home_cta_lender')}
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
              <span className="eyebrow block mb-4">{t('home_value_eyebrow')}</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                {t('home_value_title')}{" "}
                <span className="text-shefa-gold">{t('home_value_title_accent')}</span>
              </h2>
              <p className="body-lg mb-6">
                {t('home_value_desc1')}
              </p>
              <p className="body-base mb-8">
                {t('home_value_desc2')}
              </p>
              <button onClick={() => navigateTo('services')} className="inline-flex items-center text-shefa-navy font-medium hover:text-shefa-gold transition-colors group">
                {t('home_value_cta')}
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
            <span className="eyebrow block mb-4 text-white/60">{t('home_process_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              {t('home_process_title')} <span className="text-shefa-gold">{t('home_process_title_accent')}</span>
            </h2>
            <p className="text-white/70">
              {t('home_process_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: t('home_process_step1_title'),
                desc: t('home_process_step1_desc'),
                icon: Shield
              },
              {
                step: '02',
                title: t('home_process_step2_title'),
                desc: t('home_process_step2_desc'),
                icon: CheckCircle
              },
              {
                step: '03',
                title: t('home_process_step3_title'),
                desc: t('home_process_step3_desc'),
                icon: TrendingUp
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-5xl font-bold text-shefa-gold/30">{item.step}</span>
                    <div className="w-12 h-12 rounded-full bg-shefa-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-shefa-gold" />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-white mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
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
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer" onClick={() => navigateTo('borrowers')}>
              <img
                src="/borrower_hero.jpg"
                alt="For Borrowers"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/90 via-shefa-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-shefa-gold rounded-full text-shefa-navy text-xs font-medium mb-4">
                  {t('home_dual_borrower_tag')}
                </span>
                <h3 className="font-heading text-3xl font-medium text-white mb-4">
                  {t('home_dual_borrower_title')}
                </h3>
                <p className="text-white/80 mb-6">
                  {t('home_dual_borrower_desc')}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-shefa-gold text-shefa-navy font-medium rounded-full hover:bg-shefa-gold/90 transition-colors">
                  {t('home_cta_borrower')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* For Lenders */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer" onClick={() => navigateTo('lenders')}>
              <img
                src="/lender_hero.jpg"
                alt="For Lenders"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/90 via-shefa-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-shefa-gold rounded-full text-shefa-navy text-xs font-medium mb-4">
                  {t('home_dual_lender_tag')}
                </span>
                <h3 className="font-heading text-3xl font-medium text-white mb-4">
                  {t('home_dual_lender_title')}
                </h3>
                <p className="text-white/80 mb-6">
                  {t('home_dual_lender_desc')}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-shefa-gold text-shefa-navy font-medium rounded-full hover:bg-shefa-gold/90 transition-colors">
                  {t('home_cta_lender')}
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
            <span className="eyebrow block mb-4">{t('home_industries_eyebrow')}</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              {t('home_industries_title')} <span className="text-shefa-gold">{t('home_industries_title_accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.image} className="group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer">
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
              { value: '94%', label: t('home_stats_satisfaction') },
              { value: 'MYR 2.8B+', label: t('home_stats_receivables') },
              { value: '40+', label: t('home_stats_experience') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl font-bold text-shefa-gold mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/cta_container.jpg"
              alt="Get Started"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-shefa-navy/80" />
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div className="max-w-2xl">
                <h2 className="heading-lg text-white mb-6">
                  {t('home_final_title')} <span className="text-shefa-gold">{t('home_final_title_accent')}</span>
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  {t('home_final_desc')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => navigateTo('contact')} className="btn-primary">
                    {t('home_final_cta_req')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <a
                    href="mailto:enquiries@shefa.com.my"
                    className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                  >
                    {t('home_final_cta_email')}
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
