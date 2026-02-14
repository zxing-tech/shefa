import { ArrowRight, TrendingUp, Shield } from 'lucide-react';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <main className="relative">
      {/* Animated Contour Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-shefa-navy">
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contour" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#0047AB" strokeWidth="0.5" opacity="0.3" />
              <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="#0047AB" strokeWidth="0.5" opacity="0.2" />
              <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="#0047AB" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contour)" />
        </svg>
      </div>

      {/* SECTION A: Split-Screen Hero */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 py-32">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Side: Text */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <span className="font-mono text-xs tracking-[0.3em] text-shefa-cobalt uppercase block">
                  Trade Finance Solutions
                </span>
                <h1 className="font-heading text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight uppercase">
                  Institutional Security.<br />
                  <span className="text-shefa-cobalt">Economic Momentum.</span>
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-shefa-silver/90 leading-relaxed max-w-2xl">
                Bridging the liquidity gap for Malaysia's industrial backbone.
              </p>
            </div>

            {/* Right Side: Glass Cards Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right duration-1000 delay-200">

              {/* Card 1: BORROWERS */}
              <button
                onClick={() => onNavigate('borrowers')}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-12 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:border-shefa-cobalt/50 hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-shefa-cobalt/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-shefa-cobalt/20 flex items-center justify-center group-hover:bg-shefa-cobalt/30 transition-colors">
                    <TrendingUp className="w-8 h-8 text-shefa-cobalt" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl lg:text-2xl font-medium text-white uppercase tracking-wider">
                      Borrowers
                    </h3>
                    <p className="text-sm text-shefa-silver/80 leading-relaxed">
                      Unlock Working Capital
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-shefa-cobalt group-hover:gap-4 transition-all">
                    <span className="text-sm font-medium uppercase tracking-wider">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Card 2: LENDERS */}
              <button
                onClick={() => onNavigate('lenders')}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-12 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:border-shefa-gold/50 hover:shadow-[0_0_30px_#FCC00866]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-shefa-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-shefa-gold/20 flex items-center justify-center group-hover:bg-shefa-gold/30 transition-colors">
                    <Shield className="w-8 h-8 text-shefa-gold" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl lg:text-2xl font-medium text-white uppercase tracking-wider">
                      Lenders
                    </h3>
                    <p className="text-sm text-shefa-silver/80 leading-relaxed">
                      Earn Secured Yields
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-shefa-gold group-hover:gap-4 transition-all">
                    <span className="text-sm font-medium uppercase tracking-wider">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Key Metrics Ticker */}
      <section className="relative z-10 py-16 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">

              {/* Metric 1 */}
              <div className="group text-center md:text-left space-y-3">
                <div className="font-heading text-5xl lg:text-6xl font-bold text-white group-hover:text-shefa-cobalt transition-colors duration-300">
                  USD 300M+
                </div>
                <div className="space-y-1">
                  <div className="text-xs tracking-[0.3em] font-heading text-shefa-cobalt uppercase">
                    Trade Finance Structured
                  </div>
                  <p className="text-sm text-shefa-silver/70 leading-relaxed">
                    Across resilient Southeast Asian sectors.
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="group text-center md:text-left space-y-3">
                <div className="font-heading text-5xl lg:text-6xl font-bold text-white group-hover:text-shefa-cobalt transition-colors duration-300">
                  15+ Years
                </div>
                <div className="space-y-1">
                  <div className="text-xs tracking-[0.3em] font-heading text-shefa-cobalt uppercase">
                    Expertise In Trade Finance
                  </div>
                  <p className="text-sm text-shefa-silver/70 leading-relaxed">
                    Proven track record in risk mitigation.
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="group text-center md:text-left space-y-3">
                <div className="font-heading text-5xl lg:text-6xl font-bold text-white group-hover:text-shefa-gold transition-colors duration-300">
                  0%
                </div>
                <div className="space-y-1">
                  <div className="text-xs tracking-[0.3em] font-heading text-shefa-gold uppercase">
                    Target Default On Insured Notes
                  </div>
                  <p className="text-sm text-shefa-silver/70 leading-relaxed">
                    Credit insurance-backed performance.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative z-10 py-32 bg-shefa-navy">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto text-center space-y-12">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-[0.3em] text-shefa-cobalt uppercase">
                Our Mission
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-white leading-tight uppercase">
                Powering Malaysia's<br />
                <span className="text-shefa-cobalt">Growth Engine</span>
              </h2>
            </div>

            <p className="text-xl text-shefa-silver/90 leading-relaxed max-w-3xl mx-auto">
              Shefa combines institutional-grade credit insurance with digital capital markets infrastructure
              to unlock working capital for Malaysia's industrial sectors while delivering superior risk-adjusted
              returns to sophisticated investors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button
                onClick={() => onNavigate('borrowers')}
                className="btn-primary"
              >
                For Borrowers
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('lenders')}
                className="btn-outline"
              >
                For Lenders
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
