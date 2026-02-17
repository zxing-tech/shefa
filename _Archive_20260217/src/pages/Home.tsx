import { ArrowRight, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const stats = [
    { label: 'Trade Finance Structured', value: 'USD 300M+', icon: TrendingUp },
    { label: 'Risk Management Experience', value: '15+ Years', icon: ShieldCheck },
    { label: 'Default Rate on Insured Notes', value: '0.0%', icon: Zap },
  ];

  const partners = ['Coface', 'Allianz', 'Atradius', 'KLDX'];

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_main.jpg"
            alt="Kuala Lumpur Skyline twilight"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          {/* Subtle network nodes placeholder overlay - could use a SVG pattern or image */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-5xl space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-[0.3em]">
                  Institutional Security // Economic Momentum
                </span>
                <h1 className="text-5xl lg:text-[7.5rem] font-heading font-extrabold text-white leading-[0.85] tracking-tighter uppercase mb-6">
                  INSTITUTIONAL <br />
                  <span className="text-secondary opacity-100">SECURITY.</span>
                </h1>
                <h1 className="text-5xl lg:text-[7.5rem] font-heading font-extrabold text-white leading-[0.85] tracking-tighter uppercase">
                  ECONOMIC <br />
                  <span className="text-secondary opacity-100">MOMENTUM.</span>
                </h1>
              </div>

              <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
                We bridge the liquidity gap for Malaysia's industrial backbone.
                Trade finance structured with <span className="text-white font-bold">AA-rated insurance protection</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button
                  onClick={() => onNavigate('borrowers')}
                  className="w-full sm:w-auto bg-secondary text-secondary-foreground px-12 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:brightness-110 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  Get Funded <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('lenders')}
                  className="w-full sm:w-auto border-2 border-white/30 text-white px-12 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-background transition-all"
                >
                  For Lenders
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner logos / Trust Strip */}
      <section className="py-12 border-y border-border bg-card/10">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {partners.map((partner, index) => (
                <div key={partner} className="flex items-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center group">
                    <span className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-foreground opacity-60 group-hover:opacity-100 transition-all cursor-default">
                      {partner}
                    </span>
                  </div>
                  {index < partners.length - 1 && (
                    <div className="h-8 w-px bg-border hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="py-12 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto glass-card rounded-[32px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 lg:p-14 flex items-center gap-8 group hover:bg-secondary/5 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <stat.icon size={32} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl lg:text-5xl font-black text-foreground tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
