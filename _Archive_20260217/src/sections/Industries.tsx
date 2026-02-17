import { Factory, Wheat, Truck, HardHat, Cpu, HeartPulse } from 'lucide-react';

const industries = [
  {
    name: 'Manufacturing',
    icon: Factory,
    image: '/coverage_factory.jpg',
  },
  {
    name: 'Agriculture',
    icon: Wheat,
    image: '/coverage_agriculture.jpg',
  },
  {
    name: 'Logistics',
    icon: Truck,
    image: '/coverage_port.jpg',
  },
  {
    name: 'Construction',
    icon: HardHat,
    image: '/claims_warehouse.jpg',
  },
  {
    name: 'Technology',
    icon: Cpu,
    image: '/why_meeting.jpg',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    image: '/hero_team_office.jpg',
  },
];

const Industries = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-shefa-white">
      <div className="w-[86vw] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <span className="eyebrow block mb-4">Industries</span>
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="heading-lg text-shefa-navy">
            We cover the sectors that{" "}
            <span className="text-shefa-gold">move the region</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group relative h-[220px] md:h-[280px] lg:h-[320px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1.5 hover:shadow-card"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shefa-black/80 via-shefa-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <div className="w-10 h-10 rounded-full bg-shefa-gold/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-sm lg:text-lg font-medium text-white">
                    {industry.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
