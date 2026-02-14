import { Linkedin, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Russell Boyd",
      role: "Director / CEO",
      bio: "20+ years in global trade finance and private equity structuring.",
      image: "/russell-boyd.png",
    },
    {
      name: "Dr. Surendran Sanggarin",
      role: "Director / COO",
      bio: "Operations specialist with 18+ years in financial strategy.",
      image: "/dr-surendran.png",
    },
    {
      name: "Dato' Chik Nazrin",
      role: "Director / CRO",
      bio: "Risk & Compliance veteran. Former PWC & Shell.",
      image: "/dato-chik.png",
    },
    {
      name: "Laura Daniel",
      role: "Advisor",
      bio: "Strategic advisor with deep expertise in Malaysian trade and financial governance.",
      image: "/laura-daniel.png",
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section id="about" className="bg-background text-foreground py-24 lg:py-48 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/hero_team_office.jpg" className="w-full h-full object-cover grayscale" alt="Shefa HQ" />
        </div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto text-center space-y-10">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Stewards of Capital</span>
            <h1 className="text-6xl lg:text-[9rem] font-heading font-extrabold uppercase leading-[0.85] tracking-tighter">
              BRED IN <br /> <span className="text-secondary">RISK.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-foreground/70 max-w-4xl mx-auto font-light leading-relaxed">
              A leadership team forged in private equity, audit rigor, and industrial operations.
              We don't just facilitate trade; we protect it.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section id="leadership" className="py-24 lg:py-40">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto space-y-32">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight">THE DIRECTORY OF <br /><span className="text-secondary">AUTHORITY.</span></h2>
                <div className="w-32 h-2 bg-secondary" />
              </div>
              <p className="text-xl text-foreground/60 max-w-xl font-light leading-relaxed">
                Institutional rigor brought to Malaysia's trade finance sector. Every structured note is a product of combined compliance and industrial logic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {team.map((member, i) => (
                <div key={i} className="group space-y-8">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-[40px] glass-card border-white/5 shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-glow-gold pointer-events-none">
                      <Linkedin size={20} />
                    </div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-black uppercase text-foreground tracking-tight leading-none">{member.name}</h3>
                      <div className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">{member.role}</div>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40 bg-card/30 border-t border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight">ENGAGE <br /><span className="text-secondary">US directly.</span></h2>
                <div className="w-32 h-2 bg-secondary" />
              </div>

              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    <MapPin size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Headquarters</div>
                    <p className="text-xl font-bold leading-relaxed">
                      Level 19, Menara 2, KL Eco City,<br />
                      59200 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    <Mail size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Correspondence</div>
                    <p className="text-xl font-bold leading-relaxed">enquiries@shefa.com.my</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    <Phone size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Global Switchboard</div>
                    <p className="text-xl font-bold leading-relaxed">+603 2774 5254</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[48px] overflow-hidden min-h-[500px] border-white/5 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.590112952402!2d101.669!3d3.118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4988e4e93d8b%3A0xc3af87c7112b322a!2sKL%20Eco%20City!5e0!3m2!1sen!2smy!4v1715421234567!5m2!1sen!2smy"
                className="absolute inset-0 w-full h-full grayscale invert opacity-50 contrast-125"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Footer */}
      <section className="py-24 bg-card/10">
        <div className="w-full px-6 lg:px-12 text-center">
          <div className="flex flex-col items-center gap-6">
            <ShieldCheck size={64} className="text-secondary opacity-30" />
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40">Audit & Risk Certified // Regulated Asset Management</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
