import { ArrowRight } from 'lucide-react';

const ProtectionAction = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative w-full py-20 lg:py-32 bg-shefa-black"
    >
      <div className="w-[86vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw] items-center">
          <div className="image-card h-[300px] lg:h-[64vh] overflow-hidden order-2 lg:order-1 relative">
            <img
              src="/protection_wharf_cargo.jpg"
              alt="Cargo Protection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shefa-black/40 to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-shefa-white mb-6">
              When a buyer cannot pay,{" "}
              <span className="text-shefa-gold">your policy does.</span>
            </h2>
            <p className="body-lg text-shefa-white/80 mb-6">
              We verify the default, compile the paperwork, and pursue recovery so
              your team stays focused on operations.
            </p>
            <p className="body-base text-shefa-white/60 mb-8">
              Our end-to-end claims management includes legal support, debt
              recovery, and continuous monitoring of your buyer portfolio.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-shefa-gold text-shefa-black font-medium rounded-pill transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              Talk to a specialist
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionAction;
