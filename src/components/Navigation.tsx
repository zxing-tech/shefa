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
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled
          ? 'bg-shefa-navy/80 backdrop-blur-xl border-b border-white/10 py-4'
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
              <div className="w-10 h-10 bg-shefa-cobalt rounded-lg flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <div className="w-5 h-5 border-2 border-white" />
              </div>
              <span className="font-heading text-2xl tracking-widest text-white">SHEFA</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNavigate(link.page)}
                    className={`text-sm tracking-widest uppercase font-medium transition-all relative group ${currentPage === link.page ? 'text-white' : 'text-shefa-silver hover:text-white'
                      }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-2 left-0 h-[1px] bg-shefa-cobalt transition-all duration-300 ${currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleNavigate('contact')}
                className="btn-primary py-3 px-8 text-xs tracking-widest uppercase"
              >
                Get Started
              </button>
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
        className={`fixed inset-0 z-[999] bg-shefa-navy transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.page}
            onClick={() => handleNavigate(link.page)}
            className="font-heading text-3xl tracking-widest text-white uppercase"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavigate('contact')}
          className="btn-primary"
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navigation;
