import { ArrowRight, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_main.jpg"
            alt="Shefa Risk Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-shefa-navy/70 dark:bg-shefa-navy/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-4xl space-y-8 reveal-up active">
              <div className="space-y-4">
                <span className="inline-block bg-shefa-gold/10 border border-shefa-gold/30 text-shefa-gold px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-[0.3em]">
                  Brand Guide Rev1 // Malaysian Trade Credit
                </span>
                <h1 className="text-5xl lg:text-[7rem] font-heading font-extrabold text-white leading-[0.9] tracking-tighter uppercase">
                  Institutional Security.<br />
                  <span className="text-shefa-gold">Economic Momentum.</span>
                </h1>
              </div>

              <p className="text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Bridging the liquidity gap for Malaysia's industrial backbone.
                Structured trade finance backed by AA-rated insurance.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button
                  onClick={() => onNavigate('borrowers')}
                  className="w-full sm:w-auto bg-shefa-gold text-shefa-navy px-12 py-5 rounded font-black uppercase tracking-[0.2em] text-sm hover:brightness-105 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  Get Funded <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('lenders')}
                  className="w-full sm:w-auto border-2 border-white text-white px-12 py-5 rounded font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-shefa-navy transition-all"
                >
                  For Lenders
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-16 sm:-mt-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                { label: 'Trade Finance Structured', value: 'USD 300M+', icon: TrendingUp },
                { label: 'Risk Management Experience', value: '15+ Years', icon: ShieldCheck },
                { label: 'Target Default on Insured Notes', value: '0%', icon: Zap },
              ].map((stat, i) => (
                <div key={i} className="p-8 lg:p-12 flex items-center gap-8 group hover:bg-shefa-gold/5 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-shefa-gold/10 flex items-center justify-center text-shefa-gold group-hover:scale-110 transition-transform">
                    <stat.icon size={32} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto text-center space-y-16">
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-foreground uppercase tracking-tight">
                Secure. Transparent. <span className="text-shefa-gold">Regulated.</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                We combine institutional-grade credit insurance with regulated capital markets infrastructure to deliver unparalleled security.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
              {/* Placeholders for partner logos */}
              <span className="text-3xl font-black text-foreground/40 uppercase tracking-widest">Coface</span>
              <span className="text-3xl font-black text-foreground/40 uppercase tracking-widest">Allianz</span>
              <span className="text-3xl font-black text-foreground/40 uppercase tracking-widest">Atradius</span>
              <span className="text-3xl font-black text-foreground/40 uppercase tracking-widest">KLDX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 lg:py-48 bg-shefa-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/why_meeting.jpg"
            alt="Collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shefa-navy via-shefa-navy/40 to-transparent" />
        </div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-heading font-extrabold text-white uppercase leading-tight">
                  Malaysia's <br />
                  <span className="text-shefa-gold">Growth Engine</span>
                </h2>
                <div className="w-24 h-1.5 bg-shefa-gold rounded-full" />
              </div>
              <p className="text-xl text-white/70 leading-relaxed">
                By digitizing trade receivables, we unlock liquidity for Southeast Asia's critical sectors—ensuring SMEs and Industrial giants have the capital to scale at the pace of global trade.
              </p>
              <button onClick={() => onNavigate('borrowers')} className="flex items-center gap-4 text-shefa-gold font-bold uppercase tracking-widest group border-b-2 border-shefa-gold pb-2 hover:gap-6 transition-all">
                Explore Solutions <ArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end gap-4 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-white">$300M</div>
                <div className="text-xs uppercase font-bold tracking-widest text-shefa-gold">Assets Under Processing</div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end gap-4 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-white">12%</div>
                <div className="text-xs uppercase font-bold tracking-widest text-shefa-gold">Target Yield for Lenders</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
