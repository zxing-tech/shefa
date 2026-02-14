import { ArrowRight, Factory, ShieldCheck } from 'lucide-react';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home = ({ navigateTo }: HomeProps) => {
  return (
    <main className="bg-shefa-navy min-h-screen pt-20 overflow-hidden">
      {/* Hero Header */}
      <section className="relative z-10 pt-20 pb-12 text-center px-6">
        <h1 className="heading-xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Institutional Security.<br />
          <span className="text-shefa-cobalt">Economic Momentum.</span>
        </h1>
        <p className="body-lg max-w-2xl mx-auto text-shefa-silver animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          Bridging the liquidity gap for Malaysia's industrial backbone with insurance-backed private credit solutions.
        </p>
      </section>

      {/* Split Cards Section */}
      <section className="relative z-10 w-full px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">

          {/* LEFT PANEL: Borrowers */}
          <div
            onClick={() => navigateTo('borrowers')}
            className="group relative h-[600px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-shefa-cobalt/50 transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,71,171,0.15)]"
          >
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
              <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(0,119,182,0.1)_50%,transparent_55%)] bg-[length:100px_100px]" />
            </div>

            <div className="relative h-full p-12 flex flex-col items-center text-center justify-between">
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Factory className="w-10 h-10 text-shefa-silver group-hover:text-white transition-colors" />
              </div>

              <div>
                <span className="text-xs tracking-[0.3em] font-heading text-shefa-cobalt uppercase mb-4 block">For MSMEs & Corporates</span>
                <h2 className="heading-lg mb-6 group-hover:text-shefa-cobalt transition-colors">Unlock Working<br />Capital</h2>
                <p className="body-base max-w-sm mx-auto text-shefa-silver group-hover:text-white transition-colors">
                  Don't wait 90 days. Convert your invoices into immediate cash. 80% advance rate with non-recourse insurance protection.
                </p>
              </div>

              <button className="btn-outline w-full max-w-xs group-hover:bg-white group-hover:text-shefa-navy">
                Get Funded
                <ArrowRight className="ml-3 w-4 h-4" />
              </button>
            </div>

            {/* Glowing Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-shefa-cobalt/0 group-hover:bg-shefa-cobalt/100 transition-all duration-700" />
          </div>

          {/* RIGHT PANEL: Lenders */}
          <div
            onClick={() => navigateTo('lenders')}
            className="group relative h-[600px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-shefa-cobalt/50 transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,71,171,0.2)]"
          >
            {/* Blueprint Motif Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,71,171,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,71,171,0.1)_1px,transparent_1px)', backgroundSize: '80px 80px' }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-shefa-cobalt/10 blur-[120px]" />
            </div>

            <div className="relative h-full p-12 flex flex-col items-center text-center justify-between">
              <div className="w-20 h-20 rounded-2xl bg-shefa-cobalt/20 flex items-center justify-center border border-shefa-cobalt/30 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>

              <div>
                <span className="text-xs tracking-[0.3em] font-heading text-shefa-cobalt uppercase mb-4 block">For Sophisticated Investors</span>
                <h2 className="heading-lg mb-6 group-hover:text-shefa-cobalt transition-colors">Earn Secured<br />Yields</h2>
                <p className="body-base max-w-sm mx-auto text-shefa-silver group-hover:text-white transition-colors">
                  Access private credit assets backed by trade insurance. Target returns of up to 12% p.a. with short 12-18 month tenures.
                </p>
              </div>

              <button className="btn-primary w-full max-w-xs">
                Start Investing
                <ArrowRight className="ml-3 w-4 h-4" />
              </button>
            </div>

            {/* Glowing Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/0 group-hover:bg-white/100 transition-all duration-700" />
          </div>

        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-t border-white/5 bg-black/20">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] tracking-[0.5em] font-heading text-white uppercase whitespace-nowrap">Secured by partnerships with</span>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
              {['Coface', 'Allianz', 'Atradius', 'KLDX'].map((partner) => (
                <span key={partner} className="font-heading text-lg lg:text-xl tracking-[0.2em] text-white/50">{partner}</span>
              ))}
            </div>
            <span className="text-[10px] tracking-[0.2em] font-sans text-white/30 hidden lg:block">REGULATED BY SECURITIES COMMISSION MALAYSIA</span>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="w-full px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('about')} className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">About Us</button>
            <button onClick={() => navigateTo('contact')} className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">Contact</button>
            <a href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[10px] tracking-widest uppercase text-white/20">© 2026 Shefa Risk Management. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
