import { Linkedin } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Russell Boyd",
      role: "Director / CEO",
      bio: "MBA INSEAD. 20+ years in private equity and credit structuring (Navis Capital, Creador).",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop", // Placeholder: Portrait of Caucasian man
    },
    {
      name: "Dr. Surendran Sanggarin",
      role: "Director / COO",
      bio: "18+ years in financial instruments and business strategy.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2000&auto=format&fit=crop", // Placeholder: Portrait of Indian man
    },
    {
      name: "Dato' Chik Nazrin",
      role: "Director / CRO",
      bio: "Ex-PWC & Shell. 13 years in audit and risk compliance.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop", // Placeholder: Portrait of Malay man
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-shefa-navy text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(252,192,8,0.2),transparent_50%)]" />
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-[7rem] font-heading font-extrabold uppercase leading-[0.9] tracking-tighter">
              Stewards <br /> Of <span className="text-shefa-gold">Capital.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A leadership team forged in private equity, risk compliance, and industrial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground">Leadership</h2>
                <div className="w-24 h-1.5 bg-shefa-gold" />
              </div>
              <p className="text-foreground/60 text-lg max-w-xl">
                Our directors bring institutional rigor to Malaysia's trade finance sector, ensuring every note is structured for maximum stability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {team.map((member, i) => (
                <div key={i} className="group space-y-8">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-card border border-border shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shefa-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <button className="absolute bottom-6 right-6 w-12 h-12 bg-shefa-gold text-shefa-navy rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-xl">
                      <Linkedin size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 p-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-extrabold uppercase text-foreground">{member.name}</h3>
                      <div className="text-shefa-gold font-bold uppercase tracking-widest text-xs">{member.role}</div>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-heading font-extrabold uppercase text-foreground">Our Philosophy</h2>
            <p className="text-2xl text-foreground font-light leading-relaxed">
              "We believe that <span className="text-shefa-gold font-bold">transparency</span> and <span className="text-shefa-gold font-bold">institutional-grade risk mapping</span> are the only ways to build a truly resilient trade finance ecosystem."
            </p>
            <div className="flex justify-center">
              <span className="w-16 h-1 bg-shefa-gold rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
