import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', phone: '', interest: '', message: '' });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Level 19, Menara 2',
        'KL Eco City',
        '59200 Kuala Lumpur, Malaysia',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+60 3-2774 5254'],
      link: 'tel:+60327745254',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['enquiries@shefa.com.my'],
      link: 'mailto:enquiries@shefa.com.my',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: Closed'],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="max-w-4xl">
            <span className="eyebrow block mb-4 text-white/80">Contact</span>
            <div className="gold-rule mb-6" />
            <h1 className="heading-xl text-white mb-6">
              Get in <span className="text-shefa-gold">Touch</span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl">
              Have questions about our services? Ready to protect your business or start investing? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-32 bg-shefa-white">
        <div className="w-[86vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-shefa-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-shefa-navy mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-shefa-gray">{detail}</p>
                    ))}
                  </div>
                </div>
              );

              return info.link ? (
                <a key={info.title} href={info.link} className="block hover:shadow-card-hover transition-shadow">
                  {content}
                </a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="eyebrow block mb-4">Enquiry Form</span>
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-shefa-navy mb-6">
                Send Us a <span className="text-shefa-gold">Message</span>
              </h2>
              <p className="body-lg mb-8">
                Fill out the form below and our team will get back to you within 48 hours.
              </p>

              {submitted ? (
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 rounded-xl bg-shefa-gold/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-shefa-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-shefa-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-shefa-gray">
                    Thank you for reaching out. We will get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-shefa-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-shefa-navy mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-shefa-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-shefa-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all"
                        placeholder="+60 XX-XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-shefa-navy mb-2">
                      I am interested in *
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="borrower">Becoming a Borrower (SME Financing)</option>
                      <option value="lender">Becoming a Lender (Investment)</option>
                      <option value="insurance">Trade Credit Insurance</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-shefa-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] focus:border-shefa-gold focus:ring-1 focus:ring-shefa-gold outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="image-card h-[400px] lg:h-auto overflow-hidden">
              <img
                src="/hero_main.jpg"
                alt="Shefa Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 bg-shefa-navy">
        <div className="w-[86vw] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow block mb-4 text-white/80">Location</span>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">
              Find Us in <span className="text-shefa-gold">Kuala Lumpur</span>
            </h2>
            <p className="text-white/90">
              Located in the heart of KL Eco City, easily accessible via public transport.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-shefa-gold mx-auto mb-4" />
              <h3 className="font-heading text-xl font-medium text-white mb-2">Shefa Risk Management</h3>
              <p className="text-white/90">
                Level 19, Boutique Office 1, Menara 2<br />
                KL Eco City, 59200 Kuala Lumpur
              </p>
              <a
                href="https://maps.google.com/?q=KL+Eco+City"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 px-6 py-3 bg-shefa-gold text-shefa-navy font-medium rounded-xl hover:bg-shefa-gold/90 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
