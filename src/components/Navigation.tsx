import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'industries' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

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
        { label: 'Invoice Financing', hash: '#invoice-financing' },
        { label: 'Supply Chain Financing', hash: '#scf' }
      ]
    },
    { label: 'Lenders', page: 'lenders' },
  ];

  const handleNavigate = (page: Page, hash?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 active:scale-95 transition-transform"
          >
            <div className="w-11 h-11 bg-shefa-gold rounded-xl flex items-center justify-center font-black text-shefa-navy text-2xl shadow-xl">
              S
            </div>
            <div className="flex flex-col items-start">
              <span className="font-heading font-black text-xl tracking-tighter text-foreground leading-none">
                SHEFA
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-shefa-gold">Risk Management</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group/nav"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavigate(link.page)}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-1.5 py-2 ${currentPage === link.page ? 'text-shefa-gold' : 'text-foreground/70 hover:text-foreground'
                    }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </button>

                {link.dropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="bg-card border border-border rounded-[20px] p-3 w-64 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shefa-gold to-shefa-cobalt" />
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          className="w-full text-left px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-foreground/60 hover:text-shefa-gold hover:bg-shefa-gold/5 rounded-xl transition-all"
                          onClick={() => handleNavigate(link.page, item.hash)}
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

          {/* Extra Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Selector */}
            <div className="relative group/lang">
              <button className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors py-2">
                <Globe size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">EN</span>
              </button>
              <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 transform group-hover/lang:translate-y-0 translate-y-2">
                <div className="bg-card border border-border rounded-xl p-2 w-28 shadow-2xl">
                  {['EN', 'BM', '中'].map(lang => (
                    <button key={lang} className="w-full text-center py-2.5 text-[9px] font-black uppercase tracking-widest text-foreground/60 hover:text-shefa-gold hover:bg-shefa-gold/5 rounded-lg transition-all">{lang}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavigate('borrowers')}
              className="bg-shefa-gold text-shefa-navy px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:brightness-105 active:scale-95 transition-all shadow-xl hover:shadow-glow-gold"
            >
              Get Funded
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-background lg:hidden transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 p-12 text-center">
          <div className="space-y-8 w-full">
            {navLinks.map((link) => (
              <div key={link.label} className="space-y-4">
                <button
                  onClick={() => handleNavigate(link.page)}
                  className="text-3xl font-heading font-black uppercase tracking-tighter text-foreground"
                >
                  {link.label}
                </button>
                {link.dropdown && (
                  <div className="flex flex-col gap-4">
                    {link.dropdown.map(item => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigate(link.page, item.hash)}
                        className="text-xs font-black uppercase tracking-[0.2em] text-foreground/40 hover:text-shefa-gold"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-border" />

          <div className="flex items-center justify-center gap-12 w-full">
            <button onClick={toggleTheme} className="flex flex-col items-center gap-2 text-foreground font-black uppercase text-[9px] tracking-widest">
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-1">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </div>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <div className="flex flex-col items-center gap-2 text-foreground font-black uppercase text-[9px] tracking-widest">
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-1">
                <Globe size={20} />
              </div>
              EN
            </div>
          </div>

          <button
            onClick={() => handleNavigate('borrowers')}
            className="w-full bg-shefa-gold text-shefa-navy py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl"
          >
            Get Funded
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
