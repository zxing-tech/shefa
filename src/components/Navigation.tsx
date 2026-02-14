import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'borrowers' | 'lenders' | 'about' | 'services' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Borrowers', page: 'borrowers' },
    { label: 'Lenders', page: 'lenders' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
          ? 'bg-shefa-navy/95 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/50 to-transparent'
          }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-3"
            >
              <img
                src="/Logo-Shefa-Risk-Management-OL_Shefa-White.png"
                alt="Shefa Risk Management"
                className="h-10 lg:h-12 w-auto transition-all"
              />
            </button>

            {/* Desktop Navigation Group - Moved to Right */}
            <div className="hidden lg:flex items-center gap-12 ml-auto mr-8">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavigate(link.page)}
                  className={`text-base font-medium transition-colors relative group ${currentPage === link.page ? 'text-shefa-gold' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-shefa-gold transition-all duration-300 ${currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </button>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavigate('contact')}
                className={`hidden lg:inline-flex px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${isScrolled
                  ? 'bg-shefa-gold text-shefa-navy hover:bg-shefa-gold/90'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                  }`}
              >
                Get Started
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors text-white`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-shefa-navy/98 backdrop-blur-xl transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavigate(link.page)}
              className={`text-2xl font-heading font-medium ${currentPage === link.page ? 'text-shefa-gold' : 'text-white'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigate('contact')}
            className="btn-primary mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
