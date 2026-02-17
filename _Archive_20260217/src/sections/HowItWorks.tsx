import { Search, Shield, Banknote } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We analyze your buyer portfolio and trade patterns. Our team evaluates creditworthiness and identifies the optimal coverage structure for your business.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Insure',
    description:
      'Get a tailored policy with clear limits and premiums. Our insurance-backed protection ensures you are covered against buyer defaults and non-payment.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Collect',
    description:
      'If a buyer defaults, we handle claims and recovery. You receive payment while we pursue recovery through our established legal networks.',
    icon: Banknote,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-20 lg:py-32 bg-shefa-white"
    >
      <div className="w-[86vw] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-16">
          <span className="eyebrow block mb-4">The Process</span>
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="heading-lg text-shefa-navy mb-4">
            Three steps to{" "}
            <span className="text-shefa-gold">protected revenue</span>
          </h2>
          <p className="body-lg">
            From policy setup to first claim—simple, transparent, and fast.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[3vw]">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="card card-hover p-6 lg:p-10"
              >
                {/* Number and Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-4xl lg:text-5xl font-bold text-shefa-gold/30">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-shefa-navy/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-shefa-navy" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl lg:text-2xl font-medium text-shefa-navy mb-4">
                  {step.title}
                </h3>
                <p className="body-base text-sm lg:text-base">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
