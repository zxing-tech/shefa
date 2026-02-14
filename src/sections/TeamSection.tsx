import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Russell Boyd',
    title: 'Director / CEO',
    image: '/russell-boyd.png',
    linkedin: '#',
  },
  {
    name: 'Dr. Surendran Sanggarin',
    title: 'Director / COO',
    image: '/dr-surendran.png',
    linkedin: '#',
  },
  {
    name: 'Dato\' Chik Nazrin',
    title: 'Director / CRO',
    image: '/dato-chik.png',
    linkedin: '#',
  },
  {
    name: 'Laura Daniel',
    title: 'Advisor',
    image: '/laura-daniel.png',
    linkedin: '#',
  },
];

const TeamSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-shefa-white">
      <div className="w-[86vw] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <span className="eyebrow block mb-4">Leadership</span>
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="heading-lg text-shefa-navy mb-4">
            Led by underwriters, not just{" "}
            <span className="text-shefa-gold">algorithms</span>
          </h2>
          <p className="body-lg">
            A team with decades of credit, trade, and risk experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              {/* Portrait */}
              <div className="relative aspect-[3/4] mb-5 image-card overflow-hidden bg-shefa-navy/5 rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* LinkedIn overlay */}
                <div className="absolute inset-0 bg-shefa-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={member.linkedin}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-shefa-navy" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="gold-rule mb-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <h3 className="font-heading text-base lg:text-lg font-medium text-shefa-navy mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-shefa-gray">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
