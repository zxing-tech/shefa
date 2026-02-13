import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Shefa helped us insure a major export buyer—now we ship with confidence. Their team's understanding of cross-border trade is exceptional.",
    author: 'CFO',
    company: 'Manufacturing Sdn Bhd',
    location: 'Selangor, Malaysia',
  },
  {
    quote:
      'The claims process was transparent from day one. When our buyer defaulted, Shefa had our back and we received payment within weeks.',
    author: 'Finance Director',
    company: 'Agriculture Export Co',
    location: 'Johor, Malaysia',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-shefa-white">
      <div className="w-[86vw] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <span className="eyebrow block mb-4">Testimonials</span>
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="heading-lg text-shefa-navy">
            Trusted by businesses{" "}
            <span className="text-shefa-gold">across Malaysia</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 lg:p-10 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 lg:top-10 right-6 lg:right-10 w-12 h-12 rounded-full bg-shefa-gold/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-shefa-gold" />
              </div>

              {/* Quote text */}
              <blockquote className="text-base lg:text-xl text-shefa-navy leading-relaxed mb-8 pr-16">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-shefa-navy/10 flex items-center justify-center">
                  <span className="font-heading font-medium text-shefa-navy">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-shefa-navy">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-shefa-gray">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-shefa-gray/70">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
