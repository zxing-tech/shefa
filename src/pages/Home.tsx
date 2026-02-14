import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <main className="relative bg-shefa-navy transition-all duration-700">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Visual Element (Mock for cinematic video/image) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-shefa-navy via-shefa-navy/80 to-shefa-cobalt/20 z-10" />
          {/* Subtle moving grid background */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />
          {/* Ambient Blue Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-shefa-cobalt/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="w-[86vw] mx-auto relative z-20">
          <div className="max-w-5xl space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-[0.5em] text-shefa-gold uppercase reveal-up active">
                Trade Finance // Global Strategy
              </span>
              <h1 className="font-heading text-6xl lg:text-[7.5rem] font-bold text-white leading-[0.9] tracking-tighter uppercase reveal-up active">
                Structural <br />
                <span className="text-shefa-gold drop-shadow-[0_0_15px_rgba(252,192,8,0.3)]">Resilience</span> <br />
                <span className="text-[0.6em] tracking-normal font-medium text-white/90">For the Global Economy.</span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-shefa-silver/80 max-w-2xl leading-relaxed reveal-up active">
              We structure trade finance solutions that bridge the gap between
              traditional banking limitations and the practical needs of industrial reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 reveal-up active">
              <button
                onClick={() => onNavigate('borrowers')}
                className="btn-gold px-12 py-5 text-[11px] tracking-[0.2em] w-full sm:w-auto"
              >
                I Need Funding
                <Zap className="w-5 h-5 ml-3" />
              </button>
              <button
                onClick={() => onNavigate('lenders')}
                className="btn-gold-outline px-12 py-5 text-[11px] tracking-[0.2em] w-full sm:w-auto"
              >
                I Want To Invest
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-[-10vw] top-[20vh] w-[40vw] h-[40vw] border border-white/5 rounded-full pointer-events-none hidden lg:block" />
      </section>

      {/* Trust Ticker (Marquee) */}
      <section className="py-12 bg-black/40 border-y border-white/5 relative z-30">
        <div className="flex animate-scroll whitespace-nowrap items-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-20 px-10 items-center">
              <div className="flex items-center gap-4 group">
                <Globe className="w-5 h-5 text-shefa-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">USD 300M+ Trade Finance Structured</span>
              </div>
              <div className="w-1.5 h-1.5 bg-shefa-gold rounded-full opacity-30" />
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-shefa-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">15+ Years Experience</span>
              </div>
              <div className="w-1.5 h-1.5 bg-shefa-gold rounded-full opacity-30" />
              <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 text-shefa-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">0% Default Rate on Insured Notes</span>
              </div>
              <div className="w-1.5 h-1.5 bg-shefa-gold rounded-full opacity-30" />
              <div className="flex items-center gap-8">
                <span className="text-[10px] uppercase font-mono text-shefa-silver/40">Partners:</span>
                <span className="text-[11px] font-black uppercase text-white/20">Coface</span>
                <span className="text-[11px] font-black uppercase text-white/20">Allianz</span>
                <span className="text-[11px] font-black uppercase text-white/20">Atradius</span>
              </div>
              <div className="w-1.5 h-1.5 bg-shefa-gold rounded-full opacity-30" />
            </div>
          ))}
        </div>
      </section>

      {/* Second Section: Value Proposition */}
      <section className="py-32 relative bg-shefa-navy overflow-hidden">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white uppercase leading-tight reveal-up active">
                  Digital Assets. <br />
                  <span className="text-shefa-gold">Real-World</span> Integration.
                </h2>
                <div className="w-24 h-1 bg-shefa-gold" />
              </div>
              <p className="text-lg text-shefa-silver/70 leading-relaxed reveal-up active">
                Financing Southeast Asia's industrial growth by digitizing trade assets.
                Our platform connects institutional liquidity with resilient supply chains,
                creating a secure ecosystem for global trade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal-up active">
                <div className="p-6 border-l border-shefa-gold/30 bg-white/5 rounded-r-xl">
                  <div className="text-2xl font-bold text-white mb-2 underline decoration-shefa-gold decoration-2 underline-offset-4 tracking-tighter">Secured</div>
                  <p className="text-xs text-shefa-silver/60 uppercase font-mono tracking-widest">AA-Rated Insurance Protection</p>
                </div>
                <div className="p-6 border-l border-shefa-gold/30 bg-white/5 rounded-r-xl">
                  <div className="text-2xl font-bold text-white mb-2 underline decoration-shefa-gold decoration-2 underline-offset-4 tracking-tighter">Regulated</div>
                  <p className="text-xs text-shefa-silver/60 uppercase font-mono tracking-widest">KLDX Exchange Listed</p>
                </div>
              </div>
            </div>

            <div className="relative group reveal-up active">
              <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 relative overflow-hidden flex items-center justify-center">
                {/* Visualizing "Secured" with an animated isometric box or similar */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('/Logo-Shefa-Risk-Management-OL_Shefa-Icon.png')] bg-center bg-no-repeat bg-contain transform scale-50" />
                <div className="w-[60%] h-[60%] border border-shefa-gold/30 rotate-45 group-hover:rotate-[225deg] transition-transform duration-1000 p-8">
                  <div className="w-full h-full border border-shefa-gold/30 rotate-45" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  <span className="font-heading text-6xl font-black text-white group-hover:text-shefa-gold transition-colors">12%</span>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-shefa-silver">Target Yield</div>
                </div>
              </div>
              {/* Gold Glow Behind */}
              <div className="absolute inset-0 bg-shefa-gold/5 blur-[100px] rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
