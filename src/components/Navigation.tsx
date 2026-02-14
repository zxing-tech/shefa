import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'industries' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page; dropdown?: { label: string; hash: string }[] }[] = [
    { label: 'Home', page: 'home' },
    {
      label: 'Borrowers',
      page: 'borrowers',
      dropdown: [
        { label: 'Invoice Financing', hash: '#invoice' },
        { label: 'Supply Chain Finance', hash: '#supply-chain' }
      ]
    },
    { label: 'Lenders', page: 'lenders' },
    { label: 'Services', page: 'services' },
    { label: 'Industries', page: 'industries' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled
          ? 'bg-shefa-navy/90 backdrop-blur-xl border-b border-white/10 py-4'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-shefa-gold rounded-lg flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-glow-gold">
                <div className="w-5 h-5 border-2 border-shefa-navy" />
              </div>
              <span className="font-heading text-2xl tracking-widest text-white uppercase">Shefa</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <div key={link.page} className="relative group/nav">
                    <button
                      onClick={() => handleNavigate(link.page)}
                      className={`text-[11px] tracking-[0.2em] uppercase font-bold transition-all flex items-center gap-1 ${currentPage === link.page ? 'text-shefa-gold' : 'text-shefa-silver hover:text-white'
                        }`}
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform" />}
                      <span className={`absolute -bottom-2 left-0 h-[1px] bg-shefa-gold transition-all duration-300 ${currentPage === link.page ? 'w-full' : 'w-0 group-hover/nav:w-full'
                        }`} />
                    </button>

                    {link.dropdown && (
                      <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                        <div className="bg-shefa-navy/95 backdrop-blur-2xl border border-white/10 rounded-xl p-4 w-64 shadow-2xl">
                          {link.dropdown.map((item) => (
                            <button
                              key={item.label}
                              className="w-full text-left px-4 py-3 text-[10px] tracking-widest uppercase font-bold text-shefa-silver hover:text-white hover:bg-white/5 rounded-lg transition-all"
                              onClick={() => {
                                handleNavigate(link.page);
                                setTimeout(() => {
                                  document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              }}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="btn-gold py-2.5 px-6 text-[10px] tracking-[0.2em] uppercase"
                >
                  Contact
                </button>
                <button className="btn-gold-outline py-2.5 px-6 text-[10px] tracking-[0.2em] uppercase">
                  Client Login
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-shefa-navy transition-all duration-500 flex flex-col items-center justify-center gap-6 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
          }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.page}
            onClick={() => handleNavigate(link.page)}
            className="font-heading text-2xl tracking-[0.2em] text-white uppercase hover:text-shefa-gold transition-colors"
          >
            {link.label}
          </button>
        ))}
        <div className="flex flex-col gap-4 mt-8 w-[80vw]">
          <button
            onClick={() => handleNavigate('contact')}
            className="btn-gold w-full"
          >
            Contact
          </button>
          <button className="btn-gold-outline w-full">
            Client Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
