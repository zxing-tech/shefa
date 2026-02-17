import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple entrance animation using CSS
    const timer = setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'translateX(0)';
      }
      if (contentRef.current) {
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-shefa-white"
    >
      {/* Left Image Panel with curved mask */}
      <div
        ref={imageRef}
        className="absolute left-0 top-0 w-full lg:w-[52vw] h-[50vh] lg:h-full overflow-hidden transition-all duration-1000 ease-out opacity-0 -translate-x-12"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
        }}
      >
        <img
          src="/hero_team_office.jpg"
          alt="Shefa Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-shefa-white/20" />
      </div>

      {/* Right Content Panel */}
      <div
        ref={contentRef}
        className="absolute right-0 top-[50vh] lg:top-0 w-full lg:w-[48vw] min-h-[50vh] lg:h-full flex flex-col justify-center px-6 lg:px-[clamp(22px,3vw,56px)] pt-8 lg:pt-0 transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        {/* Eyebrow */}
        <div className="eyebrow mb-4 lg:mb-6">Shefa Risk Management</div>

        {/* Headline */}
        <h1 className="heading-xl text-shefa-navy mb-4 lg:mb-8">
          <span className="block">Protect your</span>
          <span className="block">
            receivables.{" "}
            <span className="text-shefa-gold">Unlock</span>
          </span>
          <span className="block">your cash flow.</span>
        </h1>

        {/* Subheadline */}
        <p className="body-lg max-w-md mb-6 lg:mb-10">
          Trade credit insurance and financing solutions that keep your business
          moving—backed by data, delivered with clarity.
        </p>

        {/* CTA Row */}
        <div className="flex flex-wrap gap-3 lg:gap-4">
          <button onClick={() => scrollToSection('#contact')} className="btn-primary text-sm lg:text-base py-3 lg:py-4 px-5 lg:px-8">
            Get a quote
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection('#how-it-works')}
            className="btn-secondary text-sm lg:text-base py-3 lg:py-4 px-5 lg:px-8"
          >
            How it works
          </button>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-shefa-gray">
        <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
