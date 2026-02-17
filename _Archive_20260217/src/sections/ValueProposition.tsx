import { ArrowRight } from 'lucide-react';

const ValueProposition = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-32 bg-shefa-white"
    >
      <div className="w-[86vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw]">
          <div>
            <span className="eyebrow block mb-4">Our Approach</span>
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-shefa-navy">
              We turn credit risk into a{" "}
              <span className="text-shefa-gold">competitive advantage.</span>
            </h2>
          </div>

          <div className="lg:pt-16">
            <p className="body-lg mb-6">
              Most businesses lose sleep over late payments. We remove the
              uncertainty so you can sell more, ship faster, and plan ahead.
            </p>
            <p className="body-base mb-8">
              Our policies cover domestic and export receivables, with fast claims
              and clear terms. Whether you are a growing SME or an established
              enterprise, we tailor coverage to your trade patterns.
            </p>
            <button
              onClick={() => scrollToSection('#coverage')}
              className="inline-flex items-center text-shefa-navy font-medium hover:text-shefa-gold transition-colors group"
            >
              See coverage details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 lg:ml-auto lg:w-[50%]">
          <div className="image-card h-[250px] lg:h-[36vh] overflow-hidden">
            <img
              src="/approach_handshake.jpg"
              alt="Business Partnership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
