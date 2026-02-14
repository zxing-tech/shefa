import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'industries' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page, hash?: string) => void;
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

  const navLinks = [
    {
      label: 'Borrowers',
      page: 'borrowers' as Page,
      dropdown: [
        { label: 'Invoice Financing', hash: '#invoice-financing' },
        { label: 'Supply Chain Financing', hash: '#scf' }
      ]
    },
    { label: 'Lenders', page: 'lenders' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'Industries', page: 'industries' as Page },
    {
      label: 'Company',
      page: 'about' as Page,
      dropdown: [
        { label: 'About Us', hash: '#about' },
        { label: 'Team', hash: '#leadership' },
        { label: 'Contact', hash: '#contact', page: 'contact' as Page }
      ]
    },
  ];

  const handleNavigate = (page: Page, hash?: string) => {
    onNavigate(page, hash);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };



  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border py-4 shadow-xl' : 'bg-transparent py-8'
          }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex flex-col items-start active:scale-95 transition-transform group"
          >
            <span className="font-heading font-black text-2xl tracking-[2px] uppercase text-foreground leading-none">
              <span className="border-b-4 border-secondary pb-0.5">SHEFA</span>
            </span>
            <span className={`text-[8px] font-black uppercase tracking-[0.4em] mt-1.5 ${theme === 'dark' ? 'text-secondary' : 'text-primary'}`}>Risk Management</span>
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
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-1.5 py-2 ${currentPage === link.page ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                    }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </button>

                {link.dropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="bg-card border border-border rounded-[20px] p-3 w-64 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          className="w-full text-left px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                          onClick={() => handleNavigate(item.page || link.page, item.hash)}
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
            <div className="flex items-center gap-2 text-foreground/60">
              <Globe size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">EN</span>
            </div>

            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => handleNavigate('borrowers')}
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:brightness-105 active:scale-95 transition-all shadow-xl hover:shadow-glow-gold"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-background lg:hidden transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 p-12 text-center overflow-y-auto">
          <div className="space-y-8 w-full">
            {navLinks.map((link) => (
              <div key={link.label} className="space-y-4">
                <button
                  onClick={() => handleNavigate(link.page)}
                  className="text-4xl font-heading font-black uppercase tracking-tighter text-foreground"
                >
                  {link.label}
                </button>
                {link.dropdown && (
                  <div className="flex flex-col gap-4">
                    {link.dropdown.map(item => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigate(item.page || link.page, item.hash)}
                        className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40"
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
            <button onClick={toggleTheme} className="flex flex-col items-center gap-2 text-foreground font-black uppercase text-[10px] tracking-widest">
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-1">
                {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
              </div>
              Theme
            </button>
            <div className="flex flex-col items-center gap-2 text-foreground font-black uppercase text-[10px] tracking-widest">
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-1">
                <Globe size={22} />
              </div>
              EN
            </div>
          </div>

          <button
            onClick={() => handleNavigate('borrowers')}
            className="w-full bg-secondary text-secondary-foreground py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl"
          >
            Get Funded
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
