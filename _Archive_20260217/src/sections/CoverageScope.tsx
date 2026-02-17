import { Home, Globe, User, Building2, ShieldCheck, ClipboardList } from 'lucide-react';

const coverageItems = [
  {
    title: 'Domestic Receivables',
    description:
      'Protect your local trade with comprehensive coverage for Malaysian buyers across all industries.',
    icon: Home,
    image: '/coverage_factory.jpg',
  },
  {
    title: 'Export Credit Coverage',
    description:
      'Expand confidently into ASEAN and global markets with political and commercial risk protection.',
    icon: Globe,
    image: '/coverage_port.jpg',
  },
  {
    title: 'Single Buyer Policies',
    description:
      'Focused protection for your largest or most critical trading relationships.',
    icon: User,
    image: '/approach_handshake.jpg',
  },
  {
    title: 'Whole Turnover',
    description:
      'Comprehensive coverage for your entire buyer portfolio with streamlined administration.',
    icon: Building2,
    image: '/why_meeting.jpg',
  },
  {
    title: 'Political Risk',
    description:
      'Safeguard against government actions, currency inconvertibility, and expropriation risks.',
    icon: ShieldCheck,
    image: '/protection_wharf_cargo.jpg',
  },
  {
    title: 'Collections Support',
    description:
      'Professional debt collection services to recover outstanding payments efficiently.',
    icon: ClipboardList,
    image: '/claims_warehouse.jpg',
  },
];

const CoverageScope = () => {
  return (
    <section
      id="coverage"
      className="relative w-full py-20 lg:py-32 bg-shefa-white"
    >
      <div className="w-[86vw] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow block mb-4">What We Cover</span>
          <div className="gold-rule mb-6" />
          <h2 className="heading-lg text-shefa-navy mb-4">
            Coverage built for{" "}
            <span className="text-shefa-gold">real trade</span>
          </h2>
          <p className="body-lg max-w-2xl">
            Domestic or cross-border, single buyer or full portfolio—we have
            the right solution for your business.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E9ECEF] transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shefa-black/60 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-shefa-gold flex items-center justify-center">
                    <Icon className="w-5 h-5 text-shefa-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-medium text-shefa-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="body-base text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoverageScope;
