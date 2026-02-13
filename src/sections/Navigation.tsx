import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Borrowers', href: '#borrowers' }, // Note: This might need to be page navigation instead of scroll if it's a multi-page app, but assuming scroll for this section component for now or placeholders. Wait, the main nav is page based. This seems to be a single page scroll nav?  Let's stick to the request "Reduce the current multi-item menu to just two core links".
    { label: 'Lenders', href: '#lenders' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
          ? 'bg-shefa-navy/95 backdrop-blur-md shadow-sm border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img
                src="/shefa-white-logo.png"
                alt="Shefa"
                className="h-10 lg:h-12 w-auto transition-all"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${isScrolled ? 'text-white/90 hover:text-white' : 'text-shefa-navy/80 hover:text-shefa-navy'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className={`hidden lg:inline-flex px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${isScrolled
                  ? 'bg-shefa-gold text-shefa-navy hover:bg-shefa-gold/90'
                  : 'btn-primary text-sm py-3 px-6'
                  }`}
              >
                Get Started
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 ${isScrolled ? 'text-white' : 'text-shefa-navy'}`}
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
        className={`fixed inset-0 z-[999] bg-shefa-navy/98 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-heading font-medium text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
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
