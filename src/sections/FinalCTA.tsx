import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-shefa-black">
      <div className="w-[86vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw] items-center">
          <div className="image-card h-[300px] lg:h-[64vh] overflow-hidden order-2 lg:order-1 relative">
            <img
              src="/cta_container.jpg"
              alt="Get Started"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shefa-black/40 to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-shefa-white mb-6">
              Ready to protect your{" "}
              <span className="text-shefa-gold">revenue?</span>
            </h2>
            <p className="body-lg text-shefa-white/80 mb-8">
              Get a tailored indication in 48 hours. No obligation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-shefa-gold text-shefa-black font-medium rounded-pill transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
              >
                Request a quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <a
                href="mailto:enquiries@shefa.com.my"
                className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 border border-shefa-white/30 text-shefa-white font-medium rounded-pill transition-all duration-200 hover:-translate-y-0.5 hover:bg-shefa-white/10"
              >
                <Mail className="mr-2 w-4 h-4" />
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
