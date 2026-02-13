import { ArrowRight, Bell, FileText, RotateCcw } from 'lucide-react';

const steps = [
  { label: 'Notify', icon: Bell },
  { label: 'Document', icon: FileText },
  { label: 'Recover', icon: RotateCcw },
];

const ClaimsExperience = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-shefa-white">
      <div className="w-[86vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw] items-center">
          {/* Left Image */}
          <div className="relative h-[300px] lg:h-[50vh] image-card overflow-hidden">
            <img
              src="/claims_warehouse.jpg"
              alt="Claims Process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="eyebrow block mb-4">Claims</span>
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-shefa-navy mb-6">
              Claims that don&apos;t feel like a{" "}
              <span className="text-shefa-gold">battle</span>
            </h2>
            <p className="body-lg mb-8">
              Clear documentation, direct communication, and a team that knows
              credit law and recovery. We handle the complexity so you can focus
              on your business.
            </p>

            {/* Step Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-shefa-navy/5 rounded-full"
                  >
                    <Icon className="w-4 h-4 text-shefa-gold" />
                    <span className="text-sm font-medium text-shefa-navy">
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button className="btn-outline">
              See claims checklist
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimsExperience;
